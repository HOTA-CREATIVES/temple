'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export const Footer: React.FC = () => {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Decorative Gopuram Top Divider */}
      <div className="flex justify-center -mt-4">
        <span className="bg-[var(--bg-surface)] px-5 py-1.5 text-xs font-serif text-[var(--color-accent-gold)] border border-[var(--border-gold)] rounded-full shadow-sm flex items-center gap-2">
          <i className="fa-solid fa-gopuram text-[var(--color-primary)]"></i>
          <span>{isTe ? 'శ్రీ వేంకటేశ్వర & అభయ ఆంజనేయ స్వామి దేవస్థానం' : 'Sri Venkateshwara & Abaya Anjaneya Devasthanam'}</span>
          <i className="fa-solid fa-gopuram text-[var(--color-primary)]"></i>
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-gopuram text-[var(--color-primary)] text-xl"></i>
              <h3 className="font-serif text-xl font-bold text-[var(--color-secondary)]">
                {isTe ? 'దేవాలయ పోర్టల్' : 'Devalaya Portal'}
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              {isTe
                ? 'ఆలయ పవిత్ర వారసత్వం, నిత్య పంచాంగం, ఉత్సవాలు మరియు భక్తి సేవల కోసం ఉద్దేశించిన పోర్టల్.'
                : 'A sacred digital platform dedicated to preserving temple heritage, daily Panchangam, festival updates, and devotional harmony.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)] font-mono">
              {isTe ? 'త్వరిత లింకులు' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><Link href="/" className="hover:text-[var(--color-primary)] transition-colors">{isTe ? 'ప్రధాన పుట' : 'Home'}</Link></li>
              <li><Link href="/calendar" className="hover:text-[var(--color-primary)] transition-colors">{isTe ? 'పంచాంగం & క్యాలెండర్' : 'Panchangam & Calendar'}</Link></li>
              <li><Link href="/sevas" className="hover:text-[var(--color-primary)] transition-colors">{isTe ? 'పూజలు & సేవలు' : 'Sevas & Booking'}</Link></li>
              <li><Link href="/events" className="hover:text-[var(--color-primary)] transition-colors">{isTe ? 'ఉత్సవాలు & వేడుకలు' : 'Festivals & Events'}</Link></li>
              <li><Link href="/live" className="hover:text-[var(--color-primary)] transition-colors">{isTe ? 'లైవ్ దర్శనం' : 'Live Darshan'}</Link></li>
              <li><Link href="/heritage" className="hover:text-[var(--color-primary)] transition-colors">{isTe ? 'ఆలయ చరిత్ర' : 'Temple Heritage'}</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--color-primary)] transition-colors">{isTe ? 'ఛాయాచిత్రాలు' : 'Gallery'}</Link></li>
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)] font-mono">
              {isTe ? 'ఆలయ వేళలు' : 'Daily Temple Hours'}
            </h4>
            <div className="space-y-2 text-xs text-[var(--text-secondary)]">
              <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                <span className="font-semibold text-[var(--text-primary)] block">🌅 {isTe ? 'ఉదయం సమయం' : 'Morning Darshan'}</span>
                <span className="font-mono text-[11px] text-[var(--color-primary)]">6:00 AM – 12:30 PM</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                <span className="font-semibold text-[var(--text-primary)] block">🌆 {isTe ? 'సాయంత్రం సమయం' : 'Evening Darshan'}</span>
                <span className="font-mono text-[11px] text-[var(--color-primary)]">4:00 PM – 8:30 PM</span>
              </div>
            </div>
          </div>

          {/* Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)] font-mono">
              {isTe ? 'ఆలయ కార్యాలయం' : 'Temple Administrative Office'}
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Main Temple Road, Jagannaickpur,<br />
              Kakinada District, Andhra Pradesh – 533002
            </p>
            <p className="text-xs text-[var(--text-secondary)] font-mono flex items-center gap-1.5">
              <i className="fa-solid fa-envelope text-[var(--color-accent-gold)]"></i>
              info@devalaya-temple.org
            </p>
            <p className="text-xs text-[var(--text-secondary)] font-mono flex items-center gap-1.5">
              <i className="fa-solid fa-phone text-[var(--color-accent-gold)]"></i>
              +91 (0884) 234-5678
            </p>
          </div>
        </div>

        {/* Copyright & Technical Tag */}
        <div className="pt-6 border-t border-[var(--border-subtle)] text-center text-[11px] text-[var(--text-muted)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Sri Venkateshwara & Abaya Anjaneya Swamy Devasthanam. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin/login" className="font-mono text-[10px] text-[var(--color-accent-gold)] hover:underline flex items-center gap-1">
              <i className="fa-solid fa-lock text-[9px]"></i>
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
