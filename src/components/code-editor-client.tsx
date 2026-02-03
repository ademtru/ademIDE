'use client';

import { useEffect, useState, useRef } from 'react';
import { findFile } from '@/lib/portfolio-content';
import { GitHistory } from './git-history';

interface CodeEditorClientProps {
  activeFilePath: string;
}

function getTheme(): 'github-dark-default' | 'github-light-default' {
  if (typeof document === 'undefined') return 'github-dark-default';
  const theme = document.documentElement.getAttribute('data-theme');
  return theme === 'light' ? 'github-light-default' : 'github-dark-default';
}

function countLines(content: string): number {
  return content.split('\n').length;
}

function linkifyCode(html: string): string {
  // Match URLs in string literals (inside quotes)
  // This regex finds URLs that are wrapped in quotes and inside span tags
  const urlPattern = /(&apos;|&#39;|'|")(https?:\/\/[^\s'"`<>]+)(\1)/g;
  const emailPattern = /(&apos;|&#39;|'|")([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\1)/g;
  
  html = html.replace(urlPattern, (match, quote1, url, quote2) => {
    return `${quote1}<a href="${url}" target="_blank" rel="noopener noreferrer" class="code-link">${url}</a>${quote2}`;
  });
  
  html = html.replace(emailPattern, (match, quote1, email, quote2) => {
    return `${quote1}<a href="mailto:${email}" class="code-link">${email}</a>${quote2}`;
  });
  
  return html;
}

export function CodeEditorClient({ activeFilePath }: CodeEditorClientProps) {
  const [html, setHtml] = useState<string>('');
  const [filename, setFilename] = useState<string>('');
  const [lineCount, setLineCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const [cursorLine, setCursorLine] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState<{ top: number; left: number } | null>(null);
  const [customComponent, setCustomComponent] = useState<string | null>(null);
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const previousFileRef = useRef<string>('');
  const editorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'dark';
          setCurrentTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'dark');

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function loadHighlightedCode() {
      setIsLoading(true);
      const file = findFile(activeFilePath);
      
      if (!file || !file.content) {
        setHtml('<pre>File not found</pre>');
        setFilename('unknown');
        setLineCount(0);
        setCustomComponent(null);
        setIsLoading(false);
        return;
      }

      // Check if this file should render a custom component
      if (file.content.startsWith('__COMPONENT__:')) {
        const componentName = file.content.replace('__COMPONENT__:', '').trim();
        setCustomComponent(componentName);
        setFilename(file.name);
        setLineCount(0);
        setIsLoading(false);
        return;
      }
      
      setCustomComponent(null);
      const totalLines = countLines(file.content);
      setFilename(file.name);
      setLineCount(totalLines);

      try {
        // Dynamically import shiki to avoid SSR issues
        const { codeToHtml } = await import('shiki');
        const theme = getTheme();
        let highlightedHtml = await codeToHtml(file.content, {
          lang: 'typescript',
          theme,
          transformers: [
            {
              // Add line numbers to each line
              line(node, line) {
                node.properties['data-line'] = line;
              },
            },
          ],
        });
        
        // Make URLs and emails clickable
        highlightedHtml = linkifyCode(highlightedHtml);
        
        setHtml(highlightedHtml);
        
        // Only trigger typing animation on file change (not theme change)
        const isNewFile = previousFileRef.current !== activeFilePath;
        previousFileRef.current = activeFilePath;
        
        if (isNewFile) {
          // Reset and start typing animation
          setVisibleLines(0);
          setIsTyping(true);
          setCursorLine(null); // Reset cursor on file change
          setCursorPosition(null);
          
          // Clear any existing animation
          if (typingRef.current) {
            clearInterval(typingRef.current);
          }
          
          // Animate lines appearing
          let currentLine = 0;
          const linesPerTick = Math.max(1, Math.floor(totalLines / 30)); // Complete in ~30 ticks
          const speed = 25; // ms between ticks
          
          typingRef.current = setInterval(() => {
            currentLine += linesPerTick;
            if (currentLine >= totalLines) {
              setVisibleLines(totalLines);
              setIsTyping(false);
              if (typingRef.current) {
                clearInterval(typingRef.current);
              }
            } else {
              setVisibleLines(currentLine);
            }
          }, speed);
        } else {
          // Theme change - show all lines immediately
          setVisibleLines(totalLines);
        }
      } catch (error) {
        console.error('Failed to highlight code:', error);
        setHtml(`<pre>${file.content}</pre>`);
      }
      
      setIsLoading(false);
    }

    loadHighlightedCode();
    
    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, [activeFilePath, currentTheme]);

  // Generate CSS to hide lines beyond visibleLines during typing
  const typingStyle = isTyping ? `
    .shiki-wrapper code > span:nth-child(n+${visibleLines + 1}) {
      visibility: hidden;
      height: 0;
      padding: 0;
      margin: 0;
      min-height: 0;
    }
  ` : '';
  
  // Style for active cursor line
  const cursorLineStyle = cursorLine !== null ? `
    .shiki-wrapper code > span:nth-child(${cursorLine}) {
      background-color: var(--bg-active);
    }
  ` : '';

  // Render custom component if specified
  if (customComponent === 'GitHistory') {
    return (
      <div className="h-full flex flex-col" style={{ background: 'var(--bg-editor)' }}>
        {/* Tab bar */}
        <div 
          className="flex items-center border-b h-8 md:h-9 px-1 md:px-2"
          style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
        >
          <div 
            className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm border-t-2"
            style={{ 
              background: 'var(--bg-editor)', 
              color: 'var(--text-primary)',
              borderTopColor: 'var(--text-accent)'
            }}
          >
            <span className="text-orange-500 text-[10px] md:text-xs">📜</span>
            <span className="truncate max-w-[120px] md:max-w-none">{filename}</span>
          </div>
        </div>
        
        {/* Git History Component */}
        <div className="flex-1 overflow-hidden">
          <GitHistory />
        </div>
        
        {/* Status bar */}
        <div 
          className="h-5 md:h-6 flex items-center justify-between px-2 md:px-3 text-[10px] md:text-xs border-t flex-shrink-0"
          style={{ 
            background: 'var(--bg-secondary)', 
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)'
          }}
        >
          <div className="flex items-center gap-2 md:gap-4 min-w-0">
            <span className="truncate">{activeFilePath}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <span>Git Log</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col" style={{ background: 'var(--bg-editor)' }}>
      {/* Typing animation styles */}
      {isTyping && <style>{typingStyle}</style>}
      {/* Cursor line highlight */}
      {cursorLine !== null && <style>{cursorLineStyle}</style>}
      
      {/* Tab bar */}
      <div 
        className="flex items-center border-b h-8 md:h-9 px-1 md:px-2"
        style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
      >
        <div 
          className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm border-t-2"
          style={{ 
            background: 'var(--bg-editor)', 
            color: 'var(--text-primary)',
            borderTopColor: 'var(--text-accent)'
          }}
        >
          <span className="text-[#3178c6] text-[10px] md:text-xs font-bold">TS</span>
          <span className="truncate max-w-[120px] md:max-w-none">{filename}</span>
        </div>
      </div>
      
      {/* Editor content */}
      <div ref={contentRef} className="flex-1 overflow-auto relative">
        {isLoading ? (
          <div className="p-4" style={{ color: 'var(--text-secondary)' }}>Loading...</div>
        ) : (
          <>
            <div 
              ref={editorRef}
              className="shiki-wrapper"
              dangerouslySetInnerHTML={{ __html: html }}
              onClick={handleLineClick}
            />
            {/* Blinking cursor - shows on clicked line */}
            {cursorLine !== null && cursorPosition && (
              <div 
                className="editor-cursor"
                style={{
                  position: 'absolute',
                  top: cursorPosition.top + 2,
                  left: cursorPosition.left,
                  width: '2px',
                  height: '1.4em',
                  background: 'var(--text-accent)',
                  animation: 'blink 1s step-end infinite',
                }}
              />
            )}
          </>
        )}
      </div>
      
      {/* Status bar */}
      <div 
        className="h-5 md:h-6 flex items-center justify-between px-2 md:px-3 text-[10px] md:text-xs border-t flex-shrink-0"
        style={{ 
          background: 'var(--bg-secondary)', 
          borderColor: 'var(--border-color)',
          color: 'var(--text-secondary)'
        }}
      >
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <span className="truncate hidden sm:inline">{activeFilePath}</span>
          <span className="truncate sm:hidden">{filename}</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <span>Ln {lineCount}</span>
          <span className="hidden sm:inline">TypeScript</span>
          <span className="sm:hidden">TS</span>
          <span className="hidden md:inline">UTF-8</span>
        </div>
      </div>
    </div>
  );
  
  function handleLineClick(e: React.MouseEvent) {
    // Find the clicked line by traversing up to find the span with data-line
    let target = e.target as HTMLElement;
    while (target && target !== editorRef.current) {
      const lineAttr = target.getAttribute('data-line');
      if (lineAttr) {
        const lineNum = parseInt(lineAttr, 10);
        setCursorLine(lineNum);
        
        // Get the actual position of the line element
        const lineElement = target;
        const containerRect = contentRef.current?.getBoundingClientRect();
        const lineRect = lineElement.getBoundingClientRect();
        
        if (containerRect) {
          // Calculate text width by measuring actual content
          // The line has: ::before (line number) + actual code text
          // We need to find where the text content ends
          
          // Get the line content from our file data
          const file = findFile(activeFilePath);
          const lines = file?.content?.split('\n') || [];
          const lineText = lines[lineNum - 1] || '';
          
          // Create a temporary span to measure text width
          const measureSpan = document.createElement('span');
          measureSpan.style.font = '14px var(--font-mono), ui-monospace, monospace';
          measureSpan.style.visibility = 'hidden';
          measureSpan.style.position = 'absolute';
          measureSpan.style.whiteSpace = 'pre';
          measureSpan.textContent = lineText;
          document.body.appendChild(measureSpan);
          const textWidth = measureSpan.offsetWidth;
          document.body.removeChild(measureSpan);
          
          // Responsive offsets: mobile uses smaller padding/margins
          const isMobile = window.innerWidth < 768;
          const padding = isMobile ? 8 : 16; // 0.5rem or 1rem
          const lineNumberWidth = isMobile ? 32 : 48; // 2rem or 3rem
          const margin = isMobile ? 8 : 16; // 0.5rem or 1rem
          
          // Position: line left + padding + line number width + margin + text width
          const leftOffset = lineRect.left - containerRect.left + padding + lineNumberWidth + margin + textWidth;
          
          setCursorPosition({
            top: lineRect.top - containerRect.top + contentRef.current!.scrollTop,
            left: leftOffset,
          });
        }
        return;
      }
      target = target.parentElement as HTMLElement;
    }
  }
}
