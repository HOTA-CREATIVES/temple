'use client';

import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'te' | 'kn' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    const cycle: Record<Language, Language> = {
      en: 'te',
      te: 'kn',
      kn: 'ta',
      ta: 'en',
    };
    setLanguage((prev) => cycle[prev]);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default fallback if used outside provider
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
    };
  }
  return context;
};
