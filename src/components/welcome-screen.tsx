'use client';

import { useState, useEffect } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WELCOME_TEXT = `Welcome to ademIDE — my portfolio as a code editor.

Browse my experience, skills, and projects as TypeScript files, or switch to Recruiter View for a traditional resume.`;

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'welcome'>('loading');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);

  // Loading animation
  useEffect(() => {
    if (phase !== 'loading') return;

    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('welcome'), 300);
          return 100;
        }
        // Variable speed for more realistic feel
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [phase]);

  // Typing animation for welcome text
  useEffect(() => {
    if (phase !== 'welcome') return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= WELCOME_TEXT.length) {
        setTypedText(WELCOME_TEXT.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [phase]);

  // Keyboard support - Enter to continue
  useEffect(() => {
    if (!showButton) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showButton, onComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-lg w-full mx-4 text-center">
        {phase === 'loading' && (
          <div className="space-y-6">
            {/* Logo / Title */}
            <div className="mb-8">
              <h1 
                className="text-3xl sm:text-4xl font-bold mb-2 font-mono"
                style={{ color: 'var(--text-primary)' }}
              >
                <span style={{ color: 'var(--text-accent)' }}>&lt;</span>
                ademIDE
                <span style={{ color: 'var(--text-accent)' }}> /&gt;</span>
              </h1>
              <p 
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                initializing portfolio...
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-xs mx-auto">
              <div 
                className="h-1 rounded-full overflow-hidden"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <div 
                  className="h-full transition-all duration-100 ease-out"
                  style={{ 
                    width: `${loadingProgress}%`,
                    background: 'var(--text-accent)'
                  }}
                />
              </div>
              <p 
                className="text-xs mt-2 font-mono"
                style={{ color: 'var(--text-muted)' }}
              >
                {loadingProgress < 30 && 'Loading modules...'}
                {loadingProgress >= 30 && loadingProgress < 60 && 'Compiling TypeScript...'}
                {loadingProgress >= 60 && loadingProgress < 90 && 'Building portfolio...'}
                {loadingProgress >= 90 && 'Ready!'}
              </p>
            </div>
          </div>
        )}

        {phase === 'welcome' && (
          <div className="space-y-6">
            {/* Terminal-style welcome */}
            <div 
              className="text-left p-4 sm:p-6 rounded-lg border"
              style={{ 
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)'
              }}
            >
              {/* Terminal header */}
              <div 
                className="flex items-center gap-2 mb-4 pb-3 border-b"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span 
                  className="text-xs font-mono ml-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  ~/portfolio/README.md
                </span>
              </div>

              {/* Typed content */}
              <div 
                className="font-mono text-sm sm:text-base leading-relaxed whitespace-pre-wrap min-h-[80px]"
                style={{ color: 'var(--text-primary)' }}
              >
                {typedText}
                <span 
                  className="inline-block w-2 h-4 ml-0.5 animate-pulse"
                  style={{ background: 'var(--text-accent)' }}
                />
              </div>
            </div>

            {/* Enter button */}
            <div 
              className={`transition-all duration-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <button
                onClick={onComplete}
                className="px-8 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ 
                  background: 'var(--text-accent)',
                  color: 'var(--bg-primary)'
                }}
              >
                Enter Portfolio →
              </button>
              <p 
                className="text-xs mt-3"
                style={{ color: 'var(--text-muted)' }}
              >
                Press Enter or click to continue
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
