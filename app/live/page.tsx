'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { LiveStreamPlayer } from '@/features/media/components/LiveStreamPlayer';
import { AudioStotramPlayer } from '@/features/media/components/AudioStotramPlayer';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export default function LivePage() {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="emerald">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              {isTe ? 'లైవ్ బ్రాడ్‌కాస్ట్' : 'Continuous Live Stream'}
            </span>
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-secondary)]">
            {isTe ? 'ప్రత్యక్ష దివ్య దర్శనం & వేద స్తోత్రాలు' : 'Live Sanctum Darshan & Vedic Chanting'}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {isTe
              ? 'శ్రీదేవి భూదేవి సమేత శ్రీ వేంకటేశ్వర స్వామి వారి ప్రత్యక్ష దర్శనం మరియు నిత్య స్తోత్ర పారాయణం'
              : 'Experience divine presence from anywhere in the world with HD video streaming and synced stotram chanting.'}
          </p>
        </div>

        <LiveStreamPlayer />
        <AudioStotramPlayer />
      </main>
      <Footer />
    </div>
  );
}
