import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
// import { useTranslation } from '@/app/utils/translate'; // your i18n hook
import BookingModal from '../BookingModal';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use translation keys, no fallback text here
  const title = t('hero.title');
  const motto = t('hero.motto');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        aria-label="Hero section"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpeg"
            alt={t('hero.imageAlt', 'Malta coastline')}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8">
              {motto}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="#what-we-offer"
                color="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t('hero.discoverPackages')}
              </Button>
              <Button
                type="button"
                color="secondary"
                size="lg"
                variant="outline"
                onClick={openModal}
                className="w-full sm:w-auto"
              >
                {t('hero.bookNow')}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          aria-hidden="true"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
