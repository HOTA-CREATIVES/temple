'use client';

import React, { createContext, useContext, useState } from 'react';

export interface TempleTenant {
  id: string;
  nameEn: string;
  nameTe: string;
  domain: string;
  themePrimary: string;
}

const DEFAULT_TENANT: TempleTenant = {
  id: 'main-temple',
  nameEn: 'Sri Devalaya Temple',
  nameTe: 'శ్రీ దేవాలయం',
  domain: 'devalaya.org',
  themePrimary: '#b45309',
};

const TenantContext = createContext<{ tenant: TempleTenant }>({ tenant: DEFAULT_TENANT });

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tenant] = useState<TempleTenant>(DEFAULT_TENANT);

  return <TenantContext.Provider value={{ tenant }}>{children}</TenantContext.Provider>;
};

export const useTenant = () => useContext(TenantContext);
