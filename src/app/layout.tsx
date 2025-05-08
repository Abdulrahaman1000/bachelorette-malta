'use client';

import { Poppins, Playfair_Display } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { LanguageProvider } from '@/app/context/LanguageContext';

import React, { useEffect } from 'react';
import { locales } from 'locale.config';

// Font configuration
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate the locale - fall back to 'en' if not valid
  const locale = locales.includes(params.locale) ? params.locale : 'en';

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
        <LanguageProvider initialLocale={locale}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </LanguageProvider>
      </body>
    </html>
  );
}