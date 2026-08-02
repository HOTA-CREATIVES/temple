'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBanner } from '@/components/ui/AnnouncementBanner';
import { PanchangamCard } from '@/features/panchangam/components/PanchangamCard';
import { EventCard, EventItem } from '@/features/events/components/EventCard';
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
  const [showBanner, setShowBanner] = useState(true);

  const toggleLanguage = () => setLang((prev) => (prev === 'en' ? 'te' : 'en'));
  const toggleTheme = () => {
    const nextTheme = theme === 'prabha' ? 'sandhya' : 'prabha';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Announcement Strip */}
      {showBanner && (
        <AnnouncementBanner
          message={lang === 'te' ? 'ప్రత్యేక దర్శన సమయాలు మరియు పూజా వివరాలు ఆన్‌లైన్‌లో అందుబాటులో ఉన్నాయి' : 'Special Darshan Timings & Seva Booking Details Available Online'}
          linkText={lang === 'te' ? 'వివరాలు' : 'View'}
          linkHref="/events"
          onDismiss={() => setShowBanner(false)}
        />
      )}

      {/* Primary Navigation Header */}
      <Header
        currentLanguage={lang}
        currentTheme={theme}
        onLanguageToggle={toggleLanguage}
        onThemeToggle={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-12 pb-16">
        {/* Hero Section with Temple Image Background */}
        <section 
          className="relative overflow-hidden bg-cover bg-center border-b border-[var(--border-subtle)] py-20 sm:py-28 px-4 text-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26, 15, 12, 0.75), rgba(26, 15, 12, 0.88)), url('https://temple.yatradham.org/public/Product/temple/temple_Fk1IOXiZ_202408041546580.jpg')`,
          }}
        >
          <div className="mx-auto max-w-4xl space-y-5 relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-serif font-semibold border border-[var(--color-accent-gold)] text-[var(--color-accent-gold)] bg-black/40 backdrop-blur-md">
              {lang === 'te' ? '🛕 శ్రీ దేవాలయం దివ్య క్షేత్రం' : '🛕 Sri Devalaya Sacred Shrine'}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight">
              {lang === 'te' ? 'శ్రీ లక్ష్మీ నరసింహ స్వామి దేవస్థానం' : 'Sri Lakshmi Narasimha Swamy Devasthanam'}
            </h1>

            <p className="text-sm sm:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
              {lang === 'te' 
                ? 'భక్తుల సౌకర్యార్థం దినచర్య సమయాలు, రాబోయే ఉత్సవాలు మరియు రోజూ పంచాంగ వివరాలను వీక్షించండి.' 
                : 'Experience peace, devotional harmony, daily Panchangam details, and festival archives at your fingertips.'}
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/calendar"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--color-primary)] text-white shadow-lg hover:bg-[var(--color-primary-hover)] transition-transform hover:scale-105"
              >
                {lang === 'te' ? 'నేటి పంచాంగం వీక్షించండి' : "View Today's Panchangam"}
              </Link>
              <Link
                href="/events"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-[var(--color-accent-gold)] text-white bg-black/40 backdrop-blur-md hover:bg-black/60 transition-transform hover:scale-105"
              >
                {lang === 'te' ? 'రాబోయే ఉత్సవాలు' : 'Upcoming Festivals'}
              </Link>
            </div>
          </div>
        </section>

        {/* Live Panchangam Widget */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PanchangamCard />
        </section>

        {/* Upcoming Events Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[var(--color-secondary)]">
                {lang === 'te' ? 'రాబోయే కార్యక్రమాలు' : 'Upcoming Events & Sevas'}
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                {lang === 'te' ? 'ఆలయంలో జరగబోయే ముఖ్యమైన పూజలు' : 'Join us in sacred celebrations and temple processions'}
              </p>
            </div>
            <Link href="/events" className="text-xs font-semibold text-[var(--color-primary)] hover:underline">
              {lang === 'te' ? 'అన్నీ చూడండి →' : 'View All →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
