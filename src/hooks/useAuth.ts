import { create } from 'zustand';
import { auth } from '../lib/firebase/config';
import { onAuthStateChanged, User } from 'firebase/auth';
import { getUserData, createUserData, updateUserPlan } from '../lib/firebase/users';
import { loginWithEmail, loginWithGoogle, logout as firebaseLogout } from '../lib/firebase/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  hasPlus: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  upgradeToPlan: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => {
  // Listen to auth state changes
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUserData(user.uid);
      set({ 
        user, 
        isAuthenticated: true,
        hasPlus: userData?.hasPlus || false,
        loading: false 
      });
    } else {
      set({ 
        user: null, 
        isAuthenticated: false, 
        hasPlus: false,
        loading: false 
      });
    }
  });

  return {
    user: null,
    isAuthenticated: false,
    hasPlus: false,
    loading: true,

    login: async (email: string, password: string) => {
      const { user } = await loginWithEmail(email, password);
      const userData = await getUserData(user.uid);
      if (!userData) {
        await createUserData(user.uid, { email: user.email! });
      }
    },

    loginWithGoogle: async () => {
      const { user } = await loginWithGoogle();
      const userData = await getUserData(user.uid);
      if (!userData) {
        await createUserData(user.uid, {
          email: user.email!,
          name: user.displayName,
          photoUrl: user.photoURL
        });
      }
    },

    logout: async () => {
      await firebaseLogout();
    },

    upgradeToPlan: async () => {
      const user = auth.currentUser;
      if (!user) return;
      
      await updateUserPlan(user.uid, true);
      set({ hasPlus: true });
    }
  };
});