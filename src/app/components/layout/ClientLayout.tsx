// app/components/layout/ClientLayout.tsx
'use client';

import React from 'react';
import { LanguageProvider } from '@/app/context/LanguageContext';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <LanguageProvider initialLocale={locale}>
      <Header locale={locale} translations={{
        logoTitle: '',
        whatWeOffer: '',
        booking: '',
        contact: '',
        toggleMenu: ''
      }} />
      <main>{children}</main>
      <Footer locale={locale} />
    </LanguageProvider>
  );
}
