import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  accentBorder?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  accentBorder = false,
  hoverEffect = true,
}) => {
  return (
    <div
      className={`rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:p-6 text-[var(--text-primary)] shadow-sm ${
        hoverEffect ? 'temple-card-hover' : ''
      } ${
        accentBorder ? 'border-t-2 border-t-[var(--color-accent-gold)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
