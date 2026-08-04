'use client';

import React from 'react';
import { SevaBooking } from '../types';

interface DigitalPassProps {
  booking: SevaBooking;
  language: 'en' | 'te';
}

export const DigitalPass: React.FC<DigitalPassProps> = ({ booking, language }) => {
  const isTe = language === 'te';

  return (
    <div className="max-w-md mx-auto bg-[var(--bg-card)] border-2 border-[var(--color-accent-gold)] rounded-2xl p-6 shadow-xl text-center space-y-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent-gold)] to-[var(--color-primary)]"></div>

      <div className="inline-block px-3 py-1 bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-bold rounded-full uppercase tracking-wider">
        {isTe ? 'అధికారిక సేవా పాస్' : 'Official Seva Pass'}
      </div>

      <h3 className="text-lg font-bold font-serif text-[var(--color-primary)] leading-snug">
        {isTe 
          ? 'శ్రీ శ్రీదేవి భూదేవి సమేత శ్రీ వేంకటేశ్వర స్వామి మరియు శ్రీ అభయ ఆంజనేయ స్వామి ఆలయం' 
          : 'SRI SRIDEVI BHUDEVI SAMETHI SRI VENKATESHWARA SWAMY & SRI ABAYA ANJANEY SWAMY TEMPLE'}
      </h3>

      <div className="py-3 border-y border-[var(--color-border)] space-y-2 text-left text-sm">
        <div className="flex justify-between">
          <span className="text-[var(--color-text-muted)]">{isTe ? 'బుకింగ్ ఐడీ:' : 'Booking ID:'}</span>
          <span className="font-mono font-bold text-[var(--color-text-main)]">{booking.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--color-text-muted)]">{isTe ? 'భక్తుని పేరు:' : 'Devotee:'}</span>
          <span className="font-semibold text-[var(--color-text-main)]">{booking.sankalpam.devoteeName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--color-text-muted)]">{isTe ? 'గోత్రం & నక్షత్రం:' : 'Gothram & Nakshatram:'}</span>
          <span className="font-semibold text-[var(--color-text-main)]">
            {booking.sankalpam.gothram} ({booking.sankalpam.nakshatram})
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--color-text-muted)]">{isTe ? 'తేదీ:' : 'Date:'}</span>
          <span className="font-mono font-semibold text-[var(--color-text-main)]">{booking.date}</span>
        </div>
      </div>

      {/* QR Code Placeholder */}
      <div className="py-2 flex flex-col items-center justify-center space-y-2">
        <div className="w-32 h-32 bg-white p-2 border border-[var(--color-border)] rounded-lg flex items-center justify-center shadow-inner">
          <div className="w-full h-full bg-slate-900 rounded flex items-center justify-center text-white text-xs font-mono">
            [QR CODE PASS]
          </div>
        </div>
        <span className="text-xs text-[var(--color-text-muted)]">
          {isTe ? 'ఆలయం ప్రవేశం వద్ద ఈ QR చూపండి' : 'Show this QR code at temple entry'}
        </span>
      </div>

      <button
        onClick={() => window.print()}
        className="w-full py-2.5 font-semibold text-sm rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-colors"
      >
        {isTe ? 'పాస్ డౌన్‌లోడ్ / ప్రింట్' : 'Download / Print Pass'}
      </button>
    </div>
  );
};
