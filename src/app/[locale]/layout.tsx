
import { locales, defaultLocale } from 'locale.config';
import '@/app/globals.css';
import { hydrateRoot } from 'react-dom/client';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="root-class">
        {children}
      </body>
    </html>
  );
}