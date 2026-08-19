'use client';

import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  currentLanguage?: 'en' | 'te';
}

interface SlideItem {
  id: string;
  image: string;
  titleEn: string;
  titleTe: string;
  subtitleEn: string;
  subtitleTe: string;
}

const CAROUSEL_SLIDES: SlideItem[] = [
  {
    id: 'sanctum',
    image: '/images/hero/sanctum.png',
    titleEn: 'Sri Venkateshwara Swamy Devalayam Jagannaickpur',
    titleTe: 'శ్రీ వేంకటేశ్వర స్వామి దేవాలయం జగన్నాథపురం',
    subtitleEn: 'Sacred Sanctum & Divine Presence',
    subtitleTe: 'శ్రీదేవి భూదేవి సమేత పవిత్ర క్షేత్రం',
  },
  {
    id: 'gopuram',
    image: '/images/hero/gopuram.png',
    titleEn: 'Majestic Raja Gopuram & Divine Architecture',
    titleTe: 'భవ్య రాజగోపురం & పవిత్ర శిల్పకళ',
    subtitleEn: 'Spiritual Gateway to Peace and Enlightenment',
    subtitleTe: 'ప్రశాంతతకు మరియు ఆధ్యాత్మికతకు రాజమార్గం',
  },
  {
    id: 'rathotsavam',
    image: '/images/hero/rathotsavam.png',
    titleEn: 'Grand Chariot Procession & Utsavams',
    titleTe: 'వైభవ రథోత్సవం & పవిత్ర ఉత్సవాలు',
    subtitleEn: 'Celebrating Ancient Traditions and Devotional Festivals',
    subtitleTe: 'సనాతన సాంప్రదాయాలు & భక్తి శ్రద్ధలతో ఉత్సవాలు',
  },
  {
    id: 'aarti',
    image: '/images/hero/aarti.png',
    titleEn: 'Divine Maha Mangala Harati & Daily Sevas',
    titleTe: 'దివ్య మహా మంగళ హారతి & నిత్య సేవలు',
    subtitleEn: 'Experience Sacred Chants and Vedic Blessings',
    subtitleTe: 'వేద మంత్రోచ్ఛారణలతో నిత్య పూజలు',
  },
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black text-white group select-none"
      aria-label="Temple Devotional Hero Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full aspect-video max-h-[600px] overflow-hidden">
        {CAROUSEL_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
              } transition-transform duration-1000`}
            >
              <img
                src={slide.image}
                alt={isTe ? slide.titleTe : slide.titleEn}
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay Gradients for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-amber-600/80 text-white backdrop-blur-md border border-amber-500/30 transition-all cursor-pointer opacity-80 hover:opacity-100 focus:outline-none"
        aria-label="Previous Slide"
      >
        <i className="fa-solid fa-chevron-left text-sm sm:text-base"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-amber-600/80 text-white backdrop-blur-md border border-amber-500/30 transition-all cursor-pointer opacity-80 hover:opacity-100 focus:outline-none"
        aria-label="Next Slide"
      >
        <i className="fa-solid fa-chevron-right text-sm sm:text-base"></i>
      </button>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-20 w-full px-4 sm:px-8 lg:px-12 flex items-end pb-8 sm:pb-12 pointer-events-none">
        <div className="flex items-stretch gap-3.5 max-w-3xl">
          {/* Accent Line */}
          <div className="w-1.5 rounded-full bg-[var(--color-primary)] shrink-0 shadow-md" />

          {/* Title and Subtitle Block */}
          <div className="text-left space-y-1 sm:space-y-2">
            <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-300 font-bold px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-amber-500/20">
              {isTe
                ? CAROUSEL_SLIDES[currentIndex].subtitleTe
                : CAROUSEL_SLIDES[currentIndex].subtitleEn}
            </span>
            <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-lg leading-snug">
              {isTe
                ? CAROUSEL_SLIDES[currentIndex].titleTe
                : CAROUSEL_SLIDES[currentIndex].titleEn}
            </h1>
          </div>
        </div>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-3 right-4 sm:right-8 z-30 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
        {CAROUSEL_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? 'w-6 bg-[var(--color-primary)] shadow-sm'
                : 'w-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

