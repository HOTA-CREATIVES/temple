import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryHighlightsProps {
  currentLanguage?: 'en' | 'te';
}

// TODO(gallery): placeholder reuses the 4 hero images — replace with dedicated
// gallery/deity photography once real assets are supplied.
const tiles = [
  { image: '/images/hero/gopuram.png', labelEn: 'Sacred Gopuram', labelTe: 'రాజగోపురం', span: 'row-span-2' },
  { image: '/images/hero/aarti.png', labelEn: 'Evening Aarti', labelTe: 'సాయంత్రం హారతి', span: '' },
  { image: '/images/hero/sanctum.png', labelEn: 'Inner Sanctum', labelTe: 'గర్భగుడి', span: '' },
  { image: '/images/hero/rathotsavam.png', labelEn: 'Rathotsavam', labelTe: 'రథోత్సవం', span: 'col-span-2 sm:col-span-1' },
];

export const GalleryHighlights: React.FC<GalleryHighlightsProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-secondary)]">
            {isTe ? 'భక్తి క్షణాలు' : 'Glimpses of Devotion'}
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            {isTe ? 'ఆలయ దృశ్యాలు మరియు వేడుకల నుండి కొన్ని క్షణాలు' : 'A few moments from temple life and celebrations'}
          </p>
        </div>
        <Link href="/gallery" className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1">
          <span>{isTe ? 'పూర్తి గ్యాలరీ' : 'View Full Gallery'}</span>
          <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[140px] sm:auto-rows-[160px]">
        {tiles.map((tile) => (
          <Link
            key={tile.image}
            href="/gallery"
            className={`relative rounded-2xl overflow-hidden group ${tile.span}`}
          >
            <Image
              src={tile.image}
              alt={isTe ? tile.labelTe : tile.labelEn}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <span className="absolute bottom-2 left-3 text-xs font-semibold text-white drop-shadow">
              {isTe ? tile.labelTe : tile.labelEn}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
