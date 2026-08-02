import { LiveStreamPlayer } from '@/features/media/components/LiveStreamPlayer';
import { AudioStotramPlayer } from '@/features/media/components/AudioStotramPlayer';

export default function LivePage() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-10">
      <LiveStreamPlayer />
      <AudioStotramPlayer />
    </main>
  );
}
