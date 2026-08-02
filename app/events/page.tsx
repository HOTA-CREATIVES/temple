'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { EventCard, EventItem } from '@/features/events/components/EventCard';

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
  {
    id: '4',
    title: 'Narasimha Jayanti Abhishekam',
    titleTelugu: 'నరసింహ జయంతి అభిషేకం',
    date: 'May 22, 2026',
    category: 'Grand Festival',
    description: 'Special Mahanyasa Purvaka Ekadasa Rudrabhishekam and Swarna Pushparchana.',
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="gold">Devotional Events</Badge>
          <h1 className="font-serif text-3xl font-bold text-[var(--color-secondary)]">Temple Events & Celebrations</h1>
          <p className="text-xs text-[var(--text-secondary)]">Explore upcoming festivals, daily sevas, and past event archives.</p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 items-center justify-between bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-primary)] text-white">Upcoming Events</button>
            <button className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-[var(--border-subtle)] text-[var(--text-primary)]">Past Archive</button>
          </div>
          <input
            type="text"
            placeholder="Search events..."
            className="px-3 py-1.5 text-xs rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
