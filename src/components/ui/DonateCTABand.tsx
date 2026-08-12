import React from 'react';
import Link from 'next/link';

interface DonateCTABandProps {
  currentLanguage?: 'en' | 'te';
}

const PRESET_AMOUNTS = [501, 1116, 5001];

export const DonateCTABand: React.FC<DonateCTABandProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';

  return (
    <div className="rounded-2xl bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-hover)] text-white p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="text-center sm:text-left max-w-md">
        <h2 className="font-serif text-2xl font-bold mb-1">
          {isTe ? 'ఆలయ సేవలో పాల్గొనండి' : 'Support the Temple’s Sacred Mission'}
        </h2>
        <p className="text-sm text-white/80">
          {isTe
            ? 'మీ విరాళం అన్నదానం, గోశాల మరియు ఆలయ నిర్వహణకు తోడ్పడుతుంది.'
            : 'Your offering supports Annadanam, Goshala care, and temple upkeep for generations of devotees.'}
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-2">
          {PRESET_AMOUNTS.map((amt) => (
            <Link
              key={amt}
              href="/donate"
              className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 font-mono text-sm font-bold hover:bg-white/20 transition-colors"
            >
              ₹{amt}
            </Link>
          ))}
        </div>
        <Link
          href="/donate"
          className="px-6 py-3 rounded-lg text-sm font-bold bg-[var(--color-accent-gold)] text-[var(--color-secondary)] shadow-md hover:opacity-90 transition-all transform hover:-translate-y-0.5"
        >
          {isTe ? 'ఇప్పుడే విరాళం ఇవ్వండి' : 'Donate Now'}
        </Link>
      </div>
    </div>
  );
};
