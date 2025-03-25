import { Colors } from '@/constants/Colors';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { UseLocale } from './useLocale';


export const useConfiguration = () => {
    const { t, i18n } = useTranslation();
    const systemColorScheme = useColorScheme(); 
    const { theme, setTheme, hydrate } = useThemeStore(); 
    const { deviceLocale } = UseLocale();

    // const currentTheme = theme || systemColorScheme || 'light';
    const currentTheme = 'light';
    const colorObject = Colors[currentTheme];
    const hydratedConfiguration = async () => {
        hydrate();
        const language = await SecureStore.getItemAsync("language");
        if (language) {
            i18n.changeLanguage(language);
        }
    }


    return {
        i18n,
        t,
        colorObject,
        colorScheme: currentTheme,
        setTheme, 
        hydratedConfiguration,
        deviceLocale
    };
};