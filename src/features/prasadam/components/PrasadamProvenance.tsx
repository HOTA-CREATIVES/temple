'use client';

import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

export const PrasadamProvenance: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  return (
    <div className="max-w-2xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--color-accent-gold)] rounded-2xl p-6 shadow-md space-y-4">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔗</span>
          <h4 className="font-bold font-serif text-lg text-[var(--color-primary)]">
            {isTe ? 'బ్లాక్‌చైన్ ప్రసాద ప్రామాణికత' : 'Blockchain Prasadam Provenance'}
          </h4>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
          100% PURE & CONSECRATED
        </span>
      </div>

      <div className="space-y-2 text-xs font-mono text-[var(--color-text-main)]">
        <div className="flex justify-between p-2 rounded bg-[var(--bg-base)]">
          <span className="text-[var(--color-text-muted)]">Batch Hash ID:</span>
          <span>0x7f9a...3c21</span>
        </div>
        <div className="flex justify-between p-2 rounded bg-[var(--bg-base)]">
          <span className="text-[var(--color-text-muted)]">Ingredients Verification:</span>
          <span>A2 Organic Cow Ghee • Cardamom • Cashews</span>
        </div>
        <div className="flex justify-between p-2 rounded bg-[var(--bg-base)]">
          <span className="text-[var(--color-text-muted)]">Consecration Mantra Timestamp:</span>
          <span>2026-08-02 05:30 AM IST</span>
        </div>
      </div>
    </div>
  );
};
