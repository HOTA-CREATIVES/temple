'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

interface CoreServicesGridProps {
  currentLanguage?: 'en' | 'te';
}

const services = [
  {
    icon: 'fa-om',
    labelEn: 'Panchangam',
    labelTe: 'పంచాంగం',
    titleEn: 'Daily Vedic Panchangam',
    titleTe: 'దినచర్య వేద పంచాంగం',
    descEn: 'Authoritative Tithi, Nakshatram, Rahukalam, and daily auspicious timings.',
    descTe: 'తిథి, నక్షత్రం, రాహుకాలం మరియు శుభ సమయాలు.',
    href: '/calendar',
    variant: 'emerald' as const,
  },
  {
    icon: 'fa-hands-praying',
    labelEn: 'Sevas & Booking',
    labelTe: 'పూజలు & సేవలు',
    titleEn: 'Devotional Puja Sevas',
    titleTe: 'నిత్య & విశేష సేవలు',
    descEn: 'Select time slots, submit Sankalpam details, and generate digital passes.',
    descTe: 'సేవా సమయాలు, సంకల్ప వివరాలు మరియు డిజిటల్ పాస్.',
    href: '/sevas',
    variant: 'gold' as const,
  },
  {
    icon: 'fa-calendar-days',
    labelEn: 'Festivals',
    labelTe: 'ఉత్సవాలు',
    titleEn: 'Upcoming Events & Processions',
    titleTe: 'రాబోయే ఉత్సవాలు & ఊరేగింపులు',
    descEn: 'Stay informed about temple Brahmotsavams, pujas, and processions.',
    descTe: 'ఆలయ ఉత్సవాలు మరియు ప్రత్యేక కార్యక్రమాల సమాచారం.',
    href: '/events',
    variant: 'primary' as const,
  },
  {
    icon: 'fa-video',
    labelEn: 'Live Darshan',
    labelTe: 'లైవ్ దర్శనం',
    titleEn: 'Live Video & Audio Stotrams',
    titleTe: 'లైవ్ దర్శనం & స్తోత్ర పారాయణం',
    descEn: 'Stream continuous live sanctum video feeds and sacred chanting playlists.',
    descTe: 'గర్భగుడి ప్రత్యక్ష ప్రసారం మరియు వేద స్తోత్రాల పారాయణం.',
    href: '/live',
    variant: 'secondary' as const,
  },
];

export const CoreServicesGrid: React.FC<CoreServicesGridProps> = ({ currentLanguage: propLang }) => {
  const context = useLanguageTheme();
  const currentLanguage = propLang || context.currentLanguage;
  const isTe = currentLanguage === 'te';

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <Badge variant="gold">{isTe ? 'దివ్య క్షేత్ర సేవలు' : 'Sacred Digital Services'}</Badge>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-secondary)]">
          {isTe ? 'మా ఆలయ డిజిటల్ సేవలు' : 'Temple Platform Services'}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
          {isTe
            ? 'ఆలయ పంచాంగం, సేవలు, ఉత్సవాలు, గ్యాలరీ మరియు ప్రత్యక్ష దర్శనం వివరాలు'
            : 'Access live Panchangam, seva bookings, festival schedules, and live stream'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link key={service.href} href={service.href} className="group">
            <Card accentBorder className="h-full flex flex-col justify-between transition-all duration-300 group-hover:border-[var(--color-primary)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-xl border border-[var(--color-primary)]/20 group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <Badge variant={service.variant}>
                    {isTe ? service.labelTe : service.labelEn}
                  </Badge>
                </div>
                <h3 className="font-serif text-base font-bold text-[var(--text-primary)] leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">
                  {isTe ? service.titleTe : service.titleEn}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {isTe ? service.descTe : service.descEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-semibold text-[var(--color-primary)]">
                <span>{isTe ? 'వివరాలు చూడండి' : 'Explore Service'}</span>
                <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
