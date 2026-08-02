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
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card accentBorder className="flex flex-col justify-between h-full">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="gold">{event.category}</Badge>
          <span className="text-xs font-mono text-[var(--text-secondary)]">{event.date}</span>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">{event.title}</h3>
          <p className="text-xs font-serif text-[var(--color-primary)]">{event.titleTelugu}</p>
        </div>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
        <button className="px-3 py-1.5 rounded-md text-xs font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors">
          + Add to Calendar
        </button>
        <button className="px-3 py-1.5 rounded-md text-xs font-semibold border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors">
          Share
        </button>
      </div>
    </Card>
  );
};
