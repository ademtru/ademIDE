'use client';

import { useEffect, useRef, useState } from 'react';

interface MinimapProps {
  content: string;
  visibleStartLine: number;
  visibleEndLine: number;
  totalLines: number;
  onNavigate: (line: number) => void;
}

export function Minimap({ 
  content, 
  visibleStartLine, 
  visibleEndLine, 
  totalLines,
  onNavigate 
}: MinimapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Render minimap and viewport indicator together
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || !content) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const lines = content.split('\n');
    const lineHeight = 3; // Fixed pixels per line
    const charWidth = 1.2; // pixels per character
    const maxWidth = 80; // max characters to show
    
    // Canvas dimensions based on content
    const canvasWidth = 80;
    const canvasHeight = lines.length * lineHeight;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Get CSS variable colors
    const computedStyle = getComputedStyle(document.documentElement);
    const bgColor = computedStyle.getPropertyValue('--bg-secondary').trim() || '#1e1e1e';
    const textColor = computedStyle.getPropertyValue('--text-muted').trim() || '#6e7681';
    const keywordColor = computedStyle.getPropertyValue('--syntax-keyword').trim() || '#ff7b72';
    const stringColor = computedStyle.getPropertyValue('--syntax-string').trim() || '#a5d6ff';
    const commentColor = computedStyle.getPropertyValue('--syntax-comment').trim() || '#8b949e';
    const accentColor = computedStyle.getPropertyValue('--text-accent').trim() || '#58a6ff';

    // Clear canvas
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw each line
    lines.forEach((line, index) => {
      const y = index * lineHeight;

      // Simple syntax detection for coloring
      const trimmed = line.trim();
      let color = textColor;
      
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
        color = commentColor;
      } else if (trimmed.includes("'") || trimmed.includes('"') || trimmed.includes('`')) {
        color = stringColor;
      } else if (/^(export|import|const|let|var|function|class|interface|return|if|else|for|while)/.test(trimmed)) {
        color = keywordColor;
      }

      ctx.fillStyle = color;
      
      // Draw line as small rectangles representing characters
      const chars = line.substring(0, maxWidth);
      let x = 2; // padding
      
      for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (char !== ' ' && char !== '\t') {
          ctx.fillRect(x, y, charWidth, lineHeight - 1);
        }
        x += charWidth;
      }
    });

    // Draw viewport indicator (sliding window)
    if (totalLines > 0 && canvasHeight > 0) {
      const viewportTop = (visibleStartLine / totalLines) * canvasHeight;
      const viewportHeight = Math.max(
        20, // minimum height
        ((visibleEndLine - visibleStartLine) / totalLines) * canvasHeight
      );

      // Draw semi-transparent viewport overlay
      ctx.fillStyle = `${accentColor}22`;
      ctx.fillRect(0, viewportTop, canvasWidth, viewportHeight);
      
      // Draw viewport border
      ctx.strokeStyle = `${accentColor}66`;
      ctx.lineWidth = 1;
      ctx.strokeRect(0.5, viewportTop + 0.5, canvasWidth - 1, viewportHeight - 1);
    }
  }, [content, visibleStartLine, visibleEndLine, totalLines]);

  const handleClick = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || !content || totalLines === 0) return;

    const rect = canvas.getBoundingClientRect();
    const y = e.clientY - rect.top;
    
    // Use totalLines to match the viewport indicator calculation
    const clickedLine = Math.floor((y / canvas.height) * totalLines);
    onNavigate(Math.max(0, Math.min(clickedLine, totalLines - 1)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleClick(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleClick(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!content || totalLines === 0) return null;

  return (
    <div 
      ref={containerRef}
      className="hidden lg:flex w-[80px] flex-shrink-0 cursor-pointer"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div 
        className="overflow-y-auto w-full h-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas
          ref={canvasRef}
          className="w-full block"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </div>
  );
}
