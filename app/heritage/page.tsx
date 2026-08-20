'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { TempleMap } from '@/features/heritage/components/TempleMap';
import { WebARTour } from '@/features/heritage/components/WebARTour';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export default function HeritagePage() {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="gold">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <i className="fa-solid fa-monument"></i>
              {isTe ? 'పవిత్ర చరిత్ర' : 'Temple Heritage'}
            </span>
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-secondary)]">
            {isTe ? 'ఆలయ చరిత్ర, శిల్పకళ & AR దర్శనం' : 'History, Architecture & 3D AR Tour'}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {isTe
              ? 'ఆలయ పురాణం, రాజగోపురం నిర్మాణం మరియు ఇంటరాక్టివ్ 3D ఆగ్మెంటెడ్ రియాలిటీ అనుభవం.'
              : 'Explore temple grounds, Dravidian architectural history, and 3D WebAR overlays of sacred structures.'}
          </p>
        </div>
        <TempleMap />
        <WebARTour />
      </main>
      <Footer />
    </div>
  );
}
