'use client';

import { useState } from 'react';
import { FileTree } from './file-tree';
import { ThemeToggle } from './theme-toggle';
import { ViewModeToggle, ViewMode } from './view-mode-toggle';
import { RecruiterView } from './recruiter-view';
import { portfolioFiles, findFile, defaultFilePath } from '@/lib/portfolio-content';

interface IDELayoutClientProps {
  children: (activeFilePath: string) => React.ReactNode;
}

export function IDELayoutClient({ children }: IDELayoutClientProps) {
  const [activeFilePath, setActiveFilePath] = useState(defaultFilePath);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('ide');

  const handleFileSelect = (path: string) => {
    setActiveFilePath(path);
    // Close sidebar on mobile after selecting a file
    setSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      {/* Title bar */}
      <header 
        className="h-8 md:h-9 flex items-center justify-between px-2 md:px-4 border-b flex-shrink-0"
        style={{ background: 'var(--bg-titlebar)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center gap-2">
          {/* Mobile sidebar toggle - only show in IDE mode */}
          {viewMode === 'ide' && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              <SidebarIcon />
            </button>
          )}
          <span className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>ademIDE</span>
          <span className="hidden sm:inline text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>— portfolio</span>
        </div>
        <div className="flex items-center gap-1">
          <ViewModeToggle mode={viewMode} onModeChange={setViewMode} />
          <ThemeToggle />
        </div>
      </header>
      
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Mobile overlay - only show in IDE mode */}
        {viewMode === 'ide' && sidebarOpen && (
          <div 
            className="md:hidden absolute inset-0 bg-black/50 z-10"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar - only show in IDE mode */}
        {viewMode === 'ide' && (
          <aside 
            className={`
              absolute md:relative z-20 h-full
              w-56 sm:w-64 lg:w-72 border-r flex-shrink-0 overflow-auto
              transition-transform duration-200 ease-in-out
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}
            style={{ background: 'var(--bg-sidebar)', borderColor: 'var(--border-color)' }}
          >
            <FileTree
              files={portfolioFiles}
              activeFilePath={activeFilePath}
              onFileSelect={handleFileSelect}
            />
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-hidden">
          {viewMode === 'ide' ? children(activeFilePath) : <RecruiterView />}
        </main>
      </div>
    </div>
  );
}

function SidebarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="12" height="12" rx="1" />
      <line x1="6" y1="2" x2="6" y2="14" />
    </svg>
  );
}

export { findFile };
