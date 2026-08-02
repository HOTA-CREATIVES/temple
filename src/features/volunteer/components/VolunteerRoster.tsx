'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

interface VolunteerDuty {
  id: string;
  roleEn: string;
  roleTe: string;
  date: string;
  shift: string;
  spotsLeft: number;
}

const DUTIES: VolunteerDuty[] = [
  {
    id: 'annadanam-serve',
    roleEn: 'Annadanam Food Distribution',
    roleTe: 'అన్నదాన ప్రసాద వితరణ సేవ',
    date: '2026-08-05',
    shift: '11:00 AM - 02:30 PM',
    spotsLeft: 4,
  },
  {
    id: 'crowd-control',
    roleEn: 'Festive Queue & Crowd Assistance',
    roleTe: 'ఉత్సవ క్యూ లైన్ & భక్త జన సేవ',
    date: '2026-08-05',
    shift: '05:00 PM - 09:00 PM',
    spotsLeft: 8,
  },
];

export const VolunteerRoster: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const [appliedIds, setAppliedIds] = useState<string[]>([]);

  const handleApply = (id: string) => {
    setAppliedIds((prev) => [...prev, id]);
    alert(isTe ? 'మీ వాలంటీర్ సేవ నజిదైనది! ఆలయ కమిటీ సంప్రదిస్తుంది.' : 'Thank you for registering as a volunteer!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-[var(--bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-md space-y-5">
      <div className="text-center">
        <span className="text-3xl">🤝</span>
        <h3 className="text-2xl font-bold font-serif text-[var(--color-primary)] mt-1">
          {isTe ? 'ఆలయ వాలంటీర్ సేవ రొస్టర్' : 'Temple Volunteer & Seva Roster'}
        </h3>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          {isTe ? 'స్వామివారి సేవలలో పాలుపంచుకోవడానికి షిఫ్ట్ ఎంచుకోండి' : 'Join hands in temple service by selecting a shift'}
        </p>
      </div>

      <div className="space-y-3">
        {DUTIES.map((duty) => {
          const isApplied = appliedIds.includes(duty.id);
          return (
            <div
              key={duty.id}
              className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--bg-base)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <h4 className="font-bold text-base text-[var(--color-text-main)]">
                  {isTe ? duty.roleTe : duty.roleEn}
                </h4>
                <div className="text-xs text-[var(--color-text-muted)] font-mono mt-1 space-x-3">
                  <span>📅 {duty.date}</span>
                  <span>⏱ {duty.shift}</span>
                </div>
              </div>

              <button
                disabled={isApplied}
                onClick={() => handleApply(duty.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                  isApplied
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]'
                }`}
              >
                {isApplied
                  ? isTe
                    ? 'సమర్పించబడింది ✓'
                    : 'Registered ✓'
                  : isTe
                  ? 'సేవ ప్రారంభించండి'
                  : 'Sign Up for Shift'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
