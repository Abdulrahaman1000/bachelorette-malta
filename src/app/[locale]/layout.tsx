// app/[locale]/layout.tsx
import { locales, defaultLocale } from 'locale.config';

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

  return <>{children}</>;
  // Or if you want a wrapper div:
  // return <div lang={locale}>{children}</div>;
}
