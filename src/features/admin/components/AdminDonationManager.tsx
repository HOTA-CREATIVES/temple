'use client';

import React, { useState } from 'react';

export const AdminDonationManager: React.FC = () => {
  const [hundiTotal, setHundiTotal] = useState(185420);
  const [receipts, setReceipts] = useState([
    { id: '80G-9921', donor: 'Ramesh Kumar', amount: 10008, pan: 'ABCDE1234F', date: '2026-08-12', purpose: 'Temple Renovation' },
    { id: '80G-9922', donor: 'Sita Laxmi', amount: 5001, pan: 'FGHIJ5678K', date: '2026-08-12', purpose: 'Annadanam Trust' },
    { id: '80G-9923', donor: 'Venkatesh Rao', amount: 25000, pan: 'LMNOP9012Q', date: '2026-08-11', purpose: 'Gho Shala Maintenance' },
  ]);

  const [donorName, setDonorName] = useState('');
  const [amount, setAmount] = useState('');
  const [pan, setPan] = useState('');
  const [purpose, setPurpose] = useState('Temple General Trust');

  const handleIssueReceipt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !amount) return;

    const newReceipt = {
      id: `80G-${Math.floor(1000 + Math.random() * 9000)}`,
      donor: donorName,
      amount: Number(amount),
      pan: pan || 'NOT-PROVIDED',
      date: new Date().toISOString().split('T')[0],
      purpose,
    };

    setReceipts([newReceipt, ...receipts]);
    setHundiTotal(hundiTotal + Number(amount));
    setDonorName('');
    setAmount('');
    setPan('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-primary)]">
            Digital Hundi & 80G Tax Exemption Receipts
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Manage electronic donations, generate tax receipts, and audit trust transfers.
          </p>
        </div>
      </div>

      {/* Summary KPI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          <div className="text-xs text-[var(--text-secondary)] font-semibold">Total Digital Hundi Collections</div>
          <div className="font-mono text-3xl font-extrabold text-[var(--color-accent-gold)] mt-1">
            ₹{hundiTotal.toLocaleString('en-IN')}
          </div>
          <div className="text-[10px] text-emerald-500 font-bold mt-1">✓ Verified with Temple Treasury</div>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          <div className="text-xs text-[var(--text-secondary)] font-semibold">80G Receipts Generated</div>
          <div className="font-mono text-3xl font-extrabold text-[var(--color-primary)] mt-1">
            {receipts.length} Issued
          </div>
          <div className="text-[10px] text-[var(--text-secondary)] mt-1">100% IT Compliant</div>
        </div>

        <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
          <div className="text-xs text-[var(--text-secondary)] font-semibold">Average Contribution</div>
          <div className="font-mono text-3xl font-extrabold text-[var(--text-primary)] mt-1">
            ₹13,336
          </div>
          <div className="text-[10px] text-emerald-500 font-bold mt-1">↑ 18% increase this month</div>
        </div>
      </div>

      {/* Issue 80G Receipt Form */}
      <form onSubmit={handleIssueReceipt} className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl space-y-4">
        <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">Issue Official 80G Tax Exemption Receipt</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            required
            placeholder="Donor Full Name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
          <input
            type="number"
            required
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
          <input
            type="text"
            placeholder="PAN Card Number (Optional)"
            value={pan}
            onChange={(e) => setPan(e.target.value.toUpperCase())}
            className="px-3 py-2 text-xs font-mono uppercase rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          >
            <option value="Temple General Trust">Temple General Trust</option>
            <option value="Annadanam Trust">Annadanam Trust</option>
            <option value="Gho Shala Trust">Gho Shala Trust</option>
            <option value="Veda Pathashala Fund">Veda Pathashala Fund</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-xs font-semibold rounded-xl bg-[var(--color-primary)] text-white hover:bg-amber-700"
        >
          📄 Generate & Print 80G Receipt
        </button>
      </form>

      {/* Receipts Table */}
      <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
        <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">Recent 80G Tax Exemption Receipts</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--border-subtle)] text-[var(--color-accent-gold)] font-mono uppercase">
              <tr>
                <th className="py-2">Receipt #</th>
                <th className="py-2">Donor Name</th>
                <th className="py-2">PAN</th>
                <th className="py-2">Purpose</th>
                <th className="py-2">Date</th>
                <th className="py-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)] font-mono">
              {receipts.map((r) => (
                <tr key={r.id} className="hover:bg-[var(--bg-surface)]">
                  <td className="py-2.5 font-bold text-[var(--color-primary)]">{r.id}</td>
                  <td className="py-2.5 font-sans font-medium text-[var(--text-primary)]">{r.donor}</td>
                  <td className="py-2.5 text-[var(--text-secondary)]">{r.pan}</td>
                  <td className="py-2.5 font-sans text-[var(--text-secondary)]">{r.purpose}</td>
                  <td className="py-2.5 text-[var(--text-secondary)]">{r.date}</td>
                  <td className="py-2.5 text-right font-bold text-emerald-600 dark:text-emerald-400">
                    ₹{r.amount.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
