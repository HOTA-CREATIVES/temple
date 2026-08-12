import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

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
    descEn: 'Tithi, Nakshatram, Rahukalam, and daily auspicious timings.',
    descTe: 'తిథి, నక్షత్రం, రాహుకాలం మరియు శుభ సమయాలు.',
    href: '/calendar',
  },
  {
    icon: 'fa-calendar-days',
    labelEn: 'Festivals',
    labelTe: 'వేడుకలు',
    titleEn: 'Upcoming Events & Processions',
    titleTe: 'రాబోయే ఉత్సవాలు & ఊరేగింపులు',
    descEn: 'Stay informed about temple festivals, pujas, and celebrations.',
    descTe: 'ఆలయ ఉత్సవాలు మరియు ప్రత్యేక కార్యక్రమాల సమాచారం.',
    href: '/events',
  },
  {
    icon: 'fa-images',
    labelEn: 'Gallery',
    labelTe: 'గ్యాలరీ',
    titleEn: 'Devotional Photo & Video Archive',
    titleTe: 'భక్తిపూర్వక చిత్రాలు & వీడియోల సేకరణ',
    descEn: 'Browse past festival celebrations, decorations, and processions.',
    descTe: 'గత ఉత్సవాలు మరియు ఆలయ విశేష చిత్రాలను వీక్షించండి.',
    href: '/gallery',
  },
  {
    icon: 'fa-monument',
    labelEn: 'Heritage',
    labelTe: 'చరిత్ర',
    titleEn: 'Temple Heritage & Puranam',
    titleTe: 'ఆలయ చరిత్ర & స్థల పురాణం',
    descEn: 'Explore rich temple history, architecture, and sacred stories.',
    descTe: 'ఆలయ పవిత్ర చరిత్ర, ప్రాశస్త్యం మరియు నిర్మాణం తెలుసుకోండి.',
    href: '/heritage',
  },
];

export const CoreServicesGrid: React.FC<CoreServicesGridProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="font-serif text-2xl font-bold text-[var(--color-secondary)]">
          {isTe ? 'మా డిజిటల్ సేవలు' : 'Temple Platform Overview'}
        </h2>
        <p className="text-xs text-[var(--text-secondary)]">
          {isTe ? 'ఆలయ పంచాంగం, ఉత్సవాలు, గ్యాలరీ మరియు చరిత్ర వివరాలు' : 'Explore Panchangam, events schedule, heritage, and gallery'}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link key={service.href} href={service.href}>
            <Card accentBorder className="h-full">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-[var(--color-primary)] mb-3">
                <i className={`fa-solid ${service.icon} text-lg`}></i>
              </div>
              <Badge variant="gold" className="mb-2">
                {isTe ? service.labelTe : service.labelEn}
              </Badge>
              <h3 className="font-serif text-sm font-bold text-[var(--text-primary)] leading-snug mb-1">
                {isTe ? service.titleTe : service.titleEn}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {isTe ? service.descTe : service.descEn}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
