import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  accentBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  accentBorder = false,
}) => {
  return (
    <div
      className={`rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 text-[var(--text-primary)] shadow-sm transition-all hover:shadow-md ${
        accentBorder ? 'border-t-2 border-t-[var(--color-accent-gold)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
