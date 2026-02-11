'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import { FileTree } from './file-tree';
import { ThemeToggle } from './theme-toggle';
import { ViewModeToggle, ViewMode } from './view-mode-toggle';
import { RecruiterView } from './recruiter-view';
import { WelcomeScreen } from './welcome-screen';
import { OnboardingTooltip } from './onboarding-tooltip';
import { LanguagePicker } from './language-picker';
import { portfolioFiles, findFile, defaultFilePath } from '@/lib/portfolio-content';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface IDELayoutClientProps {
  children: (activeFilePath: string) => React.ReactNode;
}

export function IDELayoutClient({ children }: IDELayoutClientProps) {
  const [activeFilePath, setActiveFilePath] = useState(defaultFilePath);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start with sidebar open
  const [viewMode, setViewMode] = useState<ViewMode>('recruiter'); // Start in recruiter mode for wider audience
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

  const handleRestartOnboarding = () => {
    setShowOnboardingTooltip(true);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    // Open sidebar if switching to IDE mode
    if (mode === 'ide') {
      setSidebarOpen(true);
    }
    // Dismiss tooltip when user clicks the toggle
    if (showOnboardingTooltip) {
      setShowOnboardingTooltip(false);
    }
  };

  const handleFileSelect = (path: string) => {
    setActiveFilePath(path);
    // Close sidebar on mobile after selecting a file
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  // Listen for the 'ademide-switch-to-ide' event and switch to IDE mode
  useEffect(() => {
    const handleSwitchToIde = () => {
      setViewMode('ide');
      setSidebarOpen(true);
    };
    window.addEventListener('ademide-switch-to-ide', handleSwitchToIde);
    return () => {
      window.removeEventListener('ademide-switch-to-ide', handleSwitchToIde);
    };
  }, []);

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
    <LanguageProvider>
      <IDELayoutContent 
        activeFilePath={activeFilePath}
        sidebarOpen={sidebarOpen}
        viewMode={viewMode}
        showOnboardingTooltip={showOnboardingTooltip}
        onFileSelect={handleFileSelect}
        onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        onViewModeChange={handleViewModeChange}
        onDismissTooltip={handleDismissTooltip}
        onRestartOnboarding={handleRestartOnboarding}
      >
        {children}
      </IDELayoutContent>
    </LanguageProvider>
  );
}

interface IDELayoutContentProps {
  activeFilePath: string;
  sidebarOpen: boolean;
  viewMode: ViewMode;
  showOnboardingTooltip: boolean;
  onFileSelect: (path: string) => void;
  onSidebarToggle: () => void;
  onViewModeChange: (mode: ViewMode) => void;
  onDismissTooltip: () => void;
  onRestartOnboarding: () => void;
  children: (activeFilePath: string) => React.ReactNode;
}

function IDELayoutContent({ 
  activeFilePath, 
  sidebarOpen, 
  viewMode, 
  showOnboardingTooltip,
  onFileSelect, 
  onSidebarToggle,
  onViewModeChange,
  onDismissTooltip,
  onRestartOnboarding,
  children 
}: IDELayoutContentProps) {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  return (
    <div className="h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      {/* Onboarding tooltip for recruiter mode */}
      <OnboardingTooltip 
        show={showOnboardingTooltip} 
        onDismiss={onDismissTooltip} 
      />
      
      {/* Title bar */}
      <header 
        className="h-8 flex items-center justify-between px-2 border-b flex-shrink-0"
        style={{ background: 'var(--bg-titlebar)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center gap-2">
          {/* Sidebar toggle - show in both IDE and recruiter mode */}
          <button
            onClick={onSidebarToggle}
            className="flex items-center justify-center w-7 h-7 rounded transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <SidebarIcon />
          </button>
          <span className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>ademIDE</span>
          <span className="hidden sm:inline text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>— portfolio</span>
        </div>
        <div className="flex items-center gap-1">
          <LanguagePicker 
            currentLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            align="right"
          />
          <ViewModeToggle mode={viewMode} onModeChange={onViewModeChange} />
          <ThemeToggle />
          <button
            onClick={onRestartOnboarding}
            className="flex items-center justify-center w-7 h-7 rounded transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            aria-label="Show help"
            title="Show help"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="8" r="7" />
              <path d="M6 6a2 2 0 0 1 4 0c0 1-1 1.5-2 2v1" />
              <circle cx="8" cy="12" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </button>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Overlay when sidebar is open on mobile */}
        {viewMode === 'ide' && sidebarOpen && (
          <div 
            className="md:hidden absolute inset-0 bg-black/50 z-10"
            onClick={onSidebarToggle}
          />
        )}
        
        {/* Sidebar - show in both IDE and recruiter mode, with different content */}
        {(viewMode === 'ide' || viewMode === 'recruiter') && (
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
              {viewMode === 'ide' ? (
                <FileTree
                  files={portfolioFiles}
                  activeFilePath={activeFilePath}
                  onFileSelect={onFileSelect}
                />
              ) : (
                // Recruiter sidebar menu: section links
                <div className="p-4 space-y-4">
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ color: 'var(--text-accent)' }}>Menu</div>
                    <nav className="flex flex-col gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <a href="#about" className="hover:underline">About</a>
                      <a href="#experience" className="hover:underline">Experience</a>
                      <a href="#skills" className="hover:underline">Skills</a>
                      <a href="#projects" className="hover:underline">Projects</a>
                      <a href="#values" className="hover:underline">Values</a>
                      <a href="#contact" className="hover:underline">Contact</a>
                    </nav>
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ color: 'var(--text-accent)' }}>Resume Download</div>
                    <a href="/ademide-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xs underline" style={{ color: 'var(--text-secondary)' }}>PDF Resume</a>
                  </div>
                </div>
              )}
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
