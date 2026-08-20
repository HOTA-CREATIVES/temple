'use client';

import React, { useState } from 'react';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

interface Hotspot {
  id: string;
  nameEn: string;
  nameTe: string;
  descriptionEn: string;
  descriptionTe: string;
  icon: string;
  xPct: number;
  yPct: number;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'garbhagriha',
    nameEn: 'Main Sanctum (Garbhagriha)',
    nameTe: 'గర్భగుడి (మూలవిరాట్)',
    descriptionEn: 'The sacred inner sanctum housing the presiding deity. Silence and reverence observed.',
    descriptionTe: 'స్వామివారి మూలవిరాట్ వేంచేసియున్న ప్రధాన పవిత్ర స్థలం.',
    icon: 'fa-gopuram',
    xPct: 50,
    yPct: 35,
  },
  {
    id: 'annadana-hall',
    nameEn: 'Nitya Annadana Hall',
    nameTe: 'అన్నదాన సత్రం',
    descriptionEn: 'Free sacred prasadam meal distributed daily from 11:30 AM to 3:00 PM.',
    descriptionTe: 'ఉదయం 11:30 నుండి మధ్యాహ్నం 3:00 వరకు పవిత్ర అన్నప్రసాద వితరణ.',
    icon: 'fa-bowl-food',
    xPct: 25,
    yPct: 65,
  },
  {
    id: 'seva-counter',
    nameEn: 'Seva & Laddu Ticket Counter',
    nameTe: 'సేవా & లడ్డూ కౌంటర్',
    descriptionEn: 'Direct counter for offline Seva registration and Laddu Prasadam collection.',
    descriptionTe: 'నేరుగా సేవా టిక్కెట్లు మరియు లడ్డూ ప్రసాదం పొందే కౌంటర్.',
    icon: 'fa-ticket',
    xPct: 75,
    yPct: 60,
  },
  {
    id: 'goshala',
    nameEn: 'Temple Goshala',
    nameTe: 'ఆలయ గోశాల',
    descriptionEn: 'Sacred cow sanctuary. Devotees can feed fresh grass and offer prayers.',
    descriptionTe: 'గోమాతల నివాసం. భక్తులు గోపూజ మరియు గ్రాసము సమర్పించవచ్చు.',
    icon: 'fa-heart',
    xPct: 80,
    yPct: 25,
  },
];

export const TempleMap: React.FC = () => {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-[var(--color-secondary)]">
          {isTe ? 'ఇంటరాక్టివ్ ఆలయ ప్రాంగణ మ్యాప్' : 'Interactive Temple Premises Map'}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
          {isTe ? 'మ్యాప్‌లోని గురుతులను ఎంచుకుని ఉప ఆలయాలు మరియు సదుపాయాలు చూడండి' : 'Click on hotspots to explore sub-shrines, Annadanam hall, and premises facilities'}
        </p>
      </div>

      {/* Map Canvas Box */}
      <div className="relative w-full h-96 bg-[var(--bg-surface)] border-2 border-[var(--border-subtle)] rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#var(--color-primary)_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <span className="text-[10px] font-mono text-[var(--color-accent-gold)] absolute top-4 left-4 font-bold tracking-widest uppercase bg-[var(--bg-elevated)] px-2.5 py-1 rounded-full border border-[var(--border-subtle)]">
          📍 TEMPLE PREMISES VECTOR LAYOUT
        </span>

        {/* Hotspot Nodes */}
        {HOTSPOTS.map((spot) => {
          const isSelected = activeHotspot.id === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-lg flex items-center justify-center cursor-pointer ${
                isSelected
                  ? 'bg-[var(--color-primary)] text-white ring-4 ring-[var(--color-accent-gold)] scale-110'
                  : 'bg-[var(--bg-surface)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--bg-elevated)]'
              }`}
              title={isTe ? spot.nameTe : spot.nameEn}
            >
              <i className={`fa-solid ${spot.icon} text-base`}></i>
            </button>
          );
        })}
      </div>

      {/* Selected Hotspot Detail Card */}
      {activeHotspot && (
        <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-5 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center text-xl shrink-0 border border-[var(--border-gold)]">
            <i className={`fa-solid ${activeHotspot.icon}`}></i>
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold font-serif text-[var(--color-secondary)]">
              {isTe ? activeHotspot.nameTe : activeHotspot.nameEn}
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isTe ? activeHotspot.descriptionTe : activeHotspot.descriptionEn}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
