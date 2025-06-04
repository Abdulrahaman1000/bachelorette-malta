import { locales, defaultLocale } from 'locale.config';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = locales.includes(resolvedParams.locale) ? resolvedParams.locale : defaultLocale;

  return <>{children}</>;
}
