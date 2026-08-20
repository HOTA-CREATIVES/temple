'use client';

import React, { useEffect, useState } from 'react';
import { Seva } from '../types';
import { fetchSevas } from '../services/sevaService';
import { SevaCard } from './SevaCard';
import { useLanguageTheme } from '@/providers/LanguageThemeContext';

export const SevaGrid: React.FC = () => {
  const { currentLanguage } = useLanguageTheme();
  const [sevas, setSevas] = useState<Seva[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSevas().then((data) => {
      setSevas(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-64 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)]"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sevas.map((seva) => (
        <SevaCard
          key={seva.id}
          seva={seva}
          language={currentLanguage}
          onSelect={(selected) => {
            alert(`Selected ${currentLanguage === 'te' ? selected.titleTe : selected.titleEn}`);
          }}
        />
      ))}
    </div>
  );
};
