import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

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

export const EventCard: React.FC<EventCardProps> = ({ event, currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';

  return (
    <Card accentBorder className="flex flex-col justify-between h-full group hover:border-amber-400/50">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="gold">{event.category}</Badge>
          <span className="text-xs font-mono font-semibold text-[var(--color-primary)] flex items-center gap-1">
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
        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-sm">
          {isTe ? '+ పంచాంగంలో చేర్చు' : '+ Add to Calendar'}
        </button>
        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors">
          <i className="fa-solid fa-share-nodes mr-1 text-[11px]"></i>
          {isTe ? 'షేర్ చేయండి' : 'Share'}
        </button>
      </div>
    </Card>
  );
};
