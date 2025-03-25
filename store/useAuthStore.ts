// store/useAuthStore.ts
import {create} from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface IAuthStore {
  User: IUser | null;
  loading: boolean;
  setUser: (user: IUser | null) => void;
  setLoading: (loading: boolean) => void;
  loadUserData: () => Promise<void>;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  User: null,
  loading: true,
  setUser: async (user) => { 
    if (user) {
      await SecureStore.setItemAsync('user', JSON.stringify(user))
      set( { User: user })
    }

  },
  setLoading: (loading) => set({ loading }),
  loadUserData: async () => {
    set({ loading: true });
    try {
      const storedUser = await SecureStore.getItemAsync('user');
      if (storedUser) {
        set({ User: JSON.parse(storedUser), loading: false });
      }else{
        set({User: null, loading: false })
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      set({ loading: false });
    }
  }
}));
