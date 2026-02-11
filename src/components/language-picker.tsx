'use client';

import { useState, useRef, useEffect } from 'react';
import { type SupportedLanguage } from '@/lib/portfolio-content';

export type { SupportedLanguage };

interface LanguageOption {
  value: SupportedLanguage;
  label: string;
  icon: string;
}

const languages: LanguageOption[] = [
  { value: 'typescript', label: 'TypeScript', icon: 'TS' },
  { value: 'javascript', label: 'JavaScript', icon: 'JS' },
  { value: 'python', label: 'Python', icon: 'PY' },
  { value: 'cpp', label: 'C++', icon: 'C++' },
  { value: 'pseudocode', label: 'Pseudocode', icon: 'PSEUDO' },
];

interface LanguagePickerProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
  align?: 'left' | 'right'; // Control dropdown alignment
}

export function LanguagePicker({ currentLanguage, onLanguageChange, align = 'left' }: LanguagePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.value === currentLanguage) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (language: SupportedLanguage) => {
    onLanguageChange(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors hover:bg-opacity-80"
        style={{ 
          color: 'var(--text-secondary)',
          background: isOpen ? 'var(--bg-hover)' : 'transparent'
        }}
        aria-label="Select syntax highlighting language"
        title="Select syntax highlighting language"
      >
        <span className="font-mono font-semibold text-[10px]" style={{ color: 'var(--text-accent)' }}>
          {currentLang.icon}
        </span>
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 16 16" 
          fill="currentColor"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className={`absolute top-full mt-1 w-40 rounded shadow-lg border z-50 overflow-hidden ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
          style={{ 
            background: 'var(--bg-dropdown)',
            borderColor: 'var(--border-color)'
          }}
        >
          <div className="py-1 max-h-64 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => handleSelect(lang.value)}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-xs transition-colors text-left"
                style={{
                  background: lang.value === currentLanguage ? 'var(--bg-active)' : 'transparent',
                  color: 'var(--text-primary)'
                }}
                onMouseEnter={(e) => {
                  if (lang.value !== currentLanguage) {
                    e.currentTarget.style.background = 'var(--bg-hover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (lang.value !== currentLanguage) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <span 
                  className="font-mono font-semibold text-[10px] w-12 flex-shrink-0"
                  style={{ color: 'var(--text-accent)' }}
                >
                  {lang.icon}
                </span>
                <span>{lang.label}</span>
                {lang.value === currentLanguage && (
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 16 16" 
                    fill="currentColor"
                    className="ml-auto"
                    style={{ color: 'var(--text-accent)' }}
                  >
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
