'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { languages, locales } from 'locale.config';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'en';
  const currentLanguage = languages[currentLocale as keyof typeof languages] || languages.en;

  const handleLanguageChange = async (newLocale: string) => {
    if (!locales.includes(newLocale)) {
      console.error(`Invalid locale: ${newLocale}`);
      return;
    }
    
    setIsOpen(false);
    
    // Get current path without locale prefix
    const pathWithoutLocale = pathname.split('/').slice(2).join('/') || '';
    
    // Set cookie for future visits (1 year expiry)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    try {
      // Navigate to new URL
      const newUrl = `/${newLocale}/${pathWithoutLocale}`;
      router.push(newUrl);
      
      // Small delay to ensure route change, then refresh if needed
      setTimeout(() => {
        if (window.location.pathname !== newUrl) {
          window.location.href = newUrl;
        }
      }, 100);
    } catch (error) {
      console.error('Error changing language:', error);
      // Fallback to full page reload
      window.location.href = `/${newLocale}/${pathWithoutLocale}`;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-switcher-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative language-switcher-container">
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
        data-testid="language-selector"
      >
        <div className="w-5 h-5 relative">
          {currentLanguage.flag && (
            <Image
              src={currentLanguage.flag}
              alt={currentLanguage.name}
              fill
              className="object-cover rounded-sm"
              sizes="20px"
            />
          )}
        </div>
        <span>{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {Object.entries(languages).map(([code, language]) => (
            <button
              key={code}
              className={`w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 transition-colors ${
                currentLocale === code ? 'bg-gray-50 font-medium' : 'text-gray-700'
              }`}
              onClick={() => handleLanguageChange(code)}
              data-testid={`language-option-${code}`}
            >
              <div className="w-5 h-5 relative">
                {language.flag && (
                  <Image
                    src={language.flag}
                    alt={language.name}
                    fill
                    className="object-cover rounded-sm"
                    sizes="20px"
                  />
                )}
              </div>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}