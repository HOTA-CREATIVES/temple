import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export interface PanchangamData {
  tithi: string;
  tithiTelugu: string;
  nakshatra: string;
  nakshatraTelugu: string;
  rahuKalam: string;
  darshanTiming: string;
  nextFestival: string;
  nextFestivalDays: number;
}

export interface PanchangamCardProps {
  data?: PanchangamData;
}

const defaultData: PanchangamData = {
  tithi: 'Shukla Paksha Ekadashi',
  tithiTelugu: 'శుక్ల పక్ష ఏకాదశి',
  nakshatra: 'Rohini',
  nakshatraTelugu: 'రోహిణి నక్షత్రం',
  rahuKalam: '04:30 PM – 06:00 PM',
  darshanTiming: 'Open now (Until 8:30 PM)',
  nextFestival: 'Sri Rama Navami',
  nextFestivalDays: 5,
};

export const PanchangamCard: React.FC<PanchangamCardProps> = ({ data = defaultData }) => {
  return (
    <Card accentBorder className="w-full">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🪔</span>
          <div>
            <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">Today at a Glance</h3>
            <p className="text-xs text-[var(--text-secondary)] font-mono">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
        <Badge variant="emerald">Live Panchangam</Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Tithi */}
        <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
          <span className="text-[var(--text-secondary)] font-medium">Tithi / తిథి</span>
          <p className="font-bold text-sm text-[var(--text-primary)]">{data.tithi}</p>
          <p className="text-[11px] text-[var(--color-primary)] font-serif">{data.tithiTelugu}</p>
        </div>

        {/* Nakshatra */}
        <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
          <span className="text-[var(--text-secondary)] font-medium">Nakshatra / నక్షత్రం</span>
          <p className="font-bold text-sm text-[var(--text-primary)]">{data.nakshatra}</p>
          <p className="text-[11px] text-[var(--color-primary)] font-serif">{data.nakshatraTelugu}</p>
        </div>

        {/* Rahu Kalam */}
        <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
          <span className="text-[var(--text-secondary)] font-medium">Rahu Kalam / రాహు కాలం</span>
          <p className="font-mono font-bold text-sm text-[var(--text-primary)]">{data.rahuKalam}</p>
          <p className="text-[11px] text-[var(--text-muted)]">Avoid new ventures</p>
        </div>

        {/* Next Festival */}
        <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
          <span className="text-[var(--text-secondary)] font-medium">Upcoming Festival</span>
          <p className="font-bold text-sm text-[var(--color-secondary)]">{data.nextFestival}</p>
          <p className="text-[11px] text-[var(--color-accent-emerald)] font-semibold font-mono">In {data.nextFestivalDays} days</p>
        </div>
      </div>
    </Card>
  );
};
