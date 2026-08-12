'use client';

import React from 'react';

export type AdminTab = 'panchangam' | 'events';

interface AdminSidebarProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  adminName?: string;
  onLogout: () => void;
}

const navItems: { id: AdminTab; label: string; icon: string; badge?: string }[] = [
  { id: 'panchangam', label: 'Panchangam Bulk CSV', icon: '📜' },
  { id: 'events', label: 'Festival Events (FIFO)', icon: '📅' },
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  setActiveTab,
  adminName = 'Temple Administrator',
  onLogout,
}) => {
  return (
    <aside className="w-full md:w-64 bg-[var(--bg-card)] border-r border-[var(--border-subtle)] flex flex-col justify-between shrink-0">
      <div className="p-4 space-y-6">
        {/* Admin User Header Card */}
        <div className="p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg shrink-0">
            🛕
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-bold text-[var(--text-primary)] truncate">{adminName}</div>
            <div className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Super Admin Active</span>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="space-y-1">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
            Module Navigation
          </div>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[var(--color-primary)] text-white font-semibold shadow-sm'
                    : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span>{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] rounded-md bg-amber-500/20 text-amber-500 font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-[var(--border-subtle)]">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold rounded-xl border border-rose-500/30 text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors"
        >
          <span>🚪</span>
          <span>Sign Out Admin</span>
        </button>
      </div>
    </aside>
  );
};
