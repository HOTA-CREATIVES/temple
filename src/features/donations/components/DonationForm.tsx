'use client';

import React, { useState } from 'react';
import { DonationCause } from '../types';
import { useLanguage } from '@/providers/LanguageProvider';

const CAUSES: DonationCause[] = [
  {
    id: 'annadanam',
    titleEn: 'Nitya Annadanam',
    titleTe: 'నిత్య అన్నదానం',
    descriptionEn: 'Feed hundreds of visiting devotees daily with sacred prasadam.',
    descriptionTe: 'రోజూ విచ్చేసే వందలాది మంది భక్తులకు పవిత్ర ప్రసాద వితరణ.',
    icon: '🍲',
    taxExempt80G: true,
  },
  {
    id: 'goshala',
    titleEn: 'Goshala Maintenance',
    titleTe: 'గోశాల నిర్వహణ',
    descriptionEn: 'Support the care, fodder, and shelter for sacred cows.',
    descriptionTe: 'గోవుల పోషణ, గ్రాసము మరియు సంరక్షణ కోసం సహకారం.',
    icon: '🐄',
    taxExempt80G: true,
  },
  {
    id: 'temple-renovation',
    titleEn: 'Temple Construction & Gopuram',
    titleTe: 'ఆలయ నిర్మాణం & గోపురం',
    descriptionEn: 'Contribute towards temple architectural expansion and Gopuram consecration.',
    descriptionTe: 'ఆలయ విస్తరణ మరియు రాజగోపురం నిర్మాణ మహోత్సవం కోసం నిధి.',
    icon: '🛕',
    taxExempt80G: true,
  },
];

export const DonationForm: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const [selectedCauseId, setSelectedCauseId] = useState<string>('annadanam');
  const [customAmount, setCustomAmount] = useState<string>('501');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');

  const PRESET_AMOUNTS = [116, 501, 1116, 5001, 10001];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      isTe
        ? `₹${customAmount} విరాళం దాఖలైంది! ధన్యవాదాలు.`
        : `Thank you for your generous donation of ₹${customAmount}!`
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-[var(--bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-md space-y-6">
      <div className="text-center">
        <span className="text-4xl mb-2 inline-block">🪙</span>
        <h2 className="text-2xl font-bold font-serif text-[var(--color-primary)]">
          {isTe ? 'డిజిటల్ హుండి & విరాళాలు' : 'Digital Hundi & Devotional Offerings'}
        </h2>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          {isTe ? '80G ఆదాయపు పన్ను మినహాయింపు రసీదు పొందుతారు' : '80G Tax Exemption Eligible'}
        </p>
      </div>

      <form onSubmit={handleDonate} className="space-y-5">
        {/* Cause Selection */}
        <div>
          <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-2">
            {isTe ? 'సేవా కారణం ఎంచుకోండి' : 'Select Devotional Cause'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CAUSES.map((cause) => {
              const isSelected = selectedCauseId === cause.id;
              return (
                <button
                  key={cause.id}
                  type="button"
                  onClick={() => setSelectedCauseId(cause.id)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    isSelected
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)] ring-2 ring-[var(--color-primary)]'
                      : 'border-[var(--color-border)] bg-[var(--bg-base)] hover:border-[var(--color-primary)]'
                  }`}
                >
                  <span className="text-2xl mb-1">{cause.icon}</span>
                  <div className="font-bold text-sm text-[var(--color-text-main)]">
                    {isTe ? cause.titleTe : cause.titleEn}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Preset & Custom Amounts */}
        <div>
          <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-2">
            {isTe ? 'విరాళం మొత్తం (₹)' : 'Donation Amount (₹)'}
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {PRESET_AMOUNTS.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setCustomAmount(amt.toString())}
                className={`px-4 py-2 rounded-lg border font-mono text-sm font-bold transition-colors ${
                  customAmount === amt.toString()
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                    : 'bg-[var(--bg-base)] text-[var(--color-text-main)] border-[var(--color-border)] hover:border-[var(--color-primary)]'
                }`}
              >
                ₹{amt}
              </button>
            ))}
          </div>
          <input
            type="number"
            required
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] font-mono text-lg font-bold"
            placeholder="Enter custom amount"
          />
        </div>

        {/* Donor Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
              {isTe ? 'దాత పేరు *' : 'Donor Name *'}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] text-sm"
            />
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
              className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] font-mono text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
            {isTe ? 'పాన్ నంబర్ (80G రసీదు కోసం)' : 'PAN Card (For 80G Tax Exemption Receipt)'}
          </label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value.toUpperCase())}
            placeholder="ABCDE1234F"
            maxLength={10}
            className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] font-mono text-sm uppercase"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 text-base font-bold rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors shadow-md"
        >
          {isTe ? `₹${customAmount} సమర్పించండి` : `Offer ₹${customAmount}`}
        </button>
      </form>
    </div>
  );
};
