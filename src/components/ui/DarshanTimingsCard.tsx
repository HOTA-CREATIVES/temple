import React from 'react';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

interface DarshanTimingsCardProps {
  currentLanguage?: 'en' | 'te';
}

export const DarshanTimingsCard: React.FC<DarshanTimingsCardProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';

  const schedule = [
    {
      titleEn: 'Suprabhatam & Morning Archana',
      titleTe: 'సుప్రభాతం & ఉదయార్చన సేవ',
      time: '6:00 AM – 7:30 AM',
      type: 'Ritual',
      typeColor: 'text-amber-600 bg-amber-500/10 border-amber-400/30',
    },
    {
      titleEn: 'Nitya Abhishekam & Sarva Darshan',
      titleTe: 'నిత్య అభిషేకం & సర్వ దర్శనం',
      time: '8:00 AM – 12:30 PM',
      type: 'Open Darshan',
      typeColor: 'text-emerald-600 bg-emerald-500/10 border-emerald-400/30',
    },
    {
      titleEn: 'Afternoon Break (Temple Sanctuary Closed)',
      titleTe: 'మధ్యాహ్న విరామ సమయం',
      time: '12:30 PM – 4:00 PM',
      type: 'Closed',
      typeColor: 'text-slate-500 bg-slate-500/10 border-slate-400/30',
    },
    {
      titleEn: 'Evening Aarti & Maha Deeparadhana',
      titleTe: 'సాయంత్రం మహామంగళ హారతి సేవ',
      time: '4:00 PM – 8:30 PM',
      type: 'Grand Aarti',
      typeColor: 'text-rose-600 bg-rose-500/10 border-rose-400/30',
    },
  ];

  return (
    <Card accentBorder className="w-full">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-[var(--color-primary)]">
            <i className="fa-solid fa-clock text-lg"></i>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[var(--color-secondary)]">
              {isTe ? 'దినచర్య దర్శన సమయాలు' : 'Daily Darshan & Aarti Timings'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              {isTe ? 'భక్తుల సౌకర్యార్థం ఆలయ ప్రారంభ వేళలు' : 'Daily schedule for devotees & pilgrims'}
            </p>
          </div>
        </div>

        <Link
          href="/events"
          className="hidden sm:inline-flex text-xs font-semibold text-[var(--color-primary)] hover:underline items-center gap-1"
        >
          <span>{isTe ? 'పూర్తి సమయాలు' : 'View Full Schedule'}</span>
          <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 relative overflow-hidden transition-all hover:border-[var(--color-accent-gold)]"
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.typeColor}`}>
                {item.type}
              </span>
              <i className="fa-solid fa-bell text-xs text-amber-500/40"></i>
            </div>
            <h4 className="font-serif text-sm font-bold text-[var(--text-primary)] leading-snug">
              {isTe ? item.titleTe : item.titleEn}
            </h4>
            <div className="font-mono text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1.5 pt-1">
              <i className="fa-regular fa-clock text-[11px]"></i>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
