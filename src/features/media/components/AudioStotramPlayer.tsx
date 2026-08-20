'use client';

import React, { useState } from 'react';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

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
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  const [activeStotram, setActiveStotram] = useState<Stotram>(STOTRAMS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-md space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/15 flex items-center justify-center text-[var(--color-primary)] text-lg border border-[var(--border-gold)]">
          <i className="fa-solid fa-music"></i>
        </div>
        <h3 className="text-xl font-bold font-serif text-[var(--color-secondary)]">
          {isTe ? 'భక్తి స్తోత్రాలు & ఆడియో ప్లేయర్' : 'Devotional Stotrams & Audio Chanting'}
        </h3>
      </div>

      {/* Playlist Select */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {STOTRAMS.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setActiveStotram(s);
              setIsPlaying(!isPlaying || activeStotram.id !== s.id);
            }}
            className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
              activeStotram.id === s.id
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold'
                : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--border-gold)]'
            }`}
          >
            <div>
              <div className="font-bold text-sm">
                {isTe ? s.titleTe : s.titleEn}
              </div>
              <div className="text-xs text-[var(--text-secondary)] font-mono mt-1 flex items-center gap-1">
                <i className="fa-regular fa-clock text-[10px]"></i>
                <span>{s.duration}</span>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs shadow-sm">
              <i className={`fa-solid ${activeStotram.id === s.id && isPlaying ? 'fa-pause' : 'fa-play ml-0.5'}`}></i>
            </div>
          </button>
        ))}
      </div>

      {/* Lyrics Display */}
      <div className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center space-y-4">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-accent-gold)] px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] inline-block">
          {isTe ? 'సాహిత్యం (పారాయణం)' : 'Synced Sacred Lyrics'}
        </span>
        <div className="space-y-3 font-serif text-lg text-[var(--text-primary)] leading-relaxed">
          {(isTe ? activeStotram.lyricsTe : activeStotram.lyricsEn).map((line, idx) => (
            <p key={idx} className={idx === 0 ? 'font-bold text-[var(--color-primary)] text-xl drop-shadow-sm' : 'text-[var(--text-secondary)] font-medium'}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
