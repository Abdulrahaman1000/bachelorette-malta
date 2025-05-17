'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
// ❌ Remove the PackagesSection import
// import PackagesSection from './components/sections/PackageSection';
import BookingSection from './components/sections/BookingSection';
import ContactSection from './components/sections/ContactSection';

export default function HomePage({ params }: { params: { locale: string } }) {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <AboutSection />
      </motion.div>

      {/* ❌ Remove the PackagesSection here */}
      {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <PackagesSection />
      </motion.div> */}

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <BookingSection />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <ContactSection />
      </motion.div>
    </>
  );
}
