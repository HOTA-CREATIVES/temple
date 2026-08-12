'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PanchangamDay } from '@/features/panchangam/types';
import { getStoredPanchangamData, savePanchangamData } from '@/features/panchangam/services/panchangamService';
import { EventItem, getStoredEventsFIFO, addEventFIFO, deleteEvent } from '@/features/events/services/eventService';
import { authService, AdminUser } from '@/features/auth/services/authService';
import { AdminSidebar, AdminTab } from '@/features/admin/components/AdminSidebar';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>('panchangam');

  // Panchangam state
  const [panchangamList, setPanchangamList] = useState<PanchangamDay[]>([]);
  const [csvText, setCsvText] = useState('');
  const [importStatus, setImportStatus] = useState('');

  // Events state
  const [eventsList, setEventsList] = useState<EventItem[]>([]);
  const [title, setTitle] = useState('');
  const [titleTelugu, setTitleTelugu] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Grand Festival');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      router.replace('/admin/login');
      return;
    }
    setUser(currentUser);
    setPanchangamList(getStoredPanchangamData());
    setEventsList(getStoredEventsFIFO());
  }, [router]);

  const handleLogout = () => {
    authService.logout();
    router.replace('/admin/login');
  };

  const handleCsvImport = async () => {
    if (!csvText.trim()) {
      setImportStatus('Please paste valid CSV or text contents.');
      return;
    }

    try {
      const lines = csvText.trim().split('\n');
      const newItems: PanchangamDay[] = [];

      lines.forEach((line, index) => {
        if (index === 0 && line.toLowerCase().includes('date')) return;
        const parts = line.split(',').map((p) => p.trim().replace(/^["']|["']$/g, ''));
        if (parts.length >= 5) {
          newItems.push({
            date: parts[0],
            tithiEn: parts[1] || 'Shukla Paksha',
            tithiTe: parts[2] || 'శుక్ల పక్షం',
            nakshatraEn: parts[3] || 'Nakshatra',
            nakshatraTe: parts[4] || 'నక్షత్రం',
            rahuKalam: parts[5] || '04:30 PM – 06:00 PM',
            yamagandam: parts[6] || '12:00 PM – 01:30 PM',
            sunrise: parts[7] || '06:00 AM',
            sunset: parts[8] || '06:30 PM',
            festivalsEn: parts[9] ? [parts[9]] : [],
            festivalsTe: parts[10] ? [parts[10]] : [],
          });
        }
      });

      if (newItems.length === 0) {
        setImportStatus('No valid Panchangam rows found. Check format.');
        return;
      }

      const merged = [...panchangamList, ...newItems];
      await savePanchangamData(merged);
      setPanchangamList(merged);
      setImportStatus(`Successfully imported ${newItems.length} Panchangam days!`);
      setCsvText('');
    } catch {
      setImportStatus('Failed to parse CSV. Please check formatting.');
    }
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;

    const updated = await addEventFIFO({
      title,
      titleTelugu: titleTelugu || title,
      date,
      category,
      description: description || 'Special temple puja and festival event.',
    });

    setEventsList(updated);
    setTitle('');
    setTitleTelugu('');
    setDate('');
    setDescription('');
  };

  const handleDeleteEvent = async (id: string) => {
    const updated = await deleteEvent(id);
    setEventsList(updated);
  };

  const downloadSampleCsv = () => {
    const sample = `date,tithiEn,tithiTe,nakshatraEn,nakshatraTe,rahuKalam,yamagandam,sunrise,sunset,festivalsEn,festivalsTe\n2026-08-15,Shukla Paksha Chaturdashi,శుక్ల పక్ష చతుర్దశి,Bharani,భరణి నక్షత్రం,01:30 PM - 03:00 PM,06:00 AM - 07:30 AM,06:05 AM,06:35 PM,Rigveda Upakarma,ఋగ్వేద ఉపాకర్మ`;
    const blob = new Blob([sample], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'panchangam_sample.csv';
    a.click();
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Admin Navigation Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        adminName={user.name}
        onLogout={handleLogout}
      />

      {/* Admin Main Operations Content View */}
      <main className="flex-1 p-6 md:p-8 max-w-6xl overflow-y-auto">
        {activeTab === 'panchangam' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--color-primary)]">
                  Panchangam Dataset Bulk Importer
                </h2>
                <p className="text-xs text-[var(--text-secondary)]">
                  Import daily Tithi, Nakshatra, Rahu Kalam, and Vedic panchangam rows via CSV format.
                </p>
              </div>
              <button
                onClick={downloadSampleCsv}
                className="px-3 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-lg hover:bg-amber-500/10"
              >
                📥 Download Sample CSV
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
              <p className="text-xs text-[var(--text-secondary)]">
                Format: <code className="bg-[var(--bg-surface)] px-1.5 py-0.5 rounded text-amber-500 font-mono">date, tithiEn, tithiTe, nakshatraEn, nakshatraTe, rahuKalam, yamagandam, sunrise, sunset, festivalsEn, festivalsTe</code>
              </p>

              <textarea
                rows={5}
                value={csvText}
                onChange={(e) => setCsvText(e.target.value)}
                placeholder="Paste CSV rows here..."
                className="w-full p-3 text-xs font-mono rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)]"
              />

              <div className="flex items-center justify-between">
                <button
                  onClick={handleCsvImport}
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-[var(--color-primary)] text-white hover:bg-amber-700 transition-colors"
                >
                  Import Panchangam Data
                </button>
                {importStatus && (
                  <span className="text-xs font-semibold text-emerald-500">{importStatus}</span>
                )}
              </div>
            </div>

            {/* Imported Dataset Table */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">
                Loaded Panchangam Database ({panchangamList.length} Days)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-[var(--border-subtle)] text-[var(--color-accent-gold)] uppercase font-mono">
                    <tr>
                      <th className="py-2">Date</th>
                      <th className="py-2">Tithi (EN / TE)</th>
                      <th className="py-2">Nakshatra</th>
                      <th className="py-2">Rahu Kalam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)] font-mono">
                    {panchangamList.map((day) => (
                      <tr key={day.date} className="hover:bg-[var(--bg-surface)]">
                        <td className="py-2 font-bold text-[var(--color-primary)]">{day.date}</td>
                        <td className="py-2">
                          {day.tithiEn} <span className="text-[var(--text-secondary)]">({day.tithiTe})</span>
                        </td>
                        <td className="py-2">
                          {day.nakshatraEn} <span className="text-[var(--text-secondary)]">({day.nakshatraTe})</span>
                        </td>
                        <td className="py-2 text-rose-500">{day.rahuKalam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--color-primary)]">
                  Festival & Event Manager (FIFO Queue)
                </h2>
                <p className="text-xs text-[var(--text-secondary)]">
                  Add upcoming temple festivals and celebrations processed in strict First-In-First-Out queue order.
                </p>
              </div>
            </div>

            <form onSubmit={handleAddEvent} className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">Create New Festival Event</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Event Title (English)"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                />
                <input
                  type="text"
                  placeholder="Event Title (Telugu)"
                  value={titleTelugu}
                  onChange={(e) => setTitleTelugu(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                />
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                >
                  <option value="Grand Festival">Grand Festival</option>
                  <option value="Special Puja">Special Puja</option>
                  <option value="Kalyanam">Kalyanam</option>
                  <option value="Procession">Procession</option>
                </select>
              </div>
              <textarea
                rows={2}
                placeholder="Event Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-[var(--color-primary)] text-white hover:bg-amber-700 transition-colors"
              >
                ➕ Enqueue Festival Event
              </button>
            </form>

            {/* Events FIFO List */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">
                Active Festival Events ({eventsList.length})
              </h3>
              <div className="space-y-3">
                {eventsList.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[var(--text-primary)]">{event.title}</span>
                        <span className="text-xs text-[var(--text-secondary)]">({event.titleTelugu})</span>
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
                          {event.category}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-[var(--color-accent-gold)] mt-1">
                        📅 {event.date}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="px-3 py-1 text-xs font-semibold text-rose-500 border border-rose-500/30 rounded-lg hover:bg-rose-500/10"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
