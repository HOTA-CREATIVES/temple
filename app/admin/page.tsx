'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="primary">Admin Portal</Badge>
          <h1 className="font-serif text-3xl font-bold text-[var(--color-secondary)]">Temple Staff Management Portal</h1>
          <p className="text-xs text-[var(--text-secondary)]">Manage upcoming events, upload gallery media, update Panchangam overrides, and broadcast announcements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card accentBorder className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">📅 Events Manager</h3>
            <p className="text-xs text-[var(--text-secondary)]">Create, edit, or archive temple festivals and daily seva schedules.</p>
            <button className="px-3 py-1.5 rounded text-xs font-semibold bg-[var(--color-primary)] text-white w-full">+ Add New Event</button>
          </Card>

          <Card accentBorder className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">📸 Gallery Uploader</h3>
            <p className="text-xs text-[var(--text-secondary)]">Upload festival photos to Firebase Storage with automatic WebP resizing.</p>
            <button className="px-3 py-1.5 rounded text-xs font-semibold bg-[var(--color-primary)] text-white w-full">Upload Photos</button>
          </Card>

          <Card accentBorder className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-[var(--color-secondary)]">📢 Announcement Strip</h3>
            <p className="text-xs text-[var(--text-secondary)]">Broadcast urgent notices or darshan timing updates to all devotees.</p>
            <button className="px-3 py-1.5 rounded text-xs font-semibold border border-[var(--border-subtle)] text-[var(--text-primary)] w-full">Edit Announcement</button>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
