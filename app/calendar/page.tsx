'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PanchangamCard } from '@/features/panchangam/components/PanchangamCard';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

interface CalendarDayDetail {
  day: number;
  tithiEn: string;
  tithiTe: string;
  nakshatraEn: string;
  nakshatraTe: string;
  festivalEn?: string;
  festivalTe?: string;
  rahuKalam: string;
  isToday?: boolean;
}

const months = [
  { en: 'Chaitra Masam 2026', te: 'చైత్ర మాసం 2026' },
  { en: 'Vaisakha Masam 2026', te: 'వైశాఖ మాసం 2026' },
  { en: 'Jyeshtha Masam 2026', te: 'జ్యేష్ఠ మాసం 2026' },
];

export default function CalendarPage() {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  const [monthIndex, setMonthIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState<CalendarDayDetail | null>(null);

  const prevMonth = () => setMonthIndex((prev) => (prev > 0 ? prev - 1 : months.length - 1));
  const nextMonth = () => setMonthIndex((prev) => (prev < months.length - 1 ? prev + 1 : 0));

  const days: CalendarDayDetail[] = Array.from({ length: 30 }).map((_, i) => {
    const dayNum = i + 1;
    const isToday = dayNum === 12 && monthIndex === 0;
    const isRamaNavami = dayNum === 12 && monthIndex === 0;
    const isHanumanJayanti = dayNum === 24 && monthIndex === 0;

    return {
      day: dayNum,
      tithiEn: isRamaNavami ? 'Shukla Paksha Navami' : dayNum % 2 === 0 ? 'Shukla Paksha Ekadashi' : 'Krishna Paksha Dwitiya',
      tithiTe: isRamaNavami ? 'శుక్ల పక్ష నవమి' : dayNum % 2 === 0 ? 'శుక్ల పక్ష ఏకాదశి' : 'కృష్ణ పక్ష విదియ',
      nakshatraEn: isRamaNavami ? 'Punarvasu' : 'Rohini',
      nakshatraTe: isRamaNavami ? 'పునర్వసు నక్షత్రం' : 'రోహిణి నక్షత్రం',
      festivalEn: isRamaNavami ? 'Sri Rama Navami' : isHanumanJayanti ? 'Hanuman Jayanti' : undefined,
      festivalTe: isRamaNavami ? 'శ్రీ రామనవమి' : isHanumanJayanti ? 'హనుమాన్ జయంతి' : undefined,
      rahuKalam: '04:30 PM – 06:00 PM',
      isToday,
    };
  });

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="emerald">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <i className="fa-solid fa-om text-xs"></i>
              {isTe ? 'వేద పంచాంగ విభాగాలు' : 'Authoritative Panchangam'}
            </span>
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-secondary)]">
            {isTe ? 'తెలుగు క్యాలెండర్ & దినచర్య పంచాంగం' : 'Telugu Calendar & Vedic Panchangam'}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {isTe
              ? 'రోజువారీ తిథి, నక్షత్రం, రాహుకాలం, దుర్ముహుూర్తం మరియు పండుగ విశేషాల సమగ్ర సమాచారం.'
              : 'Authoritative daily Tithi, Nakshatra, Rahu Kalam, and festival indicators.'}
          </p>
        </div>

        {/* Live Panchangam Overview */}
        <PanchangamCard />

        {/* Interactive Month Grid */}
        <Card accentBorder className="space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-[var(--border-subtle)] pb-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center text-lg border border-[var(--border-gold)]">
                <i className="fa-regular fa-calendar-days"></i>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-secondary)]">
                {isTe ? months[monthIndex].te : months[monthIndex].en}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--border-gold)] transition-colors cursor-pointer flex items-center gap-1"
              >
                <i className="fa-solid fa-chevron-left text-[10px]"></i>
                <span>{isTe ? 'మునుపటి మాసం' : 'Prev Month'}</span>
              </button>
              <button
                onClick={() => setMonthIndex(0)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer shadow-sm"
              >
                {isTe ? 'ఈరోజు' : 'Today'}
              </button>
              <button
                onClick={nextMonth}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--border-gold)] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>{isTe ? 'తరువాతి మాసం' : 'Next Month'}</span>
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-[var(--color-accent-gold)] uppercase font-mono py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] rounded-xl">
            <div>{isTe ? 'ఆది' : 'Sun'}</div>
            <div>{isTe ? 'సోమ' : 'Mon'}</div>
            <div>{isTe ? 'మంగళ' : 'Tue'}</div>
            <div>{isTe ? 'బుధ' : 'Wed'}</div>
            <div>{isTe ? 'గురు' : 'Thu'}</div>
            <div>{isTe ? 'శుక్ర' : 'Fri'}</div>
            <div>{isTe ? 'శని' : 'Sat'}</div>
          </div>

          {/* Calendar Grid Cells */}
          <div className="grid grid-cols-7 gap-2 text-xs">
            {days.map((item) => {
              return (
                <button
                  key={item.day}
                  onClick={() => setSelectedDay(item)}
                  className={`min-h-[85px] p-2.5 rounded-2xl border flex flex-col justify-between text-left transition-all cursor-pointer ${
                    item.isToday
                      ? 'border-2 border-[var(--color-accent-gold)] bg-[var(--bg-elevated)] shadow-md ring-2 ring-[var(--color-accent-gold)]/20'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--color-primary)] hover:shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold font-mono text-sm text-[var(--text-primary)]">{item.day}</span>
                    {item.isToday && (
                      <span className="w-5 h-5 rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center text-[10px]">
                        <i className="fa-solid fa-sun"></i>
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    {item.festivalEn && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold truncate block border border-emerald-500/20">
                        {isTe ? item.festivalTe : item.festivalEn}
                      </span>
                    )}
                    <span className="text-[9px] text-[var(--text-secondary)] truncate block font-serif">
                      {isTe ? item.tithiTe : item.tithiEn}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Selected Day Details Modal */}
        {selectedDay && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setSelectedDay(null)}
                className="absolute top-4 right-4 p-2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-full hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>

              <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center font-mono font-bold text-xl shadow-md">
                  {selectedDay.day}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--color-secondary)]">
                    {isTe ? `${months[monthIndex].te} - రోజు ${selectedDay.day}` : `${months[monthIndex].en} - Day ${selectedDay.day}`}
                  </h3>
                  <p className="text-xs text-[var(--color-accent-gold)] font-mono font-semibold">
                    {selectedDay.isToday ? (isTe ? '★ నేటి దినం' : '★ Today Special') : (isTe ? 'వివరాలు' : 'Day Breakdown')}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] font-semibold flex items-center gap-2">
                    <i className="fa-solid fa-moon text-[var(--color-accent-gold)]"></i>
                    {isTe ? 'తిథి (Tithi)' : 'Tithi'}
                  </span>
                  <span className="font-bold text-[var(--text-primary)]">{isTe ? selectedDay.tithiTe : selectedDay.tithiEn}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] font-semibold flex items-center gap-2">
                    <i className="fa-solid fa-star text-[var(--color-accent-gold)]"></i>
                    {isTe ? 'నక్షత్రం (Nakshatra)' : 'Nakshatra'}
                  </span>
                  <span className="font-bold text-[var(--text-primary)]">{isTe ? selectedDay.nakshatraTe : selectedDay.nakshatraEn}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] font-semibold flex items-center gap-2">
                    <i className="fa-solid fa-hourglass-half text-rose-500"></i>
                    {isTe ? 'రాహు కాలం (Rahu Kalam)' : 'Rahu Kalam'}
                  </span>
                  <span className="font-mono font-bold text-rose-600 dark:text-rose-400">{selectedDay.rahuKalam}</span>
                </div>

                {selectedDay.festivalEn && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-2">
                      <i className="fa-solid fa-om"></i>
                      {isTe ? 'పండుగ / ఉత్సవం' : 'Special Festival'}
                    </span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-300">
                      {isTe ? selectedDay.festivalTe : selectedDay.festivalEn}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedDay(null)}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all cursor-pointer shadow-md"
                >
                  {isTe ? 'మూసివేయుము' : 'Close Details'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
