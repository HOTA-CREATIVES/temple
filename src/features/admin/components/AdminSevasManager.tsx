'use client';

import React, { useState } from 'react';
import { MOCK_SEVAS } from '@/features/sevas/services/sevaService';
import { Seva } from '@/features/sevas/types';

export const AdminSevasManager: React.FC = () => {
  const [sevas, setSevas] = useState<Seva[]>(MOCK_SEVAS);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<'daily' | 'abhishekam' | 'kalyanam' | 'special'>('special');
  const [duration, setDuration] = useState('30');

  const handleAddSeva = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price) return;

    const newSeva: Seva = {
      id: `seva-${Date.now()}`,
      titleEn: title,
      titleTe: title,
      category,
      price: Number(price),
      durationMinutes: Number(duration),
      descriptionEn: 'Temple official seva ceremony.',
      descriptionTe: 'దేవాలయ శ్రేష్టమైన సేవా కార్యక్రమం.',
      maxSlotsPerDay: 20,
      isActive: true,
    };

    setSevas([newSeva, ...sevas]);
    setTitle('');
    setPrice('');
  };

  const toggleAvailability = (id: string) => {
    setSevas(
      sevas.map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-primary)]">
            Seva & Puja Catalog Manager
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Configure active Sevas, pricing, daily slot capacities, and booking status.
          </p>
        </div>
      </div>

      {/* Add New Seva Form */}
      <form onSubmit={handleAddSeva} className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl space-y-4">
        <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">Add New Seva Ceremony</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            required
            placeholder="Seva Name (e.g., Suprabhatam)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
          <input
            type="number"
            required
            placeholder="Dakshina (₹ Price)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as 'daily' | 'abhishekam' | 'kalyanam' | 'special')}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          >
            <option value="daily">Daily Seva</option>
            <option value="abhishekam">Abhishekam</option>
            <option value="kalyanam">Kalyanam</option>
            <option value="special">Special</option>
          </select>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration (Mins)"
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-xs font-semibold rounded-xl bg-[var(--color-primary)] text-white hover:bg-amber-700"
        >
          ➕ Create Seva Offering
        </button>
      </form>

      {/* Sevas List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sevas.map((seva) => (
          <div
            key={seva.id}
            className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-[var(--text-primary)]">{seva.titleEn}</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  {seva.category}
                </span>
              </div>
              <div className="text-xs font-mono text-[var(--color-accent-gold)] font-bold mt-1">
                ₹{seva.price} • {seva.durationMinutes} mins • {seva.maxSlotsPerDay} slots/day
              </div>
            </div>

            <button
              onClick={() => toggleAvailability(seva.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-colors ${
                seva.isActive
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400'
              }`}
            >
              {seva.isActive ? 'Active' : 'Disabled'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
