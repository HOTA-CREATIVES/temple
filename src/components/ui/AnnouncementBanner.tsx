import React from 'react';

export interface AnnouncementBannerProps {
  message: string;
  linkText?: string;
  linkHref?: string;
  onDismiss?: () => void;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  message,
  linkText,
  linkHref,
  onDismiss,
}) => {
  return (
    <div className="w-full bg-[var(--color-primary)] text-white px-4 py-2 text-xs sm:text-sm font-medium flex items-center justify-between shadow-sm">
      <div className="mx-auto flex items-center gap-2 text-center">
        <span>🪔</span>
        <span>{message}</span>
        {linkText && linkHref && (
          <a
            href={linkHref}
            className="underline font-bold hover:text-amber-200 transition-colors ml-1"
          >
            {linkText} →
          </a>
        )}
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-white/80 hover:text-white transition-opacity p-1"
          aria-label="Dismiss banner"
        >
          ✕
        </button>
      )}
    </div>
  );
};
