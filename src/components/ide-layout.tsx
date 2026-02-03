'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import { FileTree } from './file-tree';
import { ThemeToggle } from './theme-toggle';
import { ViewModeToggle, ViewMode } from './view-mode-toggle';
import { RecruiterView } from './recruiter-view';
import { WelcomeScreen } from './welcome-screen';
import { OnboardingTooltip } from './onboarding-tooltip';
import { portfolioFiles, findFile, defaultFilePath } from '@/lib/portfolio-content';

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface IDELayoutClientProps {
  children: (activeFilePath: string) => React.ReactNode;
}

export function IDELayoutClient({ children }: IDELayoutClientProps) {
  const [activeFilePath, setActiveFilePath] = useState(defaultFilePath);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start with sidebar open
  const [viewMode, setViewMode] = useState<ViewMode>('ide');
  const [showWelcome, setShowWelcome] = useState<boolean | null>(null);
  const [showOnboardingTooltip, setShowOnboardingTooltip] = useState(false);

  // Check if user has seen welcome screen before
  useIsomorphicLayoutEffect(() => {
    const hasSeenWelcome = localStorage.getItem('ademide-welcomed');
    setShowWelcome(!hasSeenWelcome);
  }, []);

  const handleWelcomeComplete = () => {
    localStorage.setItem('ademide-welcomed', 'true');
    setShowWelcome(false);
    // Show onboarding tooltip after welcome completes
    setShowOnboardingTooltip(true);
  };

  const handleDismissTooltip = () => {
    setShowOnboardingTooltip(false);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    // Dismiss tooltip when user clicks the toggle
    if (showOnboardingTooltip) {
      setShowOnboardingTooltip(false);
    }
  };

  const handleFileSelect = (path: string) => {
    setActiveFilePath(path);
    // Close sidebar on mobile after selecting a file
    setSidebarOpen(false);
  };

  // Show nothing until we know if welcome should be shown (prevents flash)
  if (showWelcome === null) {
    return (
      <div className="h-screen" style={{ background: 'var(--bg-primary)' }} />
    );
  }

  // Show welcome screen on first visit
  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      {/* Onboarding tooltip for recruiter mode */}
      <OnboardingTooltip 
        show={showOnboardingTooltip} 
        onDismiss={handleDismissTooltip} 
      />
      
      {/* Title bar */}
      <header 
        className="h-8 flex items-center justify-between px-2 border-b flex-shrink-0"
        style={{ background: 'var(--bg-titlebar)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center gap-2">
          {/* Sidebar toggle - show in IDE mode on all screen sizes */}
          {viewMode === 'ide' && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center justify-center w-7 h-7 rounded transition-colors"
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
          <ViewModeToggle mode={viewMode} onModeChange={handleViewModeChange} />
          <ThemeToggle />
        </div>
      </header>
      
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Overlay when sidebar is open on mobile */}
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
              sidebar-panel absolute md:relative z-20 h-full
              border-r flex-shrink-0
              transition-all duration-200 ease-in-out
              ${sidebarOpen 
                ? 'translate-x-0 overflow-auto' 
                : '-translate-x-full md:translate-x-0 overflow-hidden'}
            `}
            style={{ 
              background: 'var(--bg-sidebar)', 
              borderColor: sidebarOpen ? 'var(--border-color)' : 'transparent',
              width: sidebarOpen ? undefined : 0,
            }}
          >
            <div className="w-56 sm:w-64 lg:w-72">
              <FileTree
                files={portfolioFiles}
                activeFilePath={activeFilePath}
                onFileSelect={handleFileSelect}
              />
            </div>
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
