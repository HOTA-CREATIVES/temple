'use client';

import React, { useEffect, useState } from 'react';
import { Seva } from '../types';
import { fetchSevas } from '../services/sevaService';
import { SevaCard } from './SevaCard';
import { useLanguage } from '@/providers/LanguageProvider';

export const SevaGrid: React.FC = () => {
  const { language } = useLanguage();
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
          <div key={n} className="h-48 bg-[var(--bg-card)] rounded-xl border border-[var(--color-border)]"></div>
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
          language={language}
          onSelect={(selected) => {
            alert(`Selected ${language === 'te' ? selected.titleTe : selected.titleEn}`);
          }}
        />
      ))}
    </div>
  );
};
