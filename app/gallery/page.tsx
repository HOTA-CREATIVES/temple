'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

interface Album {
  id: string;
  titleEn: string;
  titleTe: string;
  date: string;
  count: number;
  category: string;
  image: string;
  descriptionEn: string;
  descriptionTe: string;
}

const albums: Album[] = [
  {
    id: '1',
    titleEn: 'Brahmotsavam Day 1 - Ankurarpanam',
    titleTe: 'బ్రహ్మోత్సవాలు రోజూ 1 - అంకురార్పణం',
    date: 'April 2026',
    count: 24,
    category: 'Brahmotsavam',
    image: '/images/hero/sanctum.png',
    descriptionEn: 'Sacred seed sowing ritual and Mahanyasa Purvaka Abhishekam.',
    descriptionTe: 'పవిత్ర ధాన్య రోపణ పూజ మరియు విశేష అభిషేకం.',
  },
  {
    id: '2',
    titleEn: 'Majestic Raja Gopuram Alankaram',
    titleTe: 'రాజగోపురం దివ్య అలంకారం',
    date: 'April 2026',
    count: 18,
    category: 'Decorations',
    image: '/images/hero/gopuram.png',
    descriptionEn: 'Illuminated Raja Gopuram with traditional flower garlands and diyas.',
    descriptionTe: 'పుష్పమాలలు మరియు ప్రదీపాలతో దేదీప్యమానమైన రాజగోపురం.',
  },
  {
    id: '3',
    titleEn: 'Rathotsavam Grand Procession',
    titleTe: 'వైభవ శ్రీ రామ రథోత్సవం',
    date: 'April 2026',
    count: 36,
    category: 'Processions',
    image: '/images/hero/rathotsavam.png',
    descriptionEn: 'Chariot procession carrying the deity around temple streets accompanied by Veda Parayanam.',
    descriptionTe: 'మాడ వీధుల్లో రథోత్సవ ఊరేగింపు.',
  },
  {
    id: '4',
    titleEn: 'Maha Mangala Harati & Chanting',
    titleTe: 'మహా మంగళ హారతి & వేద పారాయణం',
    date: 'March 2026',
    count: 15,
    category: 'Brahmotsavam',
    image: '/images/hero/aarti.png',
    descriptionEn: 'Evening Aarti ceremony with camphor light and traditional nagaswaram.',
    descriptionTe: 'సాయంత్రం కర్పూర హారతి మరియు మంగళ వాయిద్యాలు.',
  },
  {
    id: '5',
    titleEn: 'Garuda Vahana Seva Archive',
    titleTe: 'గరుడ వాహన సేవ విశేషాలు',
    date: 'February 2026',
    count: 29,
    category: 'Processions',
    image: '/images/hero/sanctum.png',
    descriptionEn: 'Golden Garuda Vahanam procession on Pournami night.',
    descriptionTe: 'పౌర్ణమి రాత్రి స్వర్ణ గరుడ వాహన సేవ.',
  },
  {
    id: '6',
    titleEn: 'Flower Festival (Pushpa Yagam)',
    titleTe: 'సుమధుర పుష్పయాగం',
    date: 'January 2026',
    count: 42,
    category: 'Decorations',
    image: '/images/hero/gopuram.png',
    descriptionEn: 'Tons of fragrant jasmine, marigold, and lotus flowers offered to the deity.',
    descriptionTe: 'వివిధ రకాల పవిత్ర పుష్పాలతో స్వామి వారి అలంకరణ.',
  },
];

export default function GalleryPage() {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const filteredAlbums = activeCategory === 'All' ? albums : albums.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="gold">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <i className="fa-solid fa-images"></i>
              {isTe ? 'భక్తి ఛాయాచిత్రాలు' : 'Devotional Archive'}
            </span>
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-secondary)]">
            {isTe ? 'ఆలయ చిత్రాలు & వీడియోల సేకరణ' : 'Temple Photo & Video Gallery'}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {isTe
              ? 'బ్రహ్మోత్సవాలు, రథోత్సవాలు మరియు ఆలయ అలంకారాల పవిత్ర చిత్రపటాలు.'
              : 'Explore past Brahmotsavam highlights, procession albums, and sacred decorations.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[var(--border-subtle)] font-mono text-xs">
          {['All', 'Brahmotsavam', 'Processions', 'Decorations'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[var(--color-primary)] text-white shadow-sm'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-gold)]'
              }`}
            >
              {cat === 'All' ? (isTe ? 'అన్ని ఆల్బమ్‌లు' : 'All Albums') : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album) => (
            <Card
              key={album.id}
              accentBorder
              className="space-y-4 cursor-pointer group hover:border-[var(--color-primary)] transition-all overflow-hidden flex flex-col justify-between"
            >
              <div
                onClick={() => setSelectedAlbum(album)}
                className="space-y-3"
              >
                <div className="h-52 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] relative overflow-hidden">
                  <Image
                    src={album.image}
                    alt={isTe ? album.titleTe : album.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20 flex items-center gap-1">
                    <i className="fa-solid fa-camera text-[10px] text-[var(--color-accent-gold)]"></i>
                    <span>{album.count} Photos</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <Badge variant="gold" className="mb-1 text-[10px]">
                      {album.category}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {isTe ? album.titleTe : album.titleEn}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
                    {isTe ? album.descriptionTe : album.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-semibold text-[var(--color-primary)]">
                <span className="font-mono text-[11px] text-[var(--text-muted)]">📅 {album.date}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {isTe ? 'వీక్షించండి' : 'View Album'}
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Album Preview Modal */}
        {selectedAlbum && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl space-y-6 relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setSelectedAlbum(null)}
                className="absolute top-4 right-4 p-2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-full hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>

              <div className="space-y-1 pr-8">
                <Badge variant="gold">{selectedAlbum.category}</Badge>
                <h3 className="font-serif text-2xl font-bold text-[var(--color-secondary)]">
                  {isTe ? selectedAlbum.titleTe : selectedAlbum.titleEn}
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {isTe ? selectedAlbum.descriptionTe : selectedAlbum.descriptionEn}
                </p>
              </div>

              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-lg">
                <Image
                  src={selectedAlbum.image}
                  alt={isTe ? selectedAlbum.titleTe : selectedAlbum.titleEn}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] font-mono">
                <span>{selectedAlbum.count} High-Resolution Devotional Photos</span>
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="px-5 py-2.5 rounded-xl font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all cursor-pointer shadow-md"
                >
                  {isTe ? 'మూసివేయుము' : 'Close Preview'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
