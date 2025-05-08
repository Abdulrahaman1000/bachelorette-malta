'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../ui/Button';
import { useTranslation } from '@/app/utils/translate';
import BookingModal from '../BookingModal';

export default function HeroSection() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const title = t('Bachelor&Bacholorette parties in Malta', 'Bachelorette Malta');
  const motto = t(
    'Before you say ‘I do’ – you say ‘cheers’ in Malta',
    '"Before you say \'I do\' – you say \'cheers\' in Malta."'
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center"
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpeg"
            alt="Malta coastline"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              {motto}
            </p>
            <Button
              href="#what-we-offer"
              color="primary"
              size="lg"
              className="mr-4"
            >
              {t('Discover Packages', 'Discover Packages')}
            </Button>
            <Button
              type="button"
              color="secondary"
              size="lg"
              variant="outline"
              onClick={openModal}
            >
              {t('Book Now', 'Book Now')}
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          aria-hidden="true"
        >
          <svg
            className="w-10 h-10 text-white opacity-70"
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

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}