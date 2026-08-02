'use client';

import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

export const SmartQueueWidget: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  // Mock IoT Sensor metrics
  const queueLengthPeople = 180;
  const estimatedWaitMins = 25;
  const status: 'normal' | 'moderate' | 'heavy' = 'moderate';

  const statusColors = {
    normal: 'bg-emerald-500',
    moderate: 'bg-amber-500',
    heavy: 'bg-rose-500',
  };

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--color-border)] rounded-2xl p-5 shadow-md max-w-xl mx-auto flex items-center justify-between gap-4">
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary-light)] text-2xl">
          ⏱
          <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${statusColors[status]}`}></span>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)]">
            {isTe ? 'ఐఓటి స్మార్ట్ క్యూ లైవ్' : 'IoT Smart Queue Live'}
          </div>
          <h4 className="text-lg font-bold font-serif text-[var(--color-primary)]">
            {isTe ? `అంచనా నిరీక్షణ సమయం: ~${estimatedWaitMins} నిమిషాలు` : `Estimated Darshan Wait: ~${estimatedWaitMins} mins`}
          </h4>
          <div className="text-xs text-[var(--color-text-muted)] mt-0.5 font-mono">
            {isTe ? `క్యూలో ఉన్న భక్తులు: ${queueLengthPeople} మంది` : `Current Queue Density: ${queueLengthPeople} devotees`}
          </div>
        </div>
      </div>

      <button className="px-3.5 py-2 text-xs font-bold rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors whitespace-nowrap">
        {isTe ? 'వర్చువల్ టోకెన్' : 'Virtual Pass'}
      </button>
    </div>
  );
};
