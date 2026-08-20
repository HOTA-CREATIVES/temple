'use client';

import React from 'react';
import { Seva } from '../types';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

interface SevaCardProps {
  seva: Seva;
  language?: 'en' | 'te';
  onSelect: (seva: Seva) => void;
}

export const SevaCard: React.FC<SevaCardProps> = ({ seva, language: propLang, onSelect }) => {
  const context = useLanguageTheme();
  const language = propLang || context.currentLanguage;
  const isTe = language === 'te';
  const title = isTe ? seva.titleTe : seva.titleEn;
  const description = isTe ? seva.descriptionTe : seva.descriptionEn;

  return (
    <div className="card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-[var(--border-subtle)] hover:border-[var(--color-primary)] rounded-2xl p-6 bg-[var(--bg-surface)] flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] capitalize border border-[var(--color-primary)]/20">
            {seva.category}
          </span>
          <span className="text-xl font-bold text-[var(--color-secondary)] font-mono">
            ₹{seva.price}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 font-serif text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] line-clamp-3 mb-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <span className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1.5">
          <i className="fa-regular fa-clock text-[var(--color-accent-gold)]"></i>
          {seva.durationMinutes} {isTe ? 'నిమిషాలు' : 'mins'}
        </span>
        <button
          onClick={() => onSelect(seva)}
          className="px-4 py-2 text-xs font-bold rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-sm cursor-pointer"
        >
          {isTe ? 'సేవ బుక్ చేయండి' : 'Book Seva Slot'}
        </button>
      </div>
    </div>
  );
};
