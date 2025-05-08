'use client';

import { ReactNode, useEffect } from 'react';
import { i18n } from '@/app/lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
  locale: string;
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  // Change language when the locale prop changes
  useEffect(() => {
    // Only change the language if i18n is initialized and the current language is different
    if (i18n.isInitialized && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <>{children}</>;
}