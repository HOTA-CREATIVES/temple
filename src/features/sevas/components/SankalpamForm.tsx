'use client';

import React, { useState } from 'react';
import { SankalpamDetails } from '../types';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

interface SankalpamFormProps {
  language?: 'en' | 'te';
  onSubmit: (details: SankalpamDetails) => void;
}

export const SankalpamForm: React.FC<SankalpamFormProps> = ({ language: propLang, onSubmit }) => {
  const context = useLanguageTheme();
  const language = propLang || context.currentLanguage;
  const isTe = language === 'te';

  const [devoteeName, setDevoteeName] = useState('');
  const [gothram, setGothram] = useState('');
  const [nakshatram, setNakshatram] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!devoteeName || !gothram || !nakshatram || !phone) {
      alert(isTe ? 'దయచేసి అన్ని వివరాలను భర్తీ చేయండి' : 'Please fill all required fields');
      return;
    }
    onSubmit({
      devoteeName,
      gothram,
      nakshatram,
      phone,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
        <i className="fa-solid fa-[#1F6F5C] fa-om text-[var(--color-primary)] text-lg"></i>
        <h4 className="text-lg font-bold font-serif text-[var(--color-secondary)]">
          {isTe ? 'సంకల్పం వివరాలు' : 'Sacred Sankalpam Details'}
        </h4>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1 font-mono">
          {isTe ? 'భక్తుని పేరు *' : 'Primary Devotee Name *'}
        </label>
        <input
          type="text"
          required
          value={devoteeName}
          onChange={(e) => setDevoteeName(e.target.value)}
          placeholder={isTe ? 'ఉదా: శ్రీనివాస రావు' : 'e.g. K. Srinivas Rao'}
          className="w-full px-4 py-2.5 text-xs rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1 font-mono">
            {isTe ? 'గోత్రం *' : 'Gothram *'}
          </label>
          <input
            type="text"
            required
            value={gothram}
            onChange={(e) => setGothram(e.target.value)}
            placeholder={isTe ? 'ఉదా: కాశ్యప' : 'e.g. Kashyapa'}
            className="w-full px-4 py-2.5 text-xs rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1 font-mono">
            {isTe ? 'నక్షత్రం *' : 'Nakshatram *'}
          </label>
          <input
            type="text"
            required
            value={nakshatram}
            onChange={(e) => setNakshatram(e.target.value)}
            placeholder={isTe ? 'ఉదా: రోహిణి' : 'e.g. Rohini'}
            className="w-full px-4 py-2.5 text-xs rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1 font-mono">
          {isTe ? 'సంప్రదింపు ఫోన్ నంబర్ *' : 'Contact Mobile Number *'}
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="9876543210"
          className="w-full px-4 py-2.5 text-xs rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-mono focus:outline-none focus:border-[var(--color-primary)]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 text-xs font-bold rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all cursor-pointer shadow-md mt-2 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-qrcode"></i>
        <span>{isTe ? 'బుకింగ్ పూర్తీ చేసి పాస్ పొందండి' : 'Confirm Booking & Generate Digital Pass'}</span>
      </button>
    </form>
  );
};
