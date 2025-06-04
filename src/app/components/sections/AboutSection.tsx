'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutUsPage() {
  const { t, ready } = useTranslation('common');

  const images = [
    "/images/splash1.jpg",
    "/images/splash2.jpg",
    "/images/splash3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]); // add images.length to dependency to fix warning

  if (!ready) {
    return <div>Loading...</div>;
  }

  const features = (t('about.features', { returnObjects: true }) || []) as {
    title: string;
    description: string;
    icon: string;
  }[];

  const textParagraphs = (t('about.text', { returnObjects: true }) || []) as string[];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Malta experience ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-4 font-heading">
                {t('about.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6 italic">
                {t('about.motto')}
              </p>
              
              {Array.isArray(textParagraphs) && textParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-8">{paragraph}</p>
              ))}

              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4 text-black">
                  {t('about.coreFeaturesTitle')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Array.isArray(features) && features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="text-primary-600 mr-4">
                        <i className={`fas ${feature.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-black">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
