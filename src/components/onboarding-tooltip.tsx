'use client';

import { useState, useEffect } from 'react';

type OnboardingStep = 'language' | 'recruiter' | 'theme' | 'sidebar';

interface OnboardingTooltipProps {
  show: boolean;
  onDismiss: () => void;
}

const STEPS: OnboardingStep[] = ['language', 'recruiter', 'theme', 'sidebar'];

interface StepConfig {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tooltip: {
    top: string;
    right?: string;
    mdRight?: string;
    left?: string;
    mdLeft?: string;
    arrowRight?: string;
    arrowLeft?: string;
  };
  highlight: {
    top: string;
    right?: string;
    mdRight?: string;
    left?: string;
    mdLeft?: string;
    width?: string; // Optional custom width
    height?: string; // Optional custom height
  };
}

const STEP_CONFIG: Record<OnboardingStep, StepConfig> = {
  language: {
    title: 'Language Picker',
    subtitle: 'Choose your preferred syntax',
    description: 'Switch between TypeScript, JavaScript, Python, C++, and Pseudocode to see the portfolio in different languages.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4h4l1 1h7v8H2V4z" fill="#dcb67a" opacity="0.9" stroke="none" />
        <text x="5" y="11" fontSize="6" fill="#3178c6" fontFamily="sans-serif" fontWeight="bold">TS</text>
      </svg>
    ),
    tooltip: { top: '36px', right: '35px', arrowRight: '114px' },
    highlight: { top: '2px', right: '135px', width: '54px' }, 
  },
  recruiter: {
    title: 'Recruiter Mode',
    subtitle: 'Not into code? No problem!',
    description: 'Click this toggle to switch to a clean, traditional resume view.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5l-4-4z" />
        <polyline points="9,1 9,5 13,5" />
        <line x1="5" y1="8" x2="11" y2="8" />
        <line x1="5" y1="11" x2="11" y2="11" />
      </svg>
    ),
    tooltip: { top: '36px', right: '35px', arrowRight: '50px' },
    highlight: { top: '2px', right: '75px', width: '54px' }, 
  },
  theme: {
    title: 'Theme Toggle',
    subtitle: 'Light or dark?',
    description: 'Switch between light and dark themes to suit your preference.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    tooltip: { top: '36px', right: '30px', arrowRight: '16px' },
    highlight: { top: '2px', right: '40px' }, 
  },
  sidebar: {
    title: 'File Explorer',
    subtitle: 'Browse the codebase',
    description: 'Toggle the sidebar to explore different files in the portfolio.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="12" height="12" rx="1" />
        <line x1="6" y1="2" x2="6" y2="14" />
      </svg>
    ),
    tooltip: { top: '36px', left: '8px', arrowLeft: '16px' },
    highlight: { top: '2px', left: '8px' }, 
  },
};

export function OnboardingTooltip({ show, onDismiss }: OnboardingTooltipProps) {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('language');

  useEffect(() => {
    if (show) {
      // Small delay before showing to let the UI settle
      const showTimer = setTimeout(() => {
        // Reset to first step when showing
        setCurrentStep('language');
        setVisible(true);
        // Trigger animation after mount
        setTimeout(() => setAnimate(true), 50);
      }, 500);
      
      return () => clearTimeout(showTimer);
    }
  }, [show]);

  const handleDismiss = () => {
    setAnimate(false);
    setTimeout(() => {
      setVisible(false);
      onDismiss();
    }, 200);
  };

  const handleNext = () => {
    const currentIndex = STEPS.indexOf(currentStep);
    if (currentIndex < STEPS.length - 1) {
      // Animate out, switch step, animate in
      setAnimate(false);
      setTimeout(() => {
        setCurrentStep(STEPS[currentIndex + 1]);
        setTimeout(() => setAnimate(true), 50);
      }, 200);
    } else {
      handleDismiss();
    }
  };

  const config = STEP_CONFIG[currentStep];
  const isLastStep = STEPS.indexOf(currentStep) === STEPS.length - 1;
  const stepNumber = STEPS.indexOf(currentStep) + 1;

  if (!visible) return null;

  // Determine if this step uses left or right positioning
  const usesLeft = 'left' in config.tooltip;

  return (
    <>
      {/* Backdrop - subtle click-away */}
      <div 
        className="fixed inset-0 z-40"
        onClick={handleDismiss}
      />
      
      {/* Tooltip */}
      <div 
        className={`fixed z-50 transition-all duration-300 ${
          animate 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2'
        }`}
        style={{
          top: config.tooltip.top,
          ...(usesLeft 
            ? { left: config.tooltip.left } 
            : { right: config.tooltip.right }
          ),
        }}
      >
        {/* Arrow pointing up */}
        <div 
          className="absolute -top-2 w-4 h-4 rotate-45"
          style={{ 
            background: 'var(--bg-secondary)',
            ...(usesLeft 
              ? { left: config.tooltip.arrowLeft } 
              : { right: config.tooltip.arrowRight }
            ),
          }}
        />
        
        {/* Tooltip content */}
        <div 
          className="relative rounded-lg border shadow-lg p-4 max-w-[280px]"
          style={{ 
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)'
          }}
        >
          {/* Step indicator */}
          <div 
            className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full"
            style={{ 
              background: 'var(--bg-hover)',
              color: 'var(--text-muted)'
            }}
          >
            {stepNumber}/{STEPS.length}
          </div>

          {/* Header with icon */}
          <div className="flex items-start gap-3 mb-2 pr-8">
            <div 
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--bg-hover)', color: 'var(--text-accent)' }}
            >
              {config.icon}
            </div>
            <div>
              <h3 
                className="font-medium text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {config.title}
              </h3>
              <p 
                className="text-xs mt-0.5"
                style={{ color: 'var(--text-muted)' }}
              >
                {config.subtitle}
              </p>
            </div>
          </div>
          
          <p 
            className="text-sm leading-relaxed mb-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            {config.description}
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={handleDismiss}
              className="flex-1 px-3 py-2 rounded text-sm font-medium transition-colors"
              style={{ 
                background: 'var(--bg-hover)',
                color: 'var(--text-secondary)'
              }}
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="flex-1 px-3 py-2 rounded text-sm font-medium transition-colors"
              style={{ 
                background: 'var(--text-accent)',
                color: 'var(--bg-primary)'
              }}
            >
              {isLastStep ? 'Got it!' : 'Next'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Highlight ring around the current target */}
      <div 
        className={`fixed z-40 pointer-events-none transition-opacity duration-300 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: config.highlight.top,
          ...(usesLeft 
            ? { left: config.highlight.left } 
            : { right: config.highlight.right }
          ),
          width: config.highlight.width || '28px',
          height: config.highlight.height || '28px',
        }}
      >
        <div 
          className="absolute inset-0 rounded animate-ping"
          style={{ 
            background: 'var(--text-accent)',
            opacity: 0.3
          }}
        />
        <div 
          className="absolute inset-0 rounded"
          style={{ 
            boxShadow: `0 0 0 2px var(--text-accent)`,
            opacity: 0.5
          }}
        />
      </div>
    </>
  );
}
