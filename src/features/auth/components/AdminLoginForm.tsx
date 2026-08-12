'use client';

import React, { useState } from 'react';
import { authService, AdminUser } from '../services/authService';

interface AdminLoginFormProps {
  onSuccess: (user: AdminUser) => void;
}

export const AdminLoginForm: React.FC<AdminLoginFormProps> = ({ onSuccess }) => {
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
      if (result.success && result.user) {
        onSuccess(result.user);
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
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-8 shadow-xl relative overflow-hidden">
        {/* Top Decorative Banner */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-[var(--color-primary)] to-amber-600" />

        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 text-[var(--color-primary)] mb-2 border border-amber-500/20 text-3xl">
            🛕
          </div>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-primary)]">
            Admin Portal Login
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Devalaya Executive & Management Control System
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
              Admin Email ID
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              className="w-full px-4 py-3 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 text-xs rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 text-xs font-bold rounded-xl bg-[var(--color-primary)] text-white hover:bg-amber-700 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Admin Dashboard</span>
                <span>→</span>
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Quick Fill Box */}
        <div className="mt-8 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[var(--text-primary)]">Demo Admin Credentials</div>
            <div className="text-[10px] font-mono text-[var(--text-secondary)]">admin@gmail.com / 12345678</div>
          </div>
          <button
            type="button"
            onClick={handleFillDemo}
            className="px-3 py-1.5 text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
          >
            Auto Fill
          </button>
        </div>
      </div>
    </div>
  );
};
