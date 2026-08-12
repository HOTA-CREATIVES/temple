import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

interface LiveDarshanTeaserProps {
  currentLanguage?: 'en' | 'te';
}

export const LiveDarshanTeaser: React.FC<LiveDarshanTeaserProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';

  return (
    <Card accentBorder className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <div>
          <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">
            {isTe ? 'ప్రత్యక్ష దివ్య దర్శనం & హారతి' : 'Live Virtual Darshan & Aarti'}
          </h3>
          <p className="text-xs text-[var(--text-secondary)]">
            {isTe ? 'ప్రతిరోజూ ఉదయం 6:00 & సాయంత్రం 6:00కి లైవ్ హారతి' : 'Daily Live Aarti at 06:00 AM & 06:00 PM IST'}
          </p>
        </div>
      </div>

      <Link
        href="/live"
        className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors shadow-sm"
      >
        {isTe ? 'లైవ్ చూడండి' : 'Watch Live'}
      </Link>
    </Card>
  );
};
