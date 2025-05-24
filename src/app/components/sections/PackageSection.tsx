// File: app/components/sections/PackagesSection.tsx
'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface Feature {
  icon: string;
  label: string;
}

interface Package {
  id: string;
  title: string;
  color: 'primary' | 'secondary' | 'accent';
  features: Feature[];
  images: string[];
}

export default function PackagesSection() {
  const { t } = useTranslation('common');
  
  // Debug: Log translations to see if they're working
  console.log('Luxury title:', t('whatWeOffer.packages.luxury.title'));
  console.log('First luxury feature:', t('whatWeOffer.packages.luxury.features.0'));

  const packages: Package[] = [
    {
      id: 'luxury',
      title: t('whatWeOffer.packages.luxury.title'),
      color: 'primary',
      features: [
        { icon: 'car-side', label: t('whatWeOffer.packages.luxury.features.0') },
        { icon: 'ship', label: t('whatWeOffer.packages.luxury.features.1') },
        { icon: 'flag-checkered', label: t('whatWeOffer.packages.luxury.features.2') },
        { icon: 'home', label: t('whatWeOffer.packages.luxury.features.3') },
        { icon: 'glass-cheers', label: t('whatWeOffer.packages.luxury.features.4') },
      ],
      images: ['/images/adv.jpg'],
    },
    {
      id: 'adventure',
      title: t('whatWeOffer.packages.adventure.title'),
      color: 'secondary',
      features: [
        { icon: 'water', label: t('whatWeOffer.packages.adventure.features.0') },
        { icon: 'bullseye', label: t('whatWeOffer.packages.adventure.features.1') },
        { icon: 'swimmer', label: t('whatWeOffer.packages.adventure.features.2') },
        { icon: 'motorcycle', label: t('whatWeOffer.packages.adventure.features.3') },
        { icon: 'utensils', label: t('whatWeOffer.packages.adventure.features.4') },
      ],
      images: ['/images/add.jpg'],
    },
    {
      id: 'budget',
      title: t('whatWeOffer.packages.budget.title'),
      color: 'accent',
      features: [
        { icon: 'gamepad', label: t('whatWeOffer.packages.budget.features.0') },
        { icon: 'microphone', label: t('whatWeOffer.packages.budget.features.1') },
        { icon: 'route', label: t('whatWeOffer.packages.budget.features.2') },
        { icon: 'ship', label: t('whatWeOffer.packages.budget.features.3') },
        { icon: 'home', label: t('whatWeOffer.packages.budget.features.4') },
      ],
      images: ['/images/budd.jpg'],
    },
  ];

  return (
    <section id="what-we-offer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-black">
            {t('whatWeOffer.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="hover:scale-[1.02] transition-transform duration-300"
            >
              <Card
                title={pkg.title}
                color={pkg.color}
                features={pkg.features}
                images={pkg.images}
                action={
                  <Button
                    href="/what-we-offer"
                    color={pkg.color}
                    className="mt-8"
                    aria-label={`Choose ${pkg.title} package`}
                  >
                    {t('hero.discoverPackages')}
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