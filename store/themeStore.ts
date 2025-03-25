import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface ThemeState {
    theme: 'light' | 'dark' | null;
    setTheme: (theme: 'light' | 'dark') => void;
    hydrate: () => Promise<void>;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
    theme: null,
    setTheme: async (theme) => {
        set({ theme });
        await SecureStore.setItemAsync('theme', theme);
    },
    hydrate: async () => {
        const savedTheme = await SecureStore.getItemAsync('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            set({ theme: savedTheme });
        }
    },
}));