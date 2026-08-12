import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Decorative Gopuram Top Divider */}
      <div className="flex justify-center -mt-4">
        <span className="bg-[var(--bg-surface)] px-5 py-1 text-xs font-serif text-[var(--color-accent-gold)] border border-[var(--border-gold)] rounded-full shadow-sm flex items-center gap-2">
          <i className="fa-solid fa-gopuram text-amber-600"></i>
          <span>Sri Venkateshwara & Abaya Anjaneya Devasthanam</span>
          <i className="fa-solid fa-gopuram text-amber-600"></i>
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-gopuram text-amber-600 text-lg"></i>
              <h3 className="font-serif text-xl font-bold text-[var(--color-secondary)]">Devalaya Portal</h3>
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              A sacred digital platform dedicated to preserving temple heritage, daily Panchangam, festival updates, and devotional harmony.
            </p>
          </div>

          {/* Quick Links - Cleaned to boundaries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)]">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home / ప్రధాన పుట</Link></li>
              <li><Link href="/calendar" className="hover:text-[var(--color-primary)] transition-colors">Panchangam & Calendar / పంచాంగం</Link></li>
              <li><Link href="/events" className="hover:text-[var(--color-primary)] transition-colors">Festivals & Events / వేడుకలు</Link></li>
              <li><Link href="/heritage" className="hover:text-[var(--color-primary)] transition-colors">Temple Heritage / చరిత్ర</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--color-primary)] transition-colors">Gallery / చిత్రాలు</Link></li>
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)]">Daily Temple Hours</h4>
            <div className="space-y-1.5 text-xs text-[var(--text-secondary)] font-mono">
              <p>Morning: 6:00 AM – 12:30 PM</p>
              <p>Evening: 4:00 PM – 8:30 PM</p>
            </div>
          </div>

          {/* Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)]">Temple Administrative Office</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Main Temple Road, Sacred Hill,<br />
              Andhra Pradesh, India – 500001
            </p>
            <p className="text-xs text-[var(--text-secondary)] font-mono">Email: info@devalaya-temple.org</p>
          </div>
        </div>

        {/* Copyright & Technical Tag */}
        <div className="pt-6 border-t border-[var(--border-subtle)] text-center text-[11px] text-[var(--text-muted)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Sri Venkateshwara & Abaya Anjaneya Swamy Devasthanam. All rights reserved.</p>
          <p className="font-mono text-[10px] text-[var(--color-accent-gold)]">Sacred Digital Temple Portal</p>
        </div>
      </div>
    </footer>
  );
};
