'use client';

import React, { useState } from 'react';
import { SankalpamDetails } from '../types';

interface SankalpamFormProps {
  language: 'en' | 'te';
  onSubmit: (details: SankalpamDetails) => void;
}

export const SankalpamForm: React.FC<SankalpamFormProps> = ({ language, onSubmit }) => {
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
    <form onSubmit={handleSubmit} className="bg-[var(--bg-card)] border border-[var(--color-border)] rounded-xl p-5 shadow-sm space-y-4">
      <h4 className="text-lg font-bold font-serif text-[var(--color-primary)] mb-2">
        {isTe ? 'సంకల్పం వివరాలు' : 'Sankalpam Details'}
      </h4>

      <div>
        <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
          {isTe ? 'భక్తుని పేరు *' : 'Devotee Name *'}
        </label>
        <input
          type="text"
          required
          value={devoteeName}
          onChange={(e) => setDevoteeName(e.target.value)}
          placeholder={isTe ? 'ఉదా: శ్రీనివాస్' : 'e.g. Srinivas'}
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
            {isTe ? 'గోత్రం *' : 'Gothram *'}
          </label>
          <input
            type="text"
            required
            value={gothram}
            onChange={(e) => setGothram(e.target.value)}
            placeholder={isTe ? 'ఉదా: కాశ్యప' : 'e.g. Kashyapa'}
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
            {isTe ? 'నక్షత్రం *' : 'Nakshatram *'}
          </label>
          <input
            type="text"
            required
            value={nakshatram}
            onChange={(e) => setNakshatram(e.target.value)}
            placeholder={isTe ? 'ఉదా: రోహిణి' : 'e.g. Rohini'}
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
          {isTe ? 'ఫోన్ నంబర్ *' : 'Phone Number *'}
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="9876543210"
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] font-mono text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 font-semibold rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors mt-2"
      >
        {isTe ? 'బుకింగ్ కొనసాగించండి' : 'Proceed to Checkout'}
      </button>
    </form>
  );
};
