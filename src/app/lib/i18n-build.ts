import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fs from 'fs';
import path from 'path';
import { defaultLocale, locales } from 'locale.config';

// Load translations synchronously for build time
const loadTranslations = (locale: string) => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'common.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    return {};
  }
};

const createBuildTimeI18n = (locale: string = defaultLocale) => {
  const instance = i18n.createInstance();
  
  const resources = locales.reduce((acc, lng) => {
    acc[lng] = {
      common: loadTranslations(lng)
    };
    return acc;
  }, {} as Record<string, any>);

  instance.use(initReactI18next).init({
    lng: locale,
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    defaultNS: 'common',
    ns: ['common'],
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  return instance;
};

export default createBuildTimeI18n;