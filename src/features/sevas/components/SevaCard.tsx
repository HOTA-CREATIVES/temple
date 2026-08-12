import React from 'react';
import { Seva } from '../types';

import { Language } from '@/providers/LanguageProvider';

interface SevaCardProps {
  seva: Seva;
  language: Language;
  onSelect: (seva: Seva) => void;
}

export const SevaCard: React.FC<SevaCardProps> = ({ seva, language, onSelect }) => {
  const isTe = language === 'te';
  const title = isTe ? seva.titleTe : seva.titleEn;
  const description = isTe ? seva.descriptionTe : seva.descriptionEn;

  return (
    <div className="card transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg border border-[var(--color-border)] rounded-xl p-5 bg-[var(--bg-card)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] capitalize">
            {seva.category}
          </span>
          <span className="text-lg font-bold text-[var(--color-accent-gold)] font-mono">
            ₹{seva.price}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 font-serif text-[var(--color-text-main)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 mb-4">
          {description}
        </p>
      </div>

      <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          ⏱ {seva.durationMinutes} {isTe ? 'నిమిషాలు' : 'mins'}
        </span>
        <button
          onClick={() => onSelect(seva)}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--bg-surface)] text-[var(--color-primary)] border border-[var(--border-gold)] hover:bg-[var(--bg-elevated)] transition-colors"
        >
          {isTe ? 'సేవా వివరాలు' : 'Seva Timings'}
        </button>
      </div>
    </div>
  );
};
