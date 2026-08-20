'use client';

import React, { createContext, useContext } from 'react';
import { useLanguageTheme } from './LanguageThemeContext';

export type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentLanguage, setLanguage, toggleLanguage } = useLanguageTheme();

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { currentLanguage, setLanguage, toggleLanguage } = useLanguageTheme();
  return {
    language: currentLanguage,
    setLanguage,
    toggleLanguage,
  };
};
