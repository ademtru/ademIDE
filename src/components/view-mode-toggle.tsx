'use client';

import { useLayoutEffect, useState, useEffect } from 'react';

export type ViewMode = 'ide' | 'recruiter';

interface ViewModeToggleProps {
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function ViewModeToggle({ mode, onModeChange }: ViewModeToggleProps) {
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-7 h-7" />;
  }

  return (
    <button
      onClick={() => onModeChange(mode === 'ide' ? 'recruiter' : 'ide')}
      className="flex items-center gap-1.5 px-2 py-1 rounded transition-colors text-xs font-medium"
      style={{ 
        color: 'var(--text-secondary)',
        border: '1px solid var(--border-color)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-hover)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
      aria-label={mode === 'ide' ? 'Switch to recruiter view' : 'Switch to IDE view'}
      title={mode === 'ide' ? 'Switch to recruiter view' : 'Switch to IDE view'}
    >
      {mode === 'ide' ? (
        <>
          <DocumentIcon />
          <span className="hidden sm:inline">Resume</span>
        </>
      ) : (
        <>
          <CodeIcon />
          <span className="hidden sm:inline">IDE</span>
        </>
      )}
    </button>
  );
}

function DocumentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5l-4-4z" />
      <polyline points="9,1 9,5 13,5" />
      <line x1="5" y1="8" x2="11" y2="8" />
      <line x1="5" y1="11" x2="11" y2="11" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,4 1,8 4,12" />
      <polyline points="12,4 15,8 12,12" />
      <line x1="10" y1="2" x2="6" y2="14" />
    </svg>
  );
}
