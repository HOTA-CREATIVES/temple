'use client';

import React from 'react';

interface HeroCarouselProps {
  currentLanguage?: 'en' | 'te';
}

const BG_VIDEO_URL =
  'https://res.cloudinary.com/diiyy6bar/video/upload/v1786551181/Sri_Venkatesha_Stotram_-_Invoking_the_Lord_s_Mercy_-_ISKCON_Bangalore_Music_1080p_h264_youtube_lpz53p.mp4';

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ currentLanguage = 'en' }) => {
  const isTe = currentLanguage === 'te';
  const [isMuted, setIsMuted] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {
          // Autoplay fallback handling if browser restricts unmuted playback without interaction
        });
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black text-white" aria-label="Temple Devotional Hero">
      {/* Background Video Container */}
      <div className="relative w-full aspect-video max-h-[650px] overflow-hidden">
        <video
          ref={videoRef}
          src={BG_VIDEO_URL}
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for optimal title readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none" />
      </div>

      {/* Audio Control Toggle Button (Top Right) */}
      <div className="absolute top-4 right-4 z-30">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-amber-300 text-xs font-semibold backdrop-blur-sm border border-amber-500/30 transition-all shadow-lg cursor-pointer"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Devotional Audio' : 'Mute Devotional Audio'}
        >
          <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-red-400' : 'fa-volume-high text-emerald-400'}`}></i>
          <span>{isMuted ? (isTe ? 'శబ్దం ఆన్ చేయండి' : 'Play Stotram Audio') : (isTe ? 'శబ్దం నిశ్శబ్దం' : 'Mute Audio')}</span>
        </button>
      </div>

      {/* Hero Foreground Content Overlay */}
      <div className="absolute inset-0 z-20 w-full px-4 sm:px-6 lg:px-8 flex items-end pb-6 sm:pb-10 pointer-events-none">
        <div className="flex items-stretch gap-3.5 max-w-3xl">
          {/* Solid Saffron Vertical Accent Line */}
          <div className="w-1.5 rounded-full bg-[var(--color-primary)] shrink-0 shadow-sm" />

          {/* Title Block */}
          <div className="text-left space-y-1">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
              {isTe ? 'శ్రీదేవి భూదేవి సమేత పవిత్ర క్షేత్రం' : 'Sacred Devotional Shrine'}
            </span>
            <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-md leading-snug">
              {isTe
                ? 'శ్రీ వేంకటేశ్వర స్వామి & శ్రీ అభయ ఆంజనేయ స్వామి దేవస్థానం'
                : 'Sri Venkateshwara Swamy & Sri Abaya Anjaneya Swamy Temple'}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
