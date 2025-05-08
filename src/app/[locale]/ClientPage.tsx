// app/[locale]/ClientPage.tsx
'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/app/lib/i18n';
import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import PackagesSection from '@/app/components/sections/PackageSection';
import BookingSection from '@/app/components/sections/BookingSection';
import ContactSection from '@/app/components/sections/ContactSection';
import { motion } from 'framer-motion';

// Create a deferredMountedComponent to avoid hydration mismatches
const DeferredClientContent = ({ locale }: { locale: string }) => {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Set mounted first, then change language
    setMounted(true);
    
    // Language change after mounting
    if (locale !== i18n.language) {
      i18n.changeLanguage(locale)
        .catch(console.error);
    }
  }, [locale]);

  if (!mounted) {
    return (
      <>
        {/* Static placeholders with consistent structure */}
        <div id="hero-section" />
        <div id="about-section" />
        <div id="packages-section" />
        <div id="booking-section" />
        <div id="contact-section" />
      </>
    );
  }

  return (
    <>
      <HeroSection />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} // Changed from whileInView to animate
        transition={{ duration: 0.8 }}
      >
        <AboutSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <PackagesSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BookingSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ContactSection />
      </motion.div>
    </>
  );
}

export default function ClientPage({ locale }: { locale: string }) {
  // Main component should be minimal to reduce hydration issues
  return <DeferredClientContent locale={locale} />;
}