'use client';

import React, { useState } from 'react';

export const AdminVolunteerManager: React.FC = () => {
  const [volunteers, setVolunteers] = useState([
    { id: 'V-101', name: 'Kalyan Chakravarthy', phone: '+91 98765 43210', area: 'Queue Management', shift: 'Morning (06:00 - 12:00)', status: 'Active' },
    { id: 'V-102', name: 'Sunitha Reddy', phone: '+91 91234 56789', area: 'Prasadam Distribution', shift: 'Afternoon (12:00 - 18:00)', status: 'Active' },
    { id: 'V-103', name: 'Srinivas Sharma', phone: '+91 99887 76655', area: 'VIP Security & Darshan', shift: 'Evening (18:00 - 21:30)', status: 'On Leave' },
  ]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Queue Management');
  const [shift, setShift] = useState('Morning (06:00 - 12:00)');

  const handleRegisterVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const newV = {
      id: `V-${Math.floor(100 + Math.random() * 900)}`,
      name,
      phone,
      area,
      shift,
      status: 'Active',
    };

    setVolunteers([newV, ...volunteers]);
    setName('');
    setPhone('');
  };

  const toggleStatus = (id: string) => {
    setVolunteers(
      volunteers.map((v) =>
        v.id === id ? { ...v, status: v.status === 'Active' ? 'On Leave' : 'Active' } : v
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-primary)]">
            Volunteer & Sevak Roster Management
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Assign duties, register new temple sevaks, and coordinate shift timings.
          </p>
        </div>
      </div>

      {/* Register Volunteer Form */}
      <form onSubmit={handleRegisterVolunteer} className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl space-y-4">
        <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">Enroll New Temple Volunteer (Sevak)</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            required
            placeholder="Volunteer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
          <input
            type="text"
            required
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          />
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          >
            <option value="Queue Management">Queue Management</option>
            <option value="Prasadam Distribution">Prasadam Distribution</option>
            <option value="VIP Security & Darshan">VIP Security & Darshan</option>
            <option value="Annadanam Dining Hall">Annadanam Dining Hall</option>
            <option value="Chappal Counter">Chappal Counter</option>
          </select>
          <select
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          >
            <option value="Morning (06:00 - 12:00)">Morning (06:00 - 12:00)</option>
            <option value="Afternoon (12:00 - 18:00)">Afternoon (12:00 - 18:00)</option>
            <option value="Evening (18:00 - 21:30)">Evening (18:00 - 21:30)</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-xs font-semibold rounded-xl bg-[var(--color-primary)] text-white hover:bg-amber-700"
        >
          ➕ Register Sevak
        </button>
      </form>

      {/* Roster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {volunteers.map((v) => (
          <div
            key={v.id}
            className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-[var(--text-primary)]">{v.name}</span>
                <span className="text-[10px] font-mono font-bold text-amber-500">{v.id}</span>
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-0.5">{v.phone}</div>
              <div className="text-xs font-semibold text-[var(--color-secondary)] mt-1">
                📍 {v.area} • <span className="font-normal text-[var(--text-secondary)]">{v.shift}</span>
              </div>
            </div>

            <button
              onClick={() => toggleStatus(v.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-colors ${
                v.status === 'Active'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400'
              }`}
            >
              {v.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
