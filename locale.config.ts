// src/app/lib/localeConfig.ts
// This file contains locale information usable in both client and server contexts

// Define available languages
export const languages = {
    en: { name: 'English', flag: '/images/flags/gb-eng.svg' },
    de: { name: 'Deutsch', flag: '/images/flags/de.svg' },
    fr: { name: 'Français', flag: '/images/flags/fr.svg' },
    it: { name: 'Italiano', flag: '/images/flags/it.svg' },
    es: { name: 'Español', flag: '/images/flags/es.svg' },
    ru: { name: 'Русский', flag: '/images/flags/ru.svg' },
    sk: { name: 'Slovenčina', flag: '/images/flags/sk.svg' },
  };
  
  // Define available locales
  export const locales = Object.keys(languages);
  
  // Default locale
  export const defaultLocale = 'en';