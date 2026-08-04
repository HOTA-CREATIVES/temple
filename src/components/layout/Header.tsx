'use client';

import React, { useState } from 'react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/95 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-wrap lg:flex-nowrap items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5 gap-y-2">
        {/* Brand Logo / Title */}
        <Link href="/" className="flex items-center gap-2.5 group shrink min-w-0 max-w-full lg:max-w-md xl:max-w-xl">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-md transition-transform group-hover:scale-105">
            <i className="fa-solid fa-gopuram text-base sm:text-lg"></i>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-xs sm:text-sm xl:text-base font-bold tracking-wide text-[var(--color-secondary)] leading-tight">
              {currentLanguage === 'te' 
                ? 'శ్రీ శ్రీదేవి భూదేవి సమేత శ్రీ వేంకటేశ్వర స్వామి & శ్రీ అభయ ఆంజనేయ స్వామి ఆలయం' 
                : 'SRI SRIDEVI BHUDEVI SAMETHI SRI VENKATESHWARA SWAMY & SRI ABAYA ANJANEY SWAMY TEMPLE'}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-[var(--text-secondary)] uppercase font-mono">
              {currentLanguage === 'te' ? 'దివ్య స్థలం' : 'Devotional Portal'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Dropdown Menu */}
        <nav className="hidden md:flex flex-wrap items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium shrink-0">
          <Link href="/" className="text-[var(--color-primary)] font-semibold hover:opacity-80 transition-opacity">
            {currentLanguage === 'te' ? 'ప్రధాన పుట' : 'Home'}
          </Link>

          {/* Devotional Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 py-2 text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors font-medium">
              <span>{currentLanguage === 'te' ? 'దివ్య సేవలు' : 'Devotional Services'}</span>
              <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-hover:rotate-180"></i>
            </button>

            {/* Dropdown Menu Popup */}
            <div className="absolute left-0 top-full hidden group-hover:block w-56 pt-1 z-50">
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2 shadow-xl backdrop-blur-md">
                <Link
                  href="/sevas"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg hover:bg-[var(--bg-surface)] text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <i className="fa-solid fa-hands-praying text-[var(--color-primary)]"></i>
                  <span>{currentLanguage === 'te' ? 'ఆన్‌లైన్ సేవా బుకింగ్' : 'Online Seva Booking'}</span>
                </Link>
                <Link
                  href="/donate"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg hover:bg-[var(--bg-surface)] text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <i className="fa-solid fa-hand-holding-heart text-[var(--color-accent-emerald)]"></i>
                  <span>{currentLanguage === 'te' ? 'అన్నదానం & విరాళాలు' : 'Annadanam & Donations'}</span>
                </Link>
                <Link
                  href="/live"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg hover:bg-[var(--bg-surface)] text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <i className="fa-solid fa-video text-rose-500"></i>
                  <span>{currentLanguage === 'te' ? 'ప్రత్యక్ష దర్శనం (Live)' : 'Live Darshan Stream'}</span>
                </Link>
                <Link
                  href="/heritage"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg hover:bg-[var(--bg-surface)] text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <i className="fa-solid fa-monument text-[var(--color-accent-gold)]"></i>
                  <span>{currentLanguage === 'te' ? 'ఆలయ చరిత్ర & AR టూర్' : 'Temple Heritage & 3D AR'}</span>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/events" className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
            {currentLanguage === 'te' ? 'వేడుకలు' : 'Events'}
          </Link>
          <Link href="/calendar" className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
            {currentLanguage === 'te' ? 'పంచాంగం' : 'Telugu Calendar'}
          </Link>
          <Link href="/gallery" className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
            {currentLanguage === 'te' ? 'ఛాయాచిత్రాలు' : 'Gallery'}
          </Link>
          <Link href="/donate" className="text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
            {currentLanguage === 'te' ? 'విరాళాలు' : 'Donate'}
          </Link>
        </nav>

        {/* Action Controls (Theme, Language, Admin Login & Mobile Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onLanguageToggle}
            className="px-2 py-1 rounded-md text-[11px] sm:text-xs font-semibold border border-[var(--border-gold)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors"
            title="Toggle Language"
          >
            {currentLanguage === 'en' ? 'తెలుగు' : 'English'}
          </button>

          <button
            onClick={onThemeToggle}
            className="p-1.5 sm:p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors text-xs sm:text-sm"
            title="Toggle Theme"
          >
            {currentTheme === 'prabha' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
          </button>

          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            {currentLanguage === 'te' ? 'అడ్మిన్' : 'Admin'}
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors text-sm"
            aria-label="Toggle Mobile Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)] px-4 pt-3 pb-5 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md bg-[var(--bg-surface)] text-[var(--color-primary)] font-semibold"
            >
              <i className="fa-solid fa-house mr-2.5"></i>
              {currentLanguage === 'te' ? 'ప్రధాన పుట' : 'Home'}
            </Link>
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-calendar-days mr-2.5 text-[var(--color-accent-gold)]"></i>
              {currentLanguage === 'te' ? 'వేడుకలు' : 'Events'}
            </Link>
            <Link
              href="/calendar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-[#d97706] fa-calendar-week mr-2.5"></i>
              {currentLanguage === 'te' ? 'పంచాంగం' : 'Telugu Calendar'}
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-images mr-2.5 text-[var(--color-primary)]"></i>
              {currentLanguage === 'te' ? 'ఛాయాచిత్రాలు' : 'Gallery'}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
            >
              <i className="fa-solid fa-hand-holding-heart mr-2.5 text-[var(--color-accent-emerald)]"></i>
              {currentLanguage === 'te' ? 'ఆలయం గురించి' : 'About / Donate'}
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md bg-[var(--color-primary)] text-white font-semibold flex items-center justify-between"
            >
              <span>{currentLanguage === 'te' ? 'అడ్మిన్ లాగిన్' : 'Admin Portal'}</span>
              <i className="fa-solid fa-shield-halved"></i>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
