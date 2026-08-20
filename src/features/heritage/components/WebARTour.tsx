'use client';

import React, { useState } from 'react';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export const WebARTour: React.FC = () => {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  const [arActive, setArActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center mx-auto text-xl border border-[var(--border-gold)]">
          <i className="fa-solid fa-glasses"></i>
        </div>
        <h3 className="text-2xl font-bold font-serif text-[var(--color-secondary)]">
          {isTe ? 'WebAR 3D ఆగ్మెంటెడ్ రియాలిటీ దర్శనం' : 'WebAR 3D Augmented Reality Tour'}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
          {isTe ? 'కెమెరా ద్వారా ఆలయ రాజగోపురం మరియు శిల్ప విశేషాలను 3D లో వీక్షించండి' : 'Point your camera at temple structures for interactive 3D historical architectural overlays'}
        </p>
      </div>

      <div className="relative w-full h-80 bg-slate-950 rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center text-white p-6 border border-[var(--border-subtle)]">
        {arActive ? (
          <div className="space-y-4 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-2xl border border-amber-500/40 animate-pulse">
              <i className="fa-solid fa-camera-rotate"></i>
            </div>
            <p className="text-xs font-mono text-emerald-400 font-bold">
              [WebXR CAMERA FEED ACTIVE • SCANNING RAJAGOPURAM STRUCTURE]
            </p>
            <div className="inline-block px-4 py-2 bg-amber-500/20 text-amber-200 border border-amber-500/40 rounded-xl text-xs font-serif leading-relaxed max-w-md">
              ✨ Rajagopuram Height: 108ft • Dravidian Style Architecture (Established 1968)
            </div>
            <button
              onClick={() => setArActive(false)}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition-colors cursor-pointer"
            >
              Stop AR Tour
            </button>
          </div>
        ) : (
          <div className="text-center space-y-4 max-w-md">
            <p className="text-xs sm:text-sm text-slate-300">
              {isTe ? 'AR దర్శనం ప్రారంభించడానికి కెమెరా అనుమతిని ఇవ్వండి' : 'Grant camera access to launch 3D Augmented Reality mode directly in browser.'}
            </p>
            <button
              onClick={() => setArActive(true)}
              className="px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl shadow-lg hover:bg-[var(--color-primary-hover)] transition-all text-xs cursor-pointer flex items-center justify-center gap-2 mx-auto"
            >
              <i className="fa-solid fa-[#1F6F5C] fa-vr-cardboard text-sm"></i>
              <span>{isTe ? 'AR కెమెరా ప్రారంభించు' : 'Launch WebAR Experience'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
