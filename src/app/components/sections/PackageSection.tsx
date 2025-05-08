'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';


export default function PackagesSection() {
  const { t } = useTranslation();
  
  const packages = [
    {
      id: 'luxury',
      title: 'Luxury Package',
      color: 'primary',
      features: [
        { icon: 'car-side', label: 'Limousine ride' },
        { icon: 'ship', label: 'Private yacht with drinks' },
        { icon: 'flag-checkered', label: 'Go-kart racing' },
        { icon: 'home', label: 'Private farmhouse with pool' },
        { icon: 'glass-cheers', label: 'VIP nightlife' },
      ],
    },
    {
      id: 'adventure',
      title: 'Adventure Package',
      color: 'secondary',
      features: [
        { icon: 'water', label: 'Jetski' },
        { icon: 'bullseye', label: 'Paintball' },
        { icon: 'swimmer', label: 'Kayaking or paddleboarding' },
        { icon: 'motorcycle', label: 'Quad bikes' },
        { icon: 'utensils', label: 'Farmhouse with BBQ' },
      ],
    },
    {
      id: 'budget',
      title: 'On Budget Package',
      color: 'accent',
      features: [
        { icon: 'gamepad', label: 'Laser game' },
        { icon: 'microphone', label: 'Karaoke or bowling' },
        { icon: 'route', label: 'Full-day island tour' },
        { icon: 'ship', label: 'Boat trip' },
        { icon: 'home', label: 'Cozy private farmhouse' },
      ],
    },
  ];
  

  return (
    <section id="what-we-offer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2 font-heading text-black">What We Offer</h2>
          {/* <p className="text-xl text-gray-600">{t('sections.packages.subtitle')}</p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                title={pkg.title}
                color={pkg.color}
                features={pkg.features}
                action={
                  <Button
                    href="#booking"
                    color={pkg.color}
                    className="mt-8"
                  >
                    {t('buttons.book', { package: pkg.title })}
                  </Button>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}