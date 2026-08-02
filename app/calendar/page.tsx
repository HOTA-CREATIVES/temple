'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PanchangamCard } from '@/features/panchangam/components/PanchangamCard';

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="emerald">Panchangam Module</Badge>
          <h1 className="font-serif text-3xl font-bold text-[var(--color-secondary)]">Telugu Calendar & Panchangam</h1>
          <p className="text-xs text-[var(--text-secondary)]">Authoritative daily Tithi, Nakshatra, Rahu Kalam, and festival indicators.</p>
        </div>

        {/* Live Panchangam Overview */}
        <PanchangamCard />

        {/* Interactive Month Grid Mockup */}
        <Card accentBorder className="space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="font-serif text-xl font-bold text-[var(--color-secondary)]">Chaitra Masam 2026 (చైత్ర మాసం)</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs rounded border border-[var(--border-subtle)]">← Prev Month</button>
              <button className="px-3 py-1 text-xs rounded bg-[var(--color-primary)] text-white">Today</button>
              <button className="px-3 py-1 text-xs rounded border border-[var(--border-subtle)]">Next Month →</button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-[var(--text-secondary)] py-2 border-b border-[var(--border-subtle)]">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
          </div>

          {/* Sample Calendar Grid Cells */}
          <div className="grid grid-cols-7 gap-2 text-xs">
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const isToday = day === 12;
              const isFestival = day === 12 || day === 24;

              return (
                <div
                  key={day}
                  className={`min-h-[70px] p-2 rounded-lg border flex flex-col justify-between transition-colors ${
                    isToday
                      ? 'border-2 border-[var(--color-accent-gold)] bg-[var(--bg-elevated)]'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold font-mono text-sm">{day}</span>
                    {isToday && <span>🪔</span>}
                  </div>
                  {isFestival && (
                    <span className="text-[10px] px-1 py-0.5 rounded bg-[var(--color-accent-emerald)]/10 text-[var(--color-accent-emerald)] font-semibold truncate">
                      {day === 12 ? 'Rama Navami' : 'Hanuman Jayanti'}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
