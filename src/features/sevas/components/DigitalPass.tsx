'use client';

import React from 'react';
import { SevaBooking } from '../types';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

interface DigitalPassProps {
  booking: SevaBooking;
  language?: 'en' | 'te';
  onReset?: () => void;
}

export const DigitalPass: React.FC<DigitalPassProps> = ({ booking, language: propLang, onReset }) => {
  const context = useLanguageTheme();
  const language = propLang || context.currentLanguage;
  const isTe = language === 'te';

  return (
    <div className="max-w-md mx-auto bg-[var(--bg-surface)] border-2 border-[var(--color-accent-gold)] rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-5 relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-2.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent-gold)] to-[var(--color-primary)]"></div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[11px] font-bold rounded-full border border-[var(--color-primary)]/20 uppercase tracking-wider font-mono">
        <i className="fa-solid fa-[#1F6F5C] fa-certificate"></i>
        <span>{isTe ? 'అధికారిక సేవా డిజిటల్ పాస్' : 'Official Sacred Seva Pass'}</span>
      </div>

      <h3 className="text-base font-bold font-serif text-[var(--color-secondary)] leading-snug">
        {isTe 
          ? 'శ్రీ శ్రీదేవి భూదేవి సమేత శ్రీ వేంకటేశ్వర స్వామి ఆలయం' 
          : 'Sri Venkateshwara & Abaya Anjaneya Devasthanam'}
      </h3>

      <div className="py-4 border-y border-[var(--border-subtle)] space-y-2.5 text-left text-xs">
        <div className="flex justify-between">
          <span className="text-[var(--text-secondary)]">{isTe ? 'పాస్ ఐడీ:' : 'Booking ID:'}</span>
          <span className="font-mono font-bold text-[var(--color-primary)]">{booking.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-secondary)]">{isTe ? 'భక్తుని పేరు:' : 'Devotee Name:'}</span>
          <span className="font-semibold text-[var(--text-primary)]">{booking.sankalpam.devoteeName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-secondary)]">{isTe ? 'గోత్రం & నక్షత్రం:' : 'Gothram & Nakshatram:'}</span>
          <span className="font-semibold text-[var(--text-primary)] font-serif">
            {booking.sankalpam.gothram} ({booking.sankalpam.nakshatram})
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-secondary)]">{isTe ? 'సేవా తేదీ:' : 'Seva Date:'}</span>
          <span className="font-mono font-semibold text-[var(--text-primary)]">{booking.date}</span>
        </div>
      </div>

      {/* Styled QR Code Box */}
      <div className="py-2 flex flex-col items-center justify-center space-y-2">
        <div className="w-36 h-36 bg-white p-3 border-2 border-[var(--border-gold)] rounded-2xl flex items-center justify-center shadow-md">
          <div className="w-full h-full bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white text-[10px] font-mono p-2 text-center space-y-1">
            <i className="fa-solid fa-qrcode text-3xl text-amber-400"></i>
            <span className="font-bold tracking-widest">{booking.id.slice(0, 10)}</span>
          </div>
        </div>
        <span className="text-[11px] text-[var(--text-secondary)] font-serif italic">
          {isTe ? 'ఆలయం ప్రాంగణంలో ఈ QR కోడ్ చూపించండి' : 'Present this QR code at temple entrance counter'}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          onClick={() => window.print()}
          className="flex-1 py-3 font-bold text-xs rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
        >
          <i className="fa-solid fa-print"></i>
          <span>{isTe ? 'ప్రింట్ / డౌన్‌లోడ్' : 'Print Pass'}</span>
        </button>

        {onReset && (
          <button
            onClick={onReset}
            className="px-4 py-3 font-semibold text-xs rounded-xl border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
          >
            {isTe ? 'కొత్త బుకింగ్' : 'Book Another'}
          </button>
        )}
      </div>
    </div>
  );
};
