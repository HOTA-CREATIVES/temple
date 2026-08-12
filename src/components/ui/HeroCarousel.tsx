'use client';

import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  currentLanguage?: 'en' | 'te';
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';
  const videoId = '_yhBlE3D9cc';
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  const videoSrc = origin
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(
        origin
      )}`
    : `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`;

  return (
    <section className="relative w-full overflow-hidden bg-black text-white" aria-label="Temple Devotional Hero">
      {/* 16:9 Aspect Ratio Video Container */}
      <div className="relative w-full aspect-video max-h-[650px] overflow-hidden pointer-events-none">
        <iframe
          src={videoSrc}
          title="Devotional Temple Video"
          className="absolute inset-0 w-full h-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        {/* Solid Dark Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Foreground Content Overlay - Leftmost Bottom Positioned */}
      <div className="absolute inset-0 z-20 w-full px-4 sm:px-6 lg:px-8 flex items-end pb-6 sm:pb-10 pointer-events-none">
        <div className="flex items-stretch gap-3.5 max-w-3xl">
          {/* Solid Saffron Vertical Accent Line */}
          <div className="w-1.5 rounded-full bg-[var(--color-primary)] shrink-0 shadow-sm" />

          {/* Leftmost Title Block */}
          <div className="text-left space-y-1">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
              {isTe ? 'శ్రీదేవి భూదేవి సమేత పవిత్ర క్షేత్రం' : 'Sacred Devotional Shrine'}
            </span>
            <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-md leading-snug">
              {isTe
                ? 'శ్రీ వేంకటేశ్వర స్వామి & శ్రీ అభయ ఆంజనేయ స్వామి దేవస్థానం'
                : 'Sri Venkateshwara Swamy & Sri Abaya Anjaneya Swamy Temple'}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
