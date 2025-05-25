'use client';

import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import Header from './layout/Header';
import Footer from './layout/Footer';
import i18n from '../lib/i18n';

interface ClientWrapperProps {
  children: ReactNode;
  locale: string;
}

export default function ClientWrapper({ children, locale }: ClientWrapperProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </I18nextProvider>
  );
}