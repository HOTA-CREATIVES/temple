'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/features/auth/services/authService';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const result = authService.login(email, password);
      setLoading(false);
      if (result.success) {
        router.push('/admin');
      } else {
        setError(result.error || 'Login failed');
      }
    }, 400);
  };

  const handleFillDemo = () => {
    setEmail('admin@gmail.com');
    setPassword('12345678');
    setError('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent-gold)] to-[var(--color-primary)]" />

        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] mb-2 border border-[var(--border-gold)] text-3xl shadow-sm">
            <i className="fa-solid fa-gopuram"></i>
          </div>
          <h1 className="font-serif text-2xl font-bold text-[var(--color-secondary)]">
            Devalaya Admin Portal
          </h1>
          <p className="text-xs text-[var(--text-secondary)]">
            Temple Management & Executive Control System
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-2">
            <i className="fa-solid fa-triangle-exclamation text-sm"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 font-mono">
              Admin Email ID
            </label>
            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]"></i>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gmail.com"
                className="w-full pl-9 pr-4 py-3 text-xs rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 font-mono">
              Password
            </label>
            <div className="relative">
              <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]"></i>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-4 py-3 text-xs rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 text-xs font-bold rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Admin Dashboard</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Box */}
        <div className="mt-8 p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[var(--text-primary)]">Demo Admin Credentials</div>
            <div className="text-[10px] font-mono text-[var(--text-secondary)]">admin@gmail.com / 12345678</div>
          </div>
          <button
            type="button"
            onClick={handleFillDemo}
            className="px-3 py-1.5 text-[11px] font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl hover:bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30 transition-colors cursor-pointer"
          >
            Auto Fill
          </button>
        </div>
      </div>
    </div>
  );
}
