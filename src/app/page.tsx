'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import BookingSection from './components/sections/BookingSection';
import ContactSection from './components/sections/ContactSection';

// For client components, params should be the resolved values, not Promises
interface HomePageProps {
  locale: string; // Changed from params object to direct locale prop
}

export default function HomePage({ locale }: HomePageProps) {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
      >
        <BookingSection />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>
    </>
  );
}