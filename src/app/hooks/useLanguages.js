
// Create a separate hook for language management
// hooks/useLanguage.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Get language from Next.js router instead of browser detection
    const currentLanguage = router.locale || router.defaultLocale;
    
    if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [router.locale, i18n]);

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return {
    currentLanguage: router.locale,
    changeLanguage,
    isReady: router.isReady,
  };
};
