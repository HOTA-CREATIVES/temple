import React from 'react';
import { Card } from '@/components/ui/Card';

interface VedicQuoteCardProps {
  currentLanguage?: 'en' | 'te';
}

export const VedicQuoteCard: React.FC<VedicQuoteCardProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';

  return (
    <Card accentBorder className="bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] border-amber-400/30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-2">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 text-xl border border-amber-400/30">
            <i className="fa-solid fa-om"></i>
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-[var(--color-accent-gold)]">
              {isTe ? 'నేటి వేద సూక్తి • దైవ చింతన' : 'Daily Vedic Wisdom'}
            </span>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--color-secondary)] italic mt-0.5">
              &quot;కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన&quot;
            </h4>
            <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
              {isTe
                ? 'కర్తవ్యాన్ని నెరవేర్చడంలో మాత్రమే నీకు అధికారం కలదు, దాని ఫలితములపై కాదు. నిష్కామ కర్మయే పరమ ధర్మము.'
                : 'You have a right to perform your prescribed duty, but never to the fruits of action. Perform sevas with selfless devotion.'}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-center md:text-right">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif text-[var(--color-secondary)] bg-amber-500/10 border border-[var(--border-gold)]">
            <i className="fa-solid fa-book-open text-[10px] text-amber-500"></i>
            {isTe ? 'శ్రీమద్భగవద్గీత (2.47)' : 'Bhagavad Gita (2.47)'}
          </span>
        </div>
      </div>
    </Card>
  );
};
