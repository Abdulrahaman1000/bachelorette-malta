'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '../shared/SocialLinks';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const { t, ready } = useTranslation('common');
  const [currentYear, setCurrentYear] = useState(2024);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Consistent translation function with proper fallbacks
  const getTranslation = (key: string, fallback: string) => {
    if (!isMounted || !ready) {
      return fallback;
    }
    return t(key, fallback);
  };

  const footerLinks = [
    { 
      name: getTranslation('footer.about_us', 'About Us'), 
      href: `/${locale}#about` 
    },
    { 
      name: getTranslation('footer.what_we_offer', 'What We Offer'), 
      href: `/${locale}#what-we-offer` 
    },
    { 
      name: getTranslation('footer.booking', 'Booking'), 
      href: `/${locale}#booking` 
    },
    { 
      name: getTranslation('footer.contact', 'Contact'), 
      href: `/${locale}#contact` 
    },
    { 
      name: getTranslation('footer.privacy_policy', 'Privacy Policy'), 
      href: `/${locale}/privacy` 
    },
    { 
      name: getTranslation('footer.terms_conditions', 'Terms & Conditions'), 
      href: `/${locale}/terms` 
    },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    const isAnchorLink = href.includes('#');
    if (isAnchorLink) {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Company Info Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href={`/${locale}`} className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-400">
                Bachelorette Malta
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              {getTranslation(
                'footer.description', 
                'Creating unforgettable bachelorette party experiences in the heart of the Mediterranean.'
              )}
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links Section */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4">
              {getTranslation('footer.quick_links', 'Quick Links')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-primary-400 transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <h3 className="text-lg font-bold mb-4">
              {getTranslation('footer.subscribe', 'Subscribe')}
            </h3>
            <p className="text-gray-400 mb-4">
              {getTranslation(
                'footer.newsletter_text', 
                'Stay updated with our latest offers and party ideas.'
              )}
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={getTranslation('footer.email_placeholder', 'Enter your email')}
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-black"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition duration-200"
              >
                {getTranslation('footer.subscribe_button', 'Subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            © {currentYear} Bachelorette Malta. {' '}
            {getTranslation('footer.rights_reserved', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
}