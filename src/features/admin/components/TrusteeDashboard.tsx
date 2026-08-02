'use client';

import React from 'react';

export const TrusteeDashboard: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
        <div>
          <h2 className="text-2xl font-bold font-serif text-[var(--color-primary)]">
            Trustee Financial & Audit Overview
          </h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            Real-time collection ledgers, Seva bookings, and daily Digital Hundi analytics.
          </p>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs font-bold rounded-full">
          Audited & Verified
        </span>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--color-border)] shadow-sm">
          <div className="text-xs text-[var(--color-text-muted)] font-semibold">Today's Digital Hundi</div>
          <div className="text-2xl font-bold font-mono text-[var(--color-accent-gold)] mt-1">₹45,210</div>
          <div className="text-xs text-emerald-600 mt-1">↑ 14% vs yesterday</div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--color-border)] shadow-sm">
          <div className="text-xs text-[var(--color-text-muted)] font-semibold">Seva Revenue (This Month)</div>
          <div className="text-2xl font-bold font-mono text-[var(--color-primary)] mt-1">₹3,82,500</div>
          <div className="text-xs text-emerald-600 mt-1">128 Sevas booked</div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--color-border)] shadow-sm">
          <div className="text-xs text-[var(--color-text-muted)] font-semibold">Issued 80G Receipts</div>
          <div className="text-2xl font-bold font-mono text-[var(--color-text-main)] mt-1">42</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1">100% Tax Compliant</div>
        </div>
      </div>

      {/* Audit Log Table Mock */}
      <div className="bg-[var(--bg-card)] border border-[var(--color-border)] rounded-xl p-5 shadow-sm">
        <h4 className="font-bold text-sm text-[var(--color-primary)] mb-3">Recent Financial Audit Log</h4>
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded bg-[var(--bg-base)] flex justify-between">
            <span>TXN-8821 • Annadanam Contribution</span>
            <span className="font-bold text-[var(--color-accent-gold)]">+ ₹5,001</span>
          </div>
          <div className="p-2.5 rounded bg-[var(--bg-base)] flex justify-between">
            <span>TXN-8820 • Srinivasa Kalyanam Seva</span>
            <span className="font-bold text-[var(--color-primary)]">+ ₹1,116</span>
          </div>
        </div>
      </div>
    </div>
  );
};
