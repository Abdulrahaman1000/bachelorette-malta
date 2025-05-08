'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';


export default function NotFound() {
  const { locale, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          {t('errors.pageNotFound', 'Page Not Found')}
        </h2>
        <p className="text-gray-600 mb-8">
          {t('errors.pageNotFoundMessage', 'The page you are looking for might have been removed or is temporarily unavailable.')}
        </p>
        <Link 
          href={`/${locale}`}
          className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition-colors"
        >
          {t('errors.backToHome', 'Back to Home')}
        </Link>
      </div>
    </div>
  );
}