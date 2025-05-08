// app/context/LanguageContext.tsx
'use client';

import { defaultLocale, locales } from 'locale.config';
import { createContext, useContext, useState } from 'react';


interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
});

export function LanguageProvider({
  children,
  initialLocale, // <-- Add this prop
}: {
  children: React.ReactNode;
  initialLocale: string; // <-- Type it properly
}) {
  // Validate the initial locale
  const validatedLocale = locales.includes(initialLocale) 
    ? initialLocale 
    : defaultLocale;

  const [locale, setLocale] = useState(validatedLocale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}