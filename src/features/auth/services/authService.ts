const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASS = '12345678';
const AUTH_KEY = 'devalaya_admin_auth';

export interface AdminUser {
  email: string;
  role: string;
  name: string;
}

export const authService = {
  login: (email: string, pass: string): { success: boolean; user?: AdminUser; error?: string } => {
    if (email.trim().toLowerCase() === ADMIN_EMAIL && pass === ADMIN_PASS) {
      const user: AdminUser = {
        email: ADMIN_EMAIL,
        role: 'Super Admin',
        name: 'Temple Administrator',
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      }
      return { success: true, user };
    }
    return { success: false, error: 'Invalid email or password. Default: admin@gmail.com / 12345678' };
  },

  getCurrentUser: (): AdminUser | null => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem(AUTH_KEY);
    if (!stored) return null;
    try {
      return JSON.parse(stored) as AdminUser;
    } catch {
      return null;
    }
  },

  logout: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_KEY);
    }
  },

  isAuthenticated: (): boolean => {
    return !!authService.getCurrentUser();
  },
};
