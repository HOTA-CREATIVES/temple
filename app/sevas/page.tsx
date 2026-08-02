import { SevaGrid } from '@/features/sevas/components/SevaGrid';

export default function SevasPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mb-3">
          Online Seva & Puja Booking
        </h1>
        <p className="text-[var(--color-text-muted)]">
          Book sacred sevas and ritual offerings online for divine blessings.
        </p>
      </div>
      <SevaGrid />
    </main>
  );
}
