import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mockUser, type User } from '@/data/mock-data';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (_email: string, _password: string) => {
        // Mock login — replace with API call
        set({ user: mockUser, isAuthenticated: true });
        return true;
      },
      register: async (name: string, email: string, _password: string) => {
        set({ user: { ...mockUser, name, email }, isAuthenticated: true });
        return true;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem('auth_token');
      },
    }),
    { name: 'restaurant-auth' }
  )
);
