import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SevaGrid } from '@/features/sevas/components/SevaGrid';

export default function SevasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mb-3">
            Daily Temple Sevas & Ritual Timings
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Explore daily, weekly, and periodic sacred sevas performed at the temple.
          </p>
        </div>
        <SevaGrid />
      </main>
      <Footer />
    </div>
  );
}
