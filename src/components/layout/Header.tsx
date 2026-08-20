'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export interface HeaderProps {
  currentLanguage?: 'en' | 'te';
  currentTheme?: 'prabha' | 'sandhya';
  onLanguageToggle?: () => void;
  onThemeToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage: propLang,
  currentTheme: propTheme,
  onLanguageToggle: propLangToggle,
  onThemeToggle: propThemeToggle,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const context = useLanguageTheme();

  const currentLanguage = propLang || context.currentLanguage;
  const currentTheme = propTheme || context.currentTheme;
  const onLanguageToggle = propLangToggle || context.toggleLanguage;
  const onThemeToggle = propThemeToggle || context.toggleTheme;

  const isTe = currentLanguage === 'te';

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/95 backdrop-blur-md shadow-sm transition-colors duration-300">
      {/* Top Utility Bar for Desktop (PC View) */}
      <div className="hidden lg:block border-b border-[var(--border-subtle)] bg-[var(--color-secondary)] text-amber-100 text-xs py-1.5 px-4 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between">
          {/* Daily Operating Hours */}
          <div className="flex items-center gap-6 font-serif whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-amber-200">
              <i className="fa-solid fa-clock text-[11px] text-[var(--color-accent-gold)]"></i>
              {isTe ? 'ఆలయ ద్వారాలు: ఉదయం 6:00 - రాత్రి 8:30' : 'Temple Hours: 6:00 AM - 8:30 PM'}
            </span>
            <span className="text-amber-400/40">•</span>
            <span className="flex items-center gap-1.5 text-amber-200">
              <i className="fa-solid fa-location-dot text-[11px] text-[var(--color-accent-gold)]"></i>
              {isTe ? 'జగన్నాథపురం, శీఘ్ర దర్శనం' : 'Jagannaickpur Sacred Shrine'}
            </span>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/20 hover:bg-black/40 text-amber-200 hover:text-white font-medium transition-colors cursor-pointer"
              title="Toggle Language"
            >
              <i className="fa-solid fa-language text-xs text-[var(--color-accent-gold)]"></i>
              <span>{currentLanguage === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            <span className="text-amber-800">|</span>

            <button
              onClick={onThemeToggle}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/20 hover:bg-black/40 text-amber-200 hover:text-white transition-colors cursor-pointer"
              title="Toggle Theme"
            >
              {currentTheme === 'prabha' ? (
                <>
                  <i className="fa-solid fa-moon text-xs text-amber-300"></i>
                  <span>{isTe ? 'రాత్రి మోడ్' : 'Sandhya Mode'}</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-sun text-xs text-amber-300"></i>
                  <span>{isTe ? 'పగలు మోడ్' : 'Prabha Mode'}</span>
                </>
              )}
            </button>

            <span className="text-amber-800">|</span>

            <Link
              href="/admin/login"
              className="text-amber-200 hover:text-white font-semibold transition-colors flex items-center gap-1 text-[11px]"
            >
              <i className="fa-solid fa-user-shield text-[10px]"></i>
              <span>{isTe ? 'అడ్మిన్' : 'Admin Portal'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 gap-4">
        {/* Brand Emblem & Temple Name */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 min-w-0">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)] text-white shadow-sm transition-transform group-hover:scale-105 border border-[var(--border-gold)]">
            <i className="fa-solid fa-gopuram text-lg text-[var(--color-accent-gold)]"></i>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-xs sm:text-sm lg:text-base xl:text-lg font-bold tracking-tight text-[var(--color-secondary)] leading-snug group-hover:text-[var(--color-primary)] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              {isTe
                ? 'శ్రీ వేంకటేశ్వర & అభయ ఆంజనేయ స్వామి ఆలయం'
                : 'Sri Venkateshwara & Abaya Anjaneya Temple'}
            </span>
            <span className="text-[9px] lg:text-[10px] tracking-widest text-[var(--color-accent-gold)] font-mono uppercase font-semibold whitespace-nowrap">
              {isTe ? 'శ్రీదేవి భూదేవి సమేత దివ్య క్షేత్రం' : 'Sridevi Bhudevi Sametha Sacred Shrine'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 lg:gap-2 xl:gap-3 text-xs xl:text-sm font-semibold shrink-0">
          <Link
            href="/"
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              isActive('/')
                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'ప్రధాన పుట' : 'Home'}
          </Link>

          <Link
            href="/calendar"
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              isActive('/calendar')
                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'పంచాంగం' : 'Panchangam & Calendar'}
          </Link>

          <Link
            href="/sevas"
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              isActive('/sevas')
                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'పూజలు & సేవలు' : 'Sevas & Puja'}
          </Link>

          <Link
            href="/events"
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              isActive('/events')
                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'వేడుకలు & కార్యక్రమాలు' : 'Festivals & Events'}
          </Link>

          <Link
            href="/heritage"
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              isActive('/heritage')
                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'ఆలయ చరిత్ర' : 'Heritage'}
          </Link>

          <Link
            href="/gallery"
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
              isActive('/gallery')
                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'ఛాయాచిత్రాలు' : 'Gallery'}
          </Link>
        </nav>

        {/* Mobile & Utility Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={onLanguageToggle}
              className="px-2 py-1 rounded-lg text-[11px] font-semibold border border-[var(--border-gold)] text-[var(--text-primary)] bg-[var(--bg-surface)] cursor-pointer"
            >
              {currentLanguage === 'en' ? 'తెలుగు' : 'English'}
            </button>
            <button
              onClick={onThemeToggle}
              className="p-1.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)] text-xs cursor-pointer"
            >
              {currentTheme === 'prabha' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors text-sm cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)] px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <div className="flex flex-col space-y-1.5 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-[var(--bg-surface)] text-[var(--color-primary)] font-semibold border border-[var(--border-subtle)]"
            >
              <i className="fa-solid fa-house mr-2.5"></i>
              {isTe ? 'ప్రధాన పుట' : 'Home'}
            </Link>

            <Link
              href="/calendar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-calendar-week mr-2.5 text-[var(--color-accent-gold)]"></i>
              {isTe ? 'పంచాంగం' : 'Panchangam & Calendar'}
            </Link>

            <Link
              href="/sevas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-hands-praying mr-2.5 text-[var(--color-primary)]"></i>
              {isTe ? 'పూజలు & సేవలు' : 'Sevas & Booking'}
            </Link>

            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-calendar-days mr-2.5 text-[var(--color-accent-gold)]"></i>
              {isTe ? 'వేడుకలు & కార్యక్రమాలు' : 'Festivals & Events'}
            </Link>

            <Link
              href="/heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-monument mr-2.5 text-[var(--color-accent-gold)]"></i>
              {isTe ? 'ఆలయ చరిత్ర' : 'Temple Heritage'}
            </Link>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-images mr-2.5 text-[var(--color-primary)]"></i>
              {isTe ? 'ఛాయాచిత్రాలు' : 'Gallery'}
            </Link>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <Link
                href="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--color-primary)] flex items-center gap-2"
              >
                <i className="fa-solid fa-user-shield text-xs"></i>
                {isTe ? 'అడ్మిన్ పోర్టల్' : 'Admin Portal Sign In'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
