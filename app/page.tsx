'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroCarousel } from '@/components/ui/HeroCarousel';
import { PanchangamCard } from '@/features/panchangam/components/PanchangamCard';
import { EventCard, EventItem } from '@/features/events/components/EventCard';
import { VedicQuoteCard } from '@/components/ui/VedicQuoteCard';
import { CoreServicesGrid } from '@/components/ui/CoreServicesGrid';
import { GalleryHighlights } from '@/components/ui/GalleryHighlights';
import Link from 'next/link';

const sampleEvents: EventItem[] = [
  {
    id: '1',
    title: 'Sri Rama Navami Brahmotsavam',
    titleTelugu: 'శ్రీ రామనవమి బ్రహ్మోత్సవాలు',
    date: 'April 12, 2026',
    category: 'Grand Festival',
    description: 'Annual festival celebrations featuring special Abhishekam, Kalyanotsavam, and Rathotsavam procession.',
  },
  {
    id: '2',
    title: 'Hanuman Jayanti Seva',
    titleTelugu: 'హనుమాన్ జయంతి సేవ',
    date: 'April 24, 2026',
    category: 'Special Seva',
    description: 'Special Aku Pooja and Sahasranama Archana performed continuously throughout the day.',
  },
  {
    id: '3',
    title: 'Vaisakha Pournami Garuda Seva',
    titleTelugu: 'వైశాఖ పౌర్ణమి గరుడ సేవ',
    date: 'May 10, 2026',
    category: 'Monthly Festival',
    description: 'Evening procession of the deity on Garuda Vahanam accompanied by traditional Veda Parayanam.',
  },
];

export default function Home() {
  const [lang, setLang] = useState<'en' | 'te'>('en');
  const [theme, setTheme] = useState<'prabha' | 'sandhya'>('prabha');

  const toggleLanguage = () => setLang((prev) => (prev === 'en' ? 'te' : 'en'));
  const toggleTheme = () => {
    const nextTheme = theme === 'prabha' ? 'sandhya' : 'prabha';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const isTe = lang === 'te';

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Primary Navigation Header */}
      <Header
        currentLanguage={lang}
        currentTheme={theme}
        onLanguageToggle={toggleLanguage}
        onThemeToggle={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-10 sm:space-y-14 pb-16">
        {/* Dynamic Temple Hero Video Section */}
        <HeroCarousel currentLanguage={lang} />

        <div className="temple-gold-divider mx-auto max-w-7xl" />

        {/* Core Sacred Services */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CoreServicesGrid currentLanguage={lang} />
        </section>

        {/* Daily Vedic Quote Wisdom */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VedicQuoteCard currentLanguage={lang} />
        </section>

        <div className="temple-gold-divider mx-auto max-w-7xl" />

        {/* Live Panchangam Widget */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PanchangamCard currentLanguage={lang} />
        </section>

        <div className="temple-gold-divider mx-auto max-w-7xl" />

        {/* Gallery Highlights */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryHighlights currentLanguage={lang} />
        </section>

        {/* Upcoming Events Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[var(--color-secondary)]">
                {isTe ? 'రాబోయే కార్యక్రమాలు' : 'Upcoming Festivals & Events'}
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                {isTe ? 'ఆలయంలో జరగబోయే ముఖ్యమైన పూజలు' : 'Join us in sacred celebrations and temple processions'}
              </p>
            </div>
            <Link href="/events" className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1">
              <span>{isTe ? 'అన్నీ చూడండి' : 'View All'}</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleEvents.map((event) => (
              <EventCard key={event.id} event={event} currentLanguage={lang} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
