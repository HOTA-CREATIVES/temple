'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { SevaCard } from '@/features/sevas/components/SevaCard';
import { SlotPicker } from '@/features/sevas/components/SlotPicker';
import { SankalpamForm } from '@/features/sevas/components/SankalpamForm';
import { DigitalPass } from '@/features/sevas/components/DigitalPass';
import { Seva, SevaSlot, SankalpamDetails, SevaBooking } from '@/features/sevas/types';
import { fetchSevas } from '@/features/sevas/services/sevaService';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export default function SevasPage() {
  const { currentLanguage } = useLanguageTheme();
  const isTe = currentLanguage === 'te';

  const [sevas, setSevas] = useState<Seva[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSeva, setSelectedSeva] = useState<Seva | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<SevaSlot | null>(null);
  const [activeBooking, setActiveBooking] = useState<SevaBooking | null>(null);

  useEffect(() => {
    fetchSevas().then((data) => {
      setSevas(data);
      setLoading(false);
    });
  }, []);

  const handleBookingSubmit = (sankalpam: SankalpamDetails) => {
    if (!selectedSeva || !selectedSlot) return;

    const booking: SevaBooking = {
      id: `SEVA-${Date.now().toString().slice(-6)}`,
      sevaId: selectedSeva.id,
      slotId: selectedSlot.id,
      date: selectedSlot.date,
      sankalpam,
      amount: selectedSeva.price,
      paymentId: `PAY-${Date.now().toString().slice(-6)}`,
      paymentStatus: 'completed',
      bookingStatus: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    setActiveBooking(booking);
  };

  const handleReset = () => {
    setSelectedSeva(null);
    setSelectedSlot(null);
    setActiveBooking(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2 text-center sm:text-left">
          <Badge variant="gold">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <i className="fa-solid fa-hands-praying"></i>
              {isTe ? 'ఆలయ నిత్య సేవలు' : 'Devotional Puja Sevas'}
            </span>
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-secondary)]">
            {isTe ? 'ఆలయ నిత్య సేవలు & సంకల్పం నమోదు' : 'Daily Temple Sevas & Ritual Booking'}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
            {isTe
              ? 'శ్రీ వేంకటేశ్వర స్వామి వారి అభిషేకం, అర్చన, మరియు కళ్యాణోత్సవం సేవల సమయాలు ఎంచుకొని డిజిటల్ పాస్ పొందుము.'
              : 'Explore daily, weekly, and periodic sacred sevas performed at the temple. Book your slots online.'}
          </p>
        </div>

        {activeBooking ? (
          <div className="py-6">
            <DigitalPass booking={activeBooking} onReset={handleReset} />
          </div>
        ) : selectedSeva ? (
          <div className="space-y-6 max-w-2xl mx-auto">
            <button
              onClick={() => {
                setSelectedSeva(null);
                setSelectedSlot(null);
              }}
              className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-arrow-left text-[10px]"></i>
              <span>{isTe ? 'సేవలు జాబితాకి తిరిగి వెళ్ళు' : 'Back to Sevas Grid'}</span>
            </button>

            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-mono font-bold text-[var(--color-accent-gold)] uppercase">Selected Seva</span>
              <h3 className="font-serif text-xl font-bold text-[var(--color-secondary)]">
                {isTe ? selectedSeva.titleTe : selectedSeva.titleEn}
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                {isTe ? selectedSeva.descriptionTe : selectedSeva.descriptionEn}
              </p>
              <div className="pt-2 font-mono text-sm font-bold text-[var(--color-primary)]">
                Amount: ₹{selectedSeva.price}
              </div>
            </div>

            <SlotPicker seva={selectedSeva} onSlotSelect={(slot) => setSelectedSlot(slot)} />

            {selectedSlot && (
              <SankalpamForm onSubmit={handleBookingSubmit} />
            )}
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)]"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sevas.map((seva) => (
              <SevaCard
                key={seva.id}
                seva={seva}
                onSelect={(s) => setSelectedSeva(s)}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
