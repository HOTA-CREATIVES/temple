'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isTe = currentLanguage === 'te';

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/95 backdrop-blur-md shadow-sm transition-colors duration-300">
      {/* Top Utility Bar for Desktop (PC View) */}
      <div className="hidden lg:block border-b border-[var(--border-subtle)] bg-amber-950 text-amber-100 text-xs py-1 px-4 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between">
          {/* Daily Operating Hours */}
          <div className="flex items-center gap-6 font-serif whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-amber-300">
              <i className="fa-solid fa-clock text-[11px] text-amber-400"></i>
              {isTe ? 'ఆలయ ద్వారాలు: ఉదయం 6:00 - రాత్రి 8:30' : 'Temple Hours: 6:00 AM - 8:30 PM'}
            </span>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1 text-amber-200 hover:text-white font-medium transition-colors"
              title="Toggle Language"
            >
              <i className="fa-solid fa-language text-xs text-amber-400"></i>
              <span>{currentLanguage === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            <span className="text-amber-800">|</span>

            <button
              onClick={onThemeToggle}
              className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors"
              title="Toggle Theme"
            >
              {currentTheme === 'prabha' ? (
                <>
                  <i className="fa-solid fa-moon text-xs text-amber-300"></i>
                  <span>{isTe ? 'రాత్రి మోడ్' : 'Sandhya'}</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-sun text-xs text-amber-300"></i>
                  <span>{isTe ? 'పగలు మోడ్' : 'Prabha'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 gap-4">
        {/* Brand Emblem & Temple Name */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 min-w-0">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-amber-700 text-white shadow-sm transition-transform group-hover:scale-105 border border-amber-500/40">
            <i className="fa-solid fa-gopuram text-lg text-amber-200"></i>
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

        {/* Stretched PC Navigation Links - Filtered to boundaries */}
        <nav className="hidden lg:flex items-center gap-1.5 lg:gap-2 xl:gap-4 text-xs xl:text-sm font-semibold shrink-0">
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              isActive('/')
                ? 'bg-amber-500/15 text-[var(--color-primary)] font-bold'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'ప్రధాన పుట' : 'Home'}
          </Link>

          <Link
            href="/calendar"
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              isActive('/calendar')
                ? 'bg-amber-500/15 text-[var(--color-primary)] font-bold'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'పంచాంగం' : 'Panchangam & Calendar'}
          </Link>

          <Link
            href="/events"
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              isActive('/events')
                ? 'bg-amber-500/15 text-[var(--color-primary)] font-bold'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'వేడుకలు & కార్యక్రమాలు' : 'Festivals & Events'}
          </Link>

          <Link
            href="/heritage"
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              isActive('/heritage')
                ? 'bg-amber-500/15 text-[var(--color-primary)] font-bold'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'ఆలయ చరిత్ర' : 'Temple Heritage'}
          </Link>

          <Link
            href="/gallery"
            className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
              isActive('/gallery')
                ? 'bg-amber-500/15 text-[var(--color-primary)] font-bold'
                : 'text-[var(--text-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            {isTe ? 'ఛాయాచిత్రాలు' : 'Gallery'}
          </Link>
        </nav>

        {/* Action Controls for PC & Mobile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={onLanguageToggle}
              className="px-2 py-1 rounded-md text-[11px] font-semibold border border-[var(--border-gold)] text-[var(--text-primary)] bg-[var(--bg-surface)]"
            >
              {currentLanguage === 'en' ? 'తెలుగు' : 'English'}
            </button>
            <button
              onClick={onThemeToggle}
              className="p-1.5 rounded-md border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)] text-xs"
            >
              {currentTheme === 'prabha' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors text-sm"
            aria-label="Toggle Mobile Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md bg-[var(--bg-surface)] text-[var(--color-primary)] font-semibold"
            >
              <i className="fa-solid fa-house mr-2.5"></i>
              {isTe ? 'ప్రధాన పుట' : 'Home'}
            </Link>

            <Link
              href="/calendar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-calendar-week mr-2.5 text-amber-600"></i>
              {isTe ? 'పంచాంగం' : 'Panchangam & Calendar'}
            </Link>

            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-calendar-days mr-2.5 text-[var(--color-accent-gold)]"></i>
              {isTe ? 'వేడుకలు & కార్యక్రమాలు' : 'Festivals & Events'}
            </Link>

            <Link
              href="/heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-monument mr-2.5 text-[var(--color-accent-gold)]"></i>
              {isTe ? 'ఆలయ చరిత్ర' : 'Temple Heritage'}
            </Link>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-images mr-2.5 text-[var(--color-primary)]"></i>
              {isTe ? 'ఛాయాచిత్రాలు' : 'Gallery'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
