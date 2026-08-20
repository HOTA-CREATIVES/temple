'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { EventCard, EventItem } from '@/features/events/components/EventCard';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

const upcomingEvents: EventItem[] = [
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
  {
    id: '4',
    title: 'Narasimha Jayanti Abhishekam',
    titleTelugu: 'నరసింహ జయంతి అభిషేకం',
    date: 'May 22, 2026',
    category: 'Grand Festival',
    description: 'Special Mahanyasa Purvaka Ekadasa Rudrabhishekam and Swarna Pushparchana.',
  },
];

const pastEvents: EventItem[] = [
  {
    id: '5',
    title: 'Maha Shivaratri Jagaran Puja',
    titleTelugu: 'మహా శివరాత్రి జాగరణ పూజ',
    date: 'February 15, 2026',
    category: 'Past Archive',
    description: 'All-night four prahara pujas and continuous Vedic chanting celebrated with high devotion.',
  },
  {
    id: '6',
    title: 'Vaikunta Ekadashi Uttara Dwara Darshanam',
    titleTelugu: 'వైకుంఠ ఏకాదశి ఉత్తర ద్వారా దర్శనం',
    date: 'January 01, 2026',
    category: 'Past Archive',
    description: 'Sacred procession through the Vaikunta Dwaram with over 15,000 devotees attending.',
  },
];

export default function EventsPage() {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const currentDataset = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const filteredEvents = useMemo(() => {
    return currentDataset.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.titleTelugu.includes(searchQuery) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [currentDataset, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="gold">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-calendar-days text-[11px]"></i>
              {isTe ? 'ఉత్సవాల సమాచారం' : 'Devotional Events'}
            </span>
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-secondary)]">
            {isTe ? 'ఆలయ ఉత్సవాలు & వేడుకలు' : 'Temple Events & Celebrations'}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {isTe
              ? 'రాబోయే పండుగలు, విశేష పూజలు మరియు గత ఉత్సవాల విశేషాలు.'
              : 'Explore upcoming festivals, daily sevas, and past event archives.'}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-[var(--bg-surface)] p-4 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
          {/* Tab Selection */}
          <div className="flex items-center gap-1.5 bg-[var(--bg-elevated)] p-1 rounded-xl border border-[var(--border-subtle)]">
            <button
              onClick={() => {
                setActiveTab('upcoming');
                setSelectedCategory('All');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'upcoming'
                  ? 'bg-[var(--color-primary)] text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isTe ? 'రాబోయే ఉత్సవాలు' : 'Upcoming Events'}
            </button>
            <button
              onClick={() => {
                setActiveTab('past');
                setSelectedCategory('All');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'past'
                  ? 'bg-[var(--color-primary)] text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isTe ? 'గత ఉత్సవాలు (ఆర్కైవ్)' : 'Past Archive'}
            </button>
          </div>

          {/* Search & Category Filter Inputs */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            {activeTab === 'upcoming' && (
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
              >
                <option value="All">{isTe ? 'అన్ని వర్గాలు' : 'All Categories'}</option>
                <option value="Grand Festival">{isTe ? 'బ్రహ్మోత్సవాలు' : 'Grand Festival'}</option>
                <option value="Special Seva">{isTe ? 'విశేష సేవ' : 'Special Seva'}</option>
                <option value="Monthly Festival">{isTe ? 'మాసిక ఉత్సవం' : 'Monthly Festival'}</option>
              </select>
            )}

            <div className="relative">
              <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isTe ? 'ఉత్సవాలను శోధించండి...' : 'Search events...'}
                className="pl-9 pr-4 py-2 text-xs rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] w-full sm:w-64"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} currentLanguage={currentLanguage} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
            <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto text-xl border border-[var(--color-primary)]/20">
              <i className="fa-solid fa-calendar-xmark"></i>
            </div>
            <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">
              {isTe ? 'ఎటువంటి ఫలితాలు లభించలేదు' : 'No Events Found'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
              {isTe
                ? 'మీరు ఎంచుకున్న వివరాలకు సరిపోయే ఉత్సవాలు ఏవీ లేవు. దయచేసి శోధన పదాన్ని మార్చి ప్రయత్నించండి.'
                : 'No events matched your search query or selected filter criteria. Try resetting the search input.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all cursor-pointer"
            >
              {isTe ? 'శోధనను క్లియర్ చేయండి' : 'Clear Filters'}
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
