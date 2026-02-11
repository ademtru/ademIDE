'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { type SupportedLanguage } from '@/lib/portfolio-content';

interface LanguageContextType {
  selectedLanguage: SupportedLanguage;
  setSelectedLanguage: (language: SupportedLanguage) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('typescript');

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
