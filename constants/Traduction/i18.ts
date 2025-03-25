// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Importa tus archivos de traducción
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';

// Configuración de i18next

const initalizeI18Next = () => {
  i18n.use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    compatibilityJSON: 'v4',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    lng: Localization.getLocales()[0]?.languageCode ?? 'en',
    react: {
      useSuspense: false
    }
  })};

export default { initalizeI18Next };
