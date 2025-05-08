import { useLanguage } from "../context/LanguageContext";

// Import all locale files
const locales: Record<string, any> = {
  en: require('../../../public/locales/en/common.json'),
  de: require('../../../public/locales/de/common.json'),
  fr: require('../../../public/locales/fr/common.json'),
  it: require('../../../public/locales/it/common.json'),
//   es: require('../locales/es.json'),
//   ru: require('../locales/ru.json'),
//   sk: require('../locales/sk.json'),
};

export const useTranslation = () => {
  const { locale } = useLanguage();
  
  const t = (key: string, p0: string) => {
    // Split the key by dots
    const keys = key.split('.');
    let value = locales[locale] || locales.en;
    
    // Navigate through the object
    for (const k of keys) {
      if (value[k] === undefined) {
        // Fall back to English
        let fallback = locales.en;
        for (const fk of keys) {
          if (fallback[fk] === undefined) {
            return key; // Key not found even in fallback
          }
          fallback = fallback[fk];
        }
        return fallback;
      }
      value = value[k];
    }
    
    return value;
  };
  
  return { t };
};