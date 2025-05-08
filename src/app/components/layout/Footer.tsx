import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '../shared/SocialLinks';
import React from 'react';


interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'What We Offer', href: '#what-we-offer' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo & description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-400">Bachelorette Malta</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Creating unforgettable bachelorette experiences in the heart of the Mediterranean.
              Let us make your celebration extraordinary.
            </p>
            <SocialLinks />
          </div>
          
          {/* Quick links */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
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
          
          {/* Newsletter */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Join our newsletter for exclusive offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} Bachelorette Malta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}