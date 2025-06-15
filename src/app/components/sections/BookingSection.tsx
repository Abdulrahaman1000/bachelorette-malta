'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function TermsAndConditionsPage() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Helper function to safely get content as array
  const getContentArray = (key: string): string[] => {
    try {
      const content = t(key, { returnObjects: true });
      
      // If it's already an array, check if all items are strings
      if (Array.isArray(content)) {
        return content.filter((item): item is string => typeof item === 'string');
      }
      
      // If it's a string, wrap it in an array
      if (typeof content === 'string') {
        return [content];
      }
      
      // Fallback for missing translations
      return [`Content for ${key} not found`];
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error);
      return [`Content for ${key} not available`];
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-purple-900 to-pink-600 text-white">
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            src="/images/hero.jpeg"
            alt={t('terms.heroImageAlt') || 'Terms and Conditions'}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-600/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 font-heading"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('terms.title') || 'Terms and Conditions'}
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-white/60 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('terms.subtitle') || 'Please read our terms and conditions carefully'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-1">
              <div className="bg-white p-6 md:p-8">
                <p className="text-lg text-gray-700 mb-6">
                  {t('terms.intro') || 'Welcome to our terms and conditions page.'}
                </p>
              </div>
            </div>

            <motion.div 
              className="px-6 md:px-10 py-8 bg-gradient-to-b from-gray-50 to-white"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[...Array(7)].map((_, i) => (
                <motion.div className="mb-10" variants={itemVariants} key={i}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {i + 1}
                    </div>
                    <h2 className="text-2xl font-bold ml-4 font-heading text-gray-800">
                      {t(`terms.section${i + 1}.title`) || `Section ${i + 1}`}
                    </h2>
                  </div>
                  <div className="ml-16 space-y-3">
                    {getContentArray(`terms.section${i + 1}.content`).map((line, index) => (
                      <p className="text-gray-700" key={index}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('terms.ctaTitle') || 'Ready to Continue?'}
              </h3>
              <p className="text-white/90 mb-6">
                {t('terms.ctaDescription') || 'Go back to continue with your booking.'}
              </p>
              <button 
                className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.history.back()}
              >
                {t('terms.ctaButton') || 'Go Back'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}