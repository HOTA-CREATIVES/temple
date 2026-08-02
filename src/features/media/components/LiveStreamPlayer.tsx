'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

export const LiveStreamPlayer: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-lg max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="relative flex h-3 w-3">
            {isLive && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            )}
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${
                isLive ? 'bg-red-500' : 'bg-gray-400'
              }`}
            ></span>
          </span>
          <h2 className="text-xl font-bold font-serif text-[var(--color-primary)]">
            {isTe ? 'ప్రత్యక్ష దివ్య దర్శనం (లైవ్)' : 'Live Virtual Darshan & Daily Aarti'}
          </h2>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--color-primary-light)] text-[var(--color-primary)] font-bold">
          {isLive ? (isTe ? 'లైవ్ ప్రసారం' : 'LIVE NOW') : (isTe ? 'తదుపరి ఆర్తి 06:00 PM' : 'Next Aarti at 06:00 PM')}
        </span>
      </div>

      {/* Video Container Aspect Ratio 16:9 */}
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/live_stream?channel=UC_EXAMPLE&autoplay=0"
          title="Temple Live Stream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-3">
        <span>{isTe ? 'ప్రతిరోజు ఉదయం 6:00 మరియు సాయంత్రం 6:00 కి లైవ్ ఆర్తి' : 'Daily Live Aarti at 06:00 AM & 06:00 PM IST'}</span>
        <span>{isTe ? '100% HD క్వాలిటీ' : 'HD Quality Stream'}</span>
      </div>
    </div>
  );
};
