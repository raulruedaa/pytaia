import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  hasPlus: boolean;
  login: () => void;
  logout: () => void;
  upgradeToPlan: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  hasPlus: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false, hasPlus: false }),
  upgradeToPlan: () => set({ hasPlus: true })
}));