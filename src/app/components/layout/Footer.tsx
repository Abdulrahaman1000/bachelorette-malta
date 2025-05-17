import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '../shared/SocialLinks';
import React from 'react';
import { useTranslation } from 'react-i18next';


interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t('footer.about_us'), href: '#about' },
    { name: t('footer.what_we_offer'), href: '#what-we-offer' },
    { name: t('footer.booking'), href: '#booking' },
    { name: t('footer.contact'), href: '#contact' },
    { name: t('footer.privacy_policy'), href: '/privacy' },
    { name: t('footer.terms_conditions'), href: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-400">Bachelorette Malta</span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <SocialLinks />
          </div>

          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0">
            <h3 className="text-lg font-bold mb-4">{t('footer.subscribe')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.newsletter_text')}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('footer.email_placeholder')}
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition duration-200"
              >
                {t('footer.subscribe_button')}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} Bachelorette Malta. {t('footer.rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
}
