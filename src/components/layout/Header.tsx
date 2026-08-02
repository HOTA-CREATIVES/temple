import React from 'react';
import Link from 'next/link';

export interface HeaderProps {
  currentLanguage?: 'en' | 'te';
  currentTheme?: 'prabha' | 'sandhya';
  onLanguageToggle?: () => void;
  onThemeToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage = 'en',
  currentTheme = 'prabha',
  onLanguageToggle,
  onThemeToggle,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/90 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo / Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-md transition-transform group-hover:scale-105">
            <span className="text-xl font-bold font-serif">🛕</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wide text-[var(--color-secondary)] sm:text-xl">
              {currentLanguage === 'te' ? 'దేవాలయం' : 'Devalaya'}
            </span>
            <span className="text-[10px] tracking-wider text-[var(--text-secondary)] uppercase font-mono">
              {currentLanguage === 'te' ? 'దివ్య స్థలం' : 'Devotional Portal'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-[var(--color-primary)] font-semibold hover:opacity-80 transition-opacity">
            {currentLanguage === 'te' ? 'ప్రధాన పుట' : 'Home'}
          </Link>
          <Link href="/events" className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
            {currentLanguage === 'te' ? 'వేడుకలు' : 'Events'}
          </Link>
          <Link href="/calendar" className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
            {currentLanguage === 'te' ? 'పంచాంగం' : 'Telugu Calendar'}
          </Link>
          <Link href="/gallery" className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
            {currentLanguage === 'te' ? 'ఛాయాచిత్రాలు' : 'Gallery'}
          </Link>
          <Link href="/about" className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
            {currentLanguage === 'te' ? 'ఆలయం గురించి' : 'About / Donate'}
          </Link>
        </nav>

        {/* Action Controls (Theme, Language, Admin Login) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onLanguageToggle}
            className="px-2.5 py-1 rounded-md text-xs font-semibold border border-[var(--border-gold)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors"
            title="Toggle Language"
          >
            {currentLanguage === 'en' ? 'తెలుగు' : 'English'}
          </button>

          <button
            onClick={onThemeToggle}
            className="p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors"
            title="Toggle Theme"
          >
            {currentTheme === 'prabha' ? '🌙' : '☀️'}
          </button>

          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            {currentLanguage === 'te' ? 'అడ్మిన్' : 'Admin'}
          </Link>
        </div>
      </div>
    </header>
  );
};
