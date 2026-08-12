import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { TempleMap } from '@/features/heritage/components/TempleMap';
import { WebARTour } from '@/features/heritage/components/WebARTour';

export default function HeritagePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="border-b border-[var(--border-subtle)] pb-4 space-y-2">
          <Badge variant="gold">Temple Heritage</Badge>
          <h1 className="font-serif text-3xl font-bold text-[var(--color-secondary)]">History, Architecture & AR Tour</h1>
          <p className="text-xs text-[var(--text-secondary)]">Explore the temple grounds and view 3D AR overlays of sacred structures.</p>
        </div>
        <TempleMap />
        <WebARTour />
      </main>
      <Footer />
    </div>
  );
}
