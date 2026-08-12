'use client';

import React, { useState } from 'react';

export const AdminPrasadamManager: React.FC = () => {
  const [prasadamCounters, setPrasadamCounters] = useState([
    { id: '1', name: 'Laddoo (Tirupati Special)', available: 450, totalLimit: 1000, price: 50 },
    { id: '2', name: 'Vada Prasadam', available: 120, totalLimit: 300, price: 30 },
    { id: '3', name: 'Pulihora (Tamarind Rice)', available: 200, totalLimit: 500, price: 40 },
    { id: '4', name: 'Chakkara Pongal', available: 85, totalLimit: 200, price: 35 },
  ]);

  const [annadanamCount, setAnnadanamCount] = useState(1450);

  const incrementPrasadam = (id: string, amount: number) => {
    setPrasadamCounters(
      prasadamCounters.map((p) =>
        p.id === id ? { ...p, available: Math.min(p.totalLimit, p.available + amount) } : p
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-primary)]">
            Prasadam Counter & Daily Annadanam Management
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Monitor real-time kitchen output, inventory stock, and free Annadanam meal counts.
          </p>
        </div>
      </div>

      {/* Annadanam Daily Meal Counter */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            🥣 Today's Free Nitya Annadanam Served
          </div>
          <div className="font-mono text-4xl font-extrabold text-[var(--color-primary)] mt-1">
            {annadanamCount} Devotees
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Kitchen batch #4 currently active in Main Dining Hall
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setAnnadanamCount(annadanamCount + 50)}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-[var(--color-primary)] text-white hover:bg-amber-700"
          >
            + 50 Meals Served
          </button>
          <button
            onClick={() => setAnnadanamCount(annadanamCount + 100)}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-600 text-white hover:bg-amber-700"
          >
            + 100 Meals Served
          </button>
        </div>
      </div>

      {/* Prasadam Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prasadamCounters.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[var(--text-primary)]">{item.name}</span>
              <span className="font-mono font-bold text-xs text-[var(--color-accent-gold)]">
                ₹{item.price} / unit
              </span>
            </div>

            <div className="w-full bg-[var(--bg-surface)] h-2 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all"
                style={{ width: `${(item.available / item.totalLimit) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--text-secondary)]">
                Stock: <strong className="text-[var(--text-primary)] font-mono">{item.available}</strong> / {item.totalLimit}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => incrementPrasadam(item.id, 50)}
                  className="px-2.5 py-1 text-[11px] font-semibold bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg hover:border-[var(--color-primary)]"
                >
                  +50 Stock
                </button>
                <button
                  onClick={() => incrementPrasadam(item.id, 100)}
                  className="px-2.5 py-1 text-[11px] font-semibold bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg hover:border-[var(--color-primary)]"
                >
                  +100 Stock
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
