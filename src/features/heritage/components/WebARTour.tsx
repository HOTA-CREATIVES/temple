'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

export const WebARTour: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const [arActive, setArActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-[var(--bg-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xl space-y-5">
      <div className="text-center">
        <span className="text-4xl">👓</span>
        <h3 className="text-2xl font-bold font-serif text-[var(--color-primary)] mt-1">
          {isTe ? 'WebAR 3D ఆగ్మెంటెడ్ రియాలిటీ దర్శనం' : 'WebAR 3D Augmented Reality Tour'}
        </h3>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          {isTe ? 'కెమెరా ద్వారా ఆలయ గోపురం మరియు శిల్ప విశేషాలను 3D లో చూడండి' : 'Point your camera at temple structures for interactive 3D historical overlays'}
        </p>
      </div>

      <div className="relative w-full h-80 bg-slate-900 rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center text-white p-4">
        {arActive ? (
          <div className="space-y-3 text-center animate-pulse">
            <span className="text-5xl">📱</span>
            <p className="text-xs font-mono text-emerald-400">
              [WebXR CAMERA FEED ACTIVE • SCANNING GOPURAM]
            </p>
            <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/50 rounded-full text-xs font-semibold">
              ✨ Rajagopuram Height: 108ft • Dravidian Style Architecture (14th Century)
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-sm text-slate-300">
              {isTe ? 'AR దర్శనం ప్రారంభించడానికి కెమెరా అనుమతిని ఇవ్వండి' : 'Grant camera access to launch Augmented Reality mode'}
            </p>
            <button
              onClick={() => setArActive(true)}
              className="px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all text-sm"
            >
              {isTe ? 'AR కెమెరా ప్రారంభించు' : 'Launch WebAR Experience'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
