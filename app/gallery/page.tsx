'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="gold">Devotional Archive</Badge>
          <h1 className="font-serif text-3xl font-bold text-[var(--color-secondary)]">Temple Photo & Video Gallery</h1>
          <p className="text-xs text-[var(--text-secondary)]">Explore past Brahmotsavam highlights, procession albums, and sacred decorations.</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} accentBorder className="space-y-3 cursor-pointer group hover:scale-[1.01]">
              <div className="h-48 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center border border-[var(--border-subtle)] relative overflow-hidden">
                <span className="text-4xl">📸</span>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                  Click to View Album
                </div>
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[var(--color-secondary)]">Brahmotsavam Day {i + 1} Highlights</h3>
                <p className="text-xs text-[var(--text-secondary)]">April 2026 • 24 Photos</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
