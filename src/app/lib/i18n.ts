// app/lib/i18n.ts
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { defaultLocale, locales } from 'locale.config';

i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
});

// Initialize if not already initialized
if (typeof window !== 'undefined' && !i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      supportedLngs: locales,
      fallbackLng: defaultLocale,
      debug: process.env.NODE_ENV === 'development',
      defaultNS: 'common',
      ns: ['common'],
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
      detection: {
        order: ['path', 'cookie', 'navigator'],
        lookupCookie: 'NEXT_LOCALE',
        caches: ['cookie'],
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
    });
}

export default i18n;