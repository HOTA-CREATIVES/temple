'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

interface Hotspot {
  id: string;
  nameEn: string;
  nameTe: string;
  descriptionEn: string;
  descriptionTe: string;
  icon: string;
  xPct: number; // Position X in percentage
  yPct: number; // Position Y in percentage
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'garbhagriha',
    nameEn: 'Main Sanctum (Garbhagriha)',
    nameTe: 'గర్భగుడి (మూలవిరాట్)',
    descriptionEn: 'The sacred inner sanctum housing the presiding deity. Silence and reverence observed.',
    descriptionTe: 'స్వామివారి మూలవిరాట్ వేంచేసియున్న ప్రధాన పవిత్ర స్థలం.',
    icon: '🛕',
    xPct: 50,
    yPct: 35,
  },
  {
    id: 'annadana-hall',
    nameEn: 'Nitya Annadana Hall',
    nameTe: 'అన్నదాన సత్రం',
    descriptionEn: 'Free sacred prasadam meal distributed daily from 11:30 AM to 3:00 PM.',
    descriptionTe: 'ఉదయం 11:30 నుండి మధ్యాహ్నం 3:00 వరకు పవిత్ర అన్నప్రసాద వితరణ.',
    icon: '🍲',
    xPct: 25,
    yPct: 65,
  },
  {
    id: 'seva-counter',
    nameEn: 'Seva & Laddu Ticket Counter',
    nameTe: 'సేవా & లడ్డూ కౌంటర్',
    descriptionEn: 'Direct counter for offline Seva registration and Laddu Prasadam collection.',
    descriptionTe: 'నేరుగా సేవా టిక్కెట్లు మరియు లడ్డూ ప్రసాదం పొందే కౌంటర్.',
    icon: '🎟️',
    xPct: 75,
    yPct: 60,
  },
  {
    id: 'goshala',
    nameEn: 'Temple Goshala',
    nameTe: 'ఆలయ గోశాల',
    descriptionEn: 'Sacred cow sanctuary. Devotees can feed fresh grass and offer prayers.',
    descriptionTe: 'గోమాతల నివాసం. భక్తులు గోపూజ మరియు గ్రాసము సమర్పించవచ్చు.',
    icon: '🐄',
    xPct: 80,
    yPct: 25,
  },
];

export const TempleMap: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-[var(--color-primary)]">
          {isTe ? 'ఇంటరాక్టివ్ ఆలయ మ్యాప్ & హెరిటేజ్ గైడ్' : 'Interactive Temple Map & Heritage Tour'}
        </h2>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">
          {isTe ? 'మ్యాప్‌లోని గుర్తులను నొక్కి ఆలయ ప్రాంగణ విశేషాలు చూడండి' : 'Click on hotspots to explore sub-shrines and premises facilities'}
        </p>
      </div>

      {/* Map Canvas Box */}
      <div className="relative w-full h-96 bg-[var(--bg-card)] border-2 border-[var(--color-border)] rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#var(--color-primary)_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <span className="text-xs font-mono text-[var(--color-text-muted)] absolute top-3 left-4">
          [TEMPLE PREMISES VECTOR MAP]
        </span>

        {/* Hotspot Nodes */}
        {HOTSPOTS.map((spot) => {
          const isSelected = activeHotspot.id === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-full transition-transform hover:scale-125 shadow-lg flex items-center justify-center ${
                isSelected
                  ? 'bg-[var(--color-primary)] text-white ring-4 ring-[var(--color-accent-gold)] scale-110'
                  : 'bg-[var(--bg-card)] border-2 border-[var(--color-primary)] text-xl'
              }`}
            >
              <span className="text-lg">{spot.icon}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Hotspot Detail Card */}
      {activeHotspot && (
        <div className="bg-[var(--bg-card)] border border-[var(--color-border)] rounded-xl p-5 shadow-md flex items-start space-x-4">
          <span className="text-4xl">{activeHotspot.icon}</span>
          <div className="space-y-1">
            <h4 className="text-lg font-bold font-serif text-[var(--color-primary)]">
              {isTe ? activeHotspot.nameTe : activeHotspot.nameEn}
            </h4>
            <p className="text-sm text-[var(--color-text-muted)]">
              {isTe ? activeHotspot.descriptionTe : activeHotspot.descriptionEn}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
