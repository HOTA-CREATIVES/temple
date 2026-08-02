'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

interface Stotram {
  id: string;
  titleEn: string;
  titleTe: string;
  duration: string;
  lyricsEn: string[];
  lyricsTe: string[];
}

const STOTRAMS: Stotram[] = [
  {
    id: 'suprabhatam',
    titleEn: 'Sri Venkateswara Suprabhatam',
    titleTe: 'శ్రీ వేంకటేశ్వర సుప్రభాతం',
    duration: '12:45',
    lyricsEn: [
      'Kausalya supraja Rama purva sandhya pravartate',
      'Uttistha narasardula kartavyam daivamahnikam',
      'Uttisthottistha Govinda uttistha garudadhvaja',
    ],
    lyricsTe: [
      'కౌసల్యా సుప్రజా రామా పూర్వా సంధ్యా ప్రవర్తతే',
      'ఉత్తిష్ఠ నరశార్దూల కర్తవ్యం దైవమాహ్నికమ్',
      'ఉత్తిష్ఠోత్తిష్ఠ గోవింద ఉత్తిష్ఠ గరుడధ్వజ',
    ],
  },
  {
    id: 'astakam',
    titleEn: 'Lingashtakam',
    titleTe: 'లింగాష్టకం',
    duration: '06:15',
    lyricsEn: [
      'Brahma Murari Surarchita Lingam',
      'Nirmala Bhashita Shobhita Lingam',
      'Janmaja Dukha Vinashaka Lingam',
    ],
    lyricsTe: [
      'బ్రహ్మ మురారి సురార్చిత లింగం',
      'నిర్మల భాషిత శోభిత లింగం',
      'జన్మజ దుఃఖ వినాశక లింగం',
    ],
  },
];

export const AudioStotramPlayer: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const [activeStotram, setActiveStotram] = useState<Stotram>(STOTRAMS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-[var(--bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-lg space-y-6">
      <h3 className="text-xl font-bold font-serif text-[var(--color-primary)]">
        {isTe ? 'భక్తి స్తోత్రాలు & ఆడియో ప్లేయర్' : 'Devotional Stotrams & Audio Player'}
      </h3>

      {/* Playlist Select */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {STOTRAMS.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setActiveStotram(s);
              setIsPlaying(true);
            }}
            className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
              activeStotram.id === s.id
                ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)]'
                : 'border-[var(--color-border)] bg-[var(--bg-base)]'
            }`}
          >
            <div>
              <div className="font-bold text-sm text-[var(--color-text-main)]">
                {isTe ? s.titleTe : s.titleEn}
              </div>
              <div className="text-xs text-[var(--color-text-muted)] font-mono mt-0.5">
                ⏱ {s.duration}
              </div>
            </div>
            <span className="text-xl">{activeStotram.id === s.id && isPlaying ? '⏸' : '▶'}</span>
          </button>
        ))}
      </div>

      {/* Lyrics Display */}
      <div className="p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--color-border)] text-center space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-gold)]">
          {isTe ? 'సాహిత్యం (సాంక్రనైజ్డ్)' : 'Synced Lyrics'}
        </span>
        <div className="space-y-2 font-serif text-lg text-[var(--color-text-main)]">
          {(isTe ? activeStotram.lyricsTe : activeStotram.lyricsEn).map((line, idx) => (
            <p key={idx} className={idx === 0 ? 'font-bold text-[var(--color-primary)] scale-105' : 'opacity-70'}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
