'use client';

import React, { useState } from 'react';
import { Seva, SevaSlot } from '../types';

interface SlotPickerProps {
  seva: Seva;
  language: 'en' | 'te';
  onSlotSelect: (slot: SevaSlot) => void;
}

export const SlotPicker: React.FC<SlotPickerProps> = ({ seva, language, onSlotSelect }) => {
  const isTe = language === 'te';
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  // Mock available slots for selected date
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
    <div className="bg-[var(--bg-card)] border border-[var(--color-border)] rounded-xl p-5 shadow-sm">
      <h4 className="text-lg font-bold font-serif mb-4 text-[var(--color-primary)]">
        {isTe ? 'తేదీ మరియు సమయం ఎంచుకోండి' : 'Select Date & Time Slot'}
      </h4>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
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
          className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--bg-base)] text-[var(--color-text-main)] font-mono text-sm"
        />
      </div>

      <div className="space-y-2 mb-5">
        <label className="block text-xs font-semibold text-[var(--color-text-muted)]">
          {isTe ? 'అందుబాటులో ఉన్న సమయాలు' : 'Available Time Slots'}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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
                className={`p-3 rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)] ring-2 ring-[var(--color-primary)]'
                    : 'border-[var(--color-border)] bg-[var(--bg-base)] hover:border-[var(--color-primary)]'
                }`}
              >
                <div className="text-sm font-bold font-mono text-[var(--color-text-main)]">
                  {slot.startTime}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">
                  {available} {isTe ? 'ఖాళీలు' : 'slots left'}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
