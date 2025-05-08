import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import LanguageSwitcher from '../components/layout/LanguageSwitcher';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-xl font-bold">My Website</div>
        <LanguageSwitcher />
      </header>
      <Component {...pageProps} />
    </div>
  );
}