import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Decorative Gopuram Top Divider */}
      <div className="flex justify-center -mt-3.5">
        <span className="bg-[var(--bg-surface)] px-4 text-xs font-serif text-[var(--color-accent-gold)] border border-[var(--border-gold)] rounded-full shadow-sm flex items-center gap-2">
          <i className="fa-solid fa-gopuram"></i> Sri Devasthanam <i className="fa-solid fa-gopuram"></i>
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="font-serif text-xl font-bold text-[var(--color-secondary)]">Devalaya</h3>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              A modern digital platform preserving temple heritage, offering daily Panchangam details, upcoming festival events, and a devotional archive.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)]">Navigation</h4>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li><Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home / ప్రధాన పుట</Link></li>
              <li><Link href="/events" className="hover:text-[var(--color-primary)] transition-colors">Events / వేడుకలు</Link></li>
              <li><Link href="/calendar" className="hover:text-[var(--color-primary)] transition-colors">Panchangam / పంచాంగం</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--color-primary)] transition-colors">Gallery / ప్రదర్శన</Link></li>
            </ul>
          </div>

          {/* Timings & Sevas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)]">Darshan Hours</h4>
            <div className="space-y-1 text-xs text-[var(--text-secondary)] font-mono">
              <p>Morning: 6:00 AM – 12:30 PM</p>
              <p>Evening: 4:00 PM – 8:30 PM</p>
              <p className="text-[var(--color-primary)] font-sans mt-2 font-semibold">Special Aarti: 7:00 PM Daily</p>
            </div>
          </div>

          {/* Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-gold)]">Temple Office</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Main Temple Road, Sacred Hill,<br />
              Andhra Pradesh, India – 500001
            </p>
            <p className="text-xs text-[var(--text-secondary)] font-mono">Email: info@devalaya-temple.org</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border-subtle)] text-center text-[11px] text-[var(--text-muted)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Devalaya Devasthanam Platform. All rights reserved.</p>
          <p className="font-mono text-[10px]">Built with Next.js & Firebase</p>
        </div>
      </div>
    </footer>
  );
};
