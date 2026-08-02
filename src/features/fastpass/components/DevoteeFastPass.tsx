'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

export const DevoteeFastPass: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const [verified, setVerified] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-[var(--bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-md space-y-4 text-center">
      <span className="text-4xl">⚡</span>
      <h3 className="text-xl font-bold font-serif text-[var(--color-primary)]">
        {isTe ? 'సినియర్ సిటిజెన్ / శీఘ్ర దర్శన ఫాస్ట్ పాస్' : 'Senior Citizen & Express Devotee Fast-Pass'}
      </h3>
      <p className="text-xs text-[var(--color-text-muted)]">
        {isTe ? 'వయస్సు ధృవీకరణ మరియు ముందస్తు ప్రవేశం కోసం శీఘ్ర చెక్-ఇన్' : 'Privacy-preserving express entry check-in for senior citizens and pre-booked Sevas'}
      </p>

      <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--color-border)] space-y-3">
        {verified ? (
          <div className="space-y-1 animate-fade-in">
            <span className="text-2xl text-emerald-500">✓</span>
            <div className="font-bold text-sm text-emerald-600">
              {isTe ? 'ఫాస్ట్ పాస్ ధృవీకరించబడింది!' : 'Fast-Pass Verified Successfully!'}
            </div>
            <div className="text-xs font-mono text-[var(--color-text-muted)]">
              Gate #2 Express Lane Access Granted
            </div>
          </div>
        ) : (
          <button
            onClick={() => setVerified(true)}
            className="w-full py-3 bg-[var(--color-primary)] text-white text-xs font-bold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            {isTe ? 'శీఘ్ర చెక్-ఇన్ ప్రారంభించండి' : 'Initiate Fast-Pass Check-In'}
          </button>
        )}
      </div>
    </div>
  );
};
