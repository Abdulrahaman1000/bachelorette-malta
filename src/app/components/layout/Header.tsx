'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const { t, ready } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: t('header.whatWeOffer'),
      href: `/${locale}/what-we-offer`,
    },
    {
      name: t('header.booking'),
      href: `/${locale}/#booking`,
    },
    {
      name: t('header.contact'),
      href: `/${locale}/#contact`,
    },
  ];

  if (!ready) {
    return (
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-black/60'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                Bachelor&Bachelorette
              </span>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  const handleNavClick = (
    e: React.MouseEvent,
    href: string
  ) => {
    const isAnchorLink = href.includes('#');
    const basePath = `/${locale}`;
    if (isAnchorLink && pathname === basePath) {
      e.preventDefault();
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close mobile menu
      }
    } else {
      // Navigate normally
      router.push(href);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-black/60'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <span
              className={`text-2xl font-bold ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
              suppressHydrationWarning={true}
            >
              {t('hero.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-medium transition duration-200 ${
                    isScrolled
                      ? 'text-black hover:text-primary-600'
                      : 'text-white hover:text-primary-300'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-black' : 'text-white'
            } hover:text-primary-600 focus:outline-none`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('header.toggleMenu')}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/90 rounded-lg shadow-lg text-white">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 hover:bg-white/10"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-4 px-4 pt-4 border-t border-white/20">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
