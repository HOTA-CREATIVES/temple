'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export interface EventItem {
  id: string;
  title: string;
  titleTelugu: string;
  date: string;
  category: string;
  description: string;
}

export interface EventCardProps {
  event: EventItem;
  currentLanguage?: 'en' | 'te';
}

export const EventCard: React.FC<EventCardProps> = ({ event, currentLanguage: propLang }) => {
  const context = useLanguageTheme();
  const currentLanguage = propLang || context.currentLanguage;
  const isTe = currentLanguage === 'te';

  const handleAddToCalendar = () => {
    alert(`Added "${event.title}" to your calendar preferences!`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `${event.title} on ${event.date} at Sri Venkateshwara Temple`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${event.title} - ${event.date}`);
      alert('Event details copied to clipboard!');
    }
  };

  return (
    <Card accentBorder className="flex flex-col justify-between h-full group hover:border-[var(--color-primary)] transition-all">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="gold">{event.category}</Badge>
          <span className="text-xs font-mono font-semibold text-[var(--color-primary)] flex items-center gap-1.5 bg-[var(--color-primary)]/10 px-2.5 py-1 rounded-full border border-[var(--color-primary)]/20">
            <i className="fa-regular fa-calendar-days text-[11px]"></i>
            {event.date}
          </span>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {event.title}
          </h3>
          <p className="text-xs font-serif font-semibold text-[var(--color-accent-gold)] mt-0.5">{event.titleTelugu}</p>
        </div>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </div>

      <div className="pt-4 mt-5 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
        <button
          onClick={handleAddToCalendar}
          className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
        >
          <i className="fa-regular fa-calendar-plus text-[11px]"></i>
          <span>{isTe ? 'క్యాలెండర్‌కి చేర్చు' : 'Add to Calendar'}</span>
        </button>
        <button
          onClick={handleShare}
          className="px-3 py-2 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] hover:border-[var(--border-gold)] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <i className="fa-solid fa-share-nodes text-[11px] text-[var(--color-accent-gold)]"></i>
          <span>{isTe ? 'షేర్' : 'Share'}</span>
        </button>
      </div>
    </Card>
  );
};
