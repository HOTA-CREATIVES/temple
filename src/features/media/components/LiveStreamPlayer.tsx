'use client';

import React, { useState } from 'react';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export const LiveStreamPlayer: React.FC = () => {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';
  const [isLive] = useState(true);

  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-md max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-3">
          <span className="relative flex h-3.5 w-3.5">
            {isLive && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            )}
            <span
              className={`relative inline-flex rounded-full h-3.5 w-3.5 ${
                isLive ? 'bg-rose-500' : 'bg-gray-400'
              }`}
            ></span>
          </span>
          <h2 className="text-xl font-bold font-serif text-[var(--color-secondary)] flex items-center gap-2">
            <i className="fa-solid fa-video text-rose-500 text-lg"></i>
            <span>{isTe ? 'ప్రత్యక్ష దివ్య దర్శనం (లైవ్ ప్రసారం)' : 'Live Virtual Darshan & Daily Aarti'}</span>
          </h2>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold border border-rose-500/20">
          {isLive ? (isTe ? '● ప్రసారం అవుతోంది' : '● LIVE BROADCASTING') : (isTe ? 'తదుపరి ఆర్తి 06:00 PM' : 'Next Aarti at 06:00 PM')}
        </span>
      </div>

      {/* Video Container Aspect Ratio 16:9 */}
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-inner flex items-center justify-center border border-[var(--border-subtle)]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/live_stream?channel=UC_EXAMPLE&autoplay=0"
          title="Temple Live Stream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-3 font-mono">
        <span className="flex items-center gap-1.5">
          <i className="fa-solid fa-clock text-[var(--color-accent-gold)]"></i>
          {isTe ? 'ప్రతిరోజు ఉదయం 6:00 మరియు సాయంత్రం 6:00 కి లైవ్ ఆర్తి' : 'Daily Live Aarti at 06:00 AM & 06:00 PM IST'}
        </span>
        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
          <i className="fa-solid fa-shield-halved"></i>
          {isTe ? '100% HD క్లారిటీ' : '1080p HD Stream'}
        </span>
      </div>
    </div>
  );
};
