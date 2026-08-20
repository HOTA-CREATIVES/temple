'use client';

import React, { useState } from 'react';
import { Seva, SevaSlot } from '../types';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

interface SlotPickerProps {
  seva: Seva;
  language?: 'en' | 'te';
  onSlotSelect: (slot: SevaSlot) => void;
}

export const SlotPicker: React.FC<SlotPickerProps> = ({ seva, language: propLang, onSlotSelect }) => {
  const context = useLanguageTheme();
  const language = propLang || context.currentLanguage;
  const isTe = language === 'te';

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  const mockSlots: SevaSlot[] = [
    {
      id: `${seva.id}-${selectedDate}-0800`,
      sevaId: seva.id,
      date: selectedDate,
      startTime: '08:00 AM',
      totalSlots: 20,
      bookedSlots: 12,
    },
    {
      id: `${seva.id}-${selectedDate}-1030`,
      sevaId: seva.id,
      date: selectedDate,
      startTime: '10:30 AM',
      totalSlots: 20,
      bookedSlots: 18,
    },
    {
      id: `${seva.id}-${selectedDate}-0500`,
      sevaId: seva.id,
      date: selectedDate,
      startTime: '05:00 PM',
      totalSlots: 20,
      bookedSlots: 5,
    },
  ];

  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
        <i className="fa-regular fa-calendar-check text-[var(--color-primary)] text-lg"></i>
        <h4 className="text-lg font-bold font-serif text-[var(--color-secondary)]">
          {isTe ? 'తేదీ మరియు సమయం ఎంచుకోండి' : 'Select Date & Time Slot'}
        </h4>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5 uppercase font-mono tracking-wider">
          {isTe ? 'సేవా తేదీ' : 'Seva Date'}
        </label>
        <input
          type="date"
          value={selectedDate}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setSelectedSlotId(null);
          }}
          className="w-full px-4 py-2.5 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] font-mono text-xs focus:outline-none focus:border-[var(--color-primary)]"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase font-mono tracking-wider">
          {isTe ? 'అందుబాటులో ఉన్న సమయాలు' : 'Available Time Slots'}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {mockSlots.map((slot) => {
            const available = slot.totalSlots - slot.bookedSlots;
            const isSelected = selectedSlotId === slot.id;

            return (
              <button
                key={slot.id}
                type="button"
                onClick={() => {
                  setSelectedSlotId(slot.id);
                  onSlotSelect(slot);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 ring-2 ring-[var(--color-primary)]/20 shadow-sm'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:border-[var(--border-gold)] text-[var(--text-primary)]'
                }`}
              >
                <div className="text-sm font-bold font-mono text-[var(--text-primary)]">
                  {slot.startTime}
                </div>
                <div className="text-xs text-[var(--color-primary)] font-semibold mt-1">
                  {available} {isTe ? 'ఖాళీలు మాత్రమే' : 'slots left'}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
