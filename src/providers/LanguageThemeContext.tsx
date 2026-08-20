'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'te';
export type Theme = 'prabha' | 'sandhya';

interface LanguageThemeContextType {
  currentLanguage: Language;
  currentTheme: Theme;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const LanguageThemeContext = createContext<LanguageThemeContextType | undefined>(undefined);

export const LanguageThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<Language>('en');
  const [currentTheme, setCurrentThemeState] = useState<Theme>('prabha');

  useEffect(() => {
    // Hydrate preferences from localStorage
    const savedLang = localStorage.getItem('devalaya_lang') as Language | null;
    const savedTheme = localStorage.getItem('devalaya_theme') as Theme | null;

    if (savedLang && (savedLang === 'en' || savedLang === 'te')) {
      setCurrentLanguageState(savedLang);
    }

    if (savedTheme && (savedTheme === 'prabha' || savedTheme === 'sandhya')) {
      setCurrentThemeState(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'prabha');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguageState(lang);
    localStorage.setItem('devalaya_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = currentLanguage === 'en' ? 'te' : 'en';
    setLanguage(nextLang);
  };

  const setTheme = (theme: Theme) => {
    setCurrentThemeState(theme);
    localStorage.setItem('devalaya_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'prabha' ? 'sandhya' : 'prabha';
    setTheme(nextTheme);
  };

  return (
    <LanguageThemeContext.Provider
      value={{
        currentLanguage,
        currentTheme,
        toggleLanguage,
        setLanguage,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </LanguageThemeContext.Provider>
  );
};

export const useLanguageTheme = (): LanguageThemeContextType => {
  const context = useContext(LanguageThemeContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      currentLanguage: 'en',
      currentTheme: 'prabha',
      toggleLanguage: () => {},
      setLanguage: () => {},
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return context;
};
