import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PanchangamDay } from '../types';
import { getPanchangamForDate } from '../services/panchangamService';

export interface PanchangamCardProps {
  currentLanguage?: 'en' | 'te';
}

export const PanchangamCard: React.FC<PanchangamCardProps> = ({
  currentLanguage = 'en',
}) => {
  const isTe = currentLanguage === 'te';
  const [data, setData] = useState<PanchangamDay | null>(null);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayData = getPanchangamForDate(today);
    if (todayData) setData(todayData);
  }, []);

  const displayData = data || {
    date: '2026-08-12',
    tithiEn: 'Shukla Paksha Ekadashi',
    tithiTe: 'శుక్ల పక్ష ఏకాదశి',
    nakshatraEn: 'Rohini',
    nakshatraTe: 'రోహిణి నక్షత్రం',
    rahuKalam: '04:30 PM – 06:00 PM',
  };

  return (
    <Card accentBorder className="w-full">
      <div className="flex flex-wrap items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-5 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-xl text-amber-600 dark:text-amber-400">
            🪔
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[var(--color-secondary)]">
              {isTe ? 'నేటి పంచాంగ విశేషాలు' : 'Today at a Glance'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-mono">
              {new Date().toLocaleDateString(isTe ? 'te-IN' : 'en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <Badge variant="emerald">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {isTe ? 'లైవ్ పంచాంగం' : 'Live Panchangam'}
          </span>
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Tithi */}
        <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5 hover:border-amber-400/40 transition-colors">
          <span className="text-[var(--text-secondary)] font-semibold flex items-center gap-1.5 text-[11px]">
            <i className="fa-solid fa-moon text-amber-500"></i>
            {isTe ? 'తిథి' : 'Tithi'}
          </span>
          <p className="font-bold text-sm text-[var(--text-primary)]">{displayData.tithiEn}</p>
          <p className="text-xs text-[var(--color-primary)] font-serif font-semibold">{displayData.tithiTe}</p>
        </div>

        {/* Nakshatra */}
        <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5 hover:border-amber-400/40 transition-colors">
          <span className="text-[var(--text-secondary)] font-semibold flex items-center gap-1.5 text-[11px]">
            <i className="fa-solid fa-star text-amber-500"></i>
            {isTe ? 'నక్షత్రం' : 'Nakshatra'}
          </span>
          <p className="font-bold text-sm text-[var(--text-primary)]">{displayData.nakshatraEn}</p>
          <p className="text-xs text-[var(--color-primary)] font-serif font-semibold">{displayData.nakshatraTe}</p>
        </div>

        {/* Rahu Kalam */}
        <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5 hover:border-amber-400/40 transition-colors">
          <span className="text-[var(--text-secondary)] font-semibold flex items-center gap-1.5 text-[11px]">
            <i className="fa-solid fa-hourglass-half text-amber-500"></i>
            {isTe ? 'రాహు కాలం' : 'Rahu Kalam'}
          </span>
          <p className="font-mono font-bold text-sm text-[var(--text-primary)]">{displayData.rahuKalam}</p>
          <p className="text-[11px] text-[var(--text-muted)] font-serif">{isTe ? 'వర్జ్యం సేవలు' : 'Avoid new ventures'}</p>
        </div>

        {/* Festivals */}
        <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5 hover:border-amber-400/40 transition-colors">
          <span className="text-[var(--text-secondary)] font-semibold flex items-center gap-1.5 text-[11px]">
            <i className="fa-solid fa-om text-amber-500"></i>
            {isTe ? 'నేటి పండుగ విశేషాలు' : 'Today Festival'}
          </span>
          <p className="font-bold text-sm text-[var(--text-primary)]">
            {displayData.festivalsEn?.[0] || 'Regular Darshan'}
          </p>
          <p className="text-xs text-[var(--color-primary)] font-serif font-semibold">
            {displayData.festivalsTe?.[0] || 'నిత్య దర్శనం'}
          </p>
        </div>
      </div>
    </Card>
  );
};
