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
  
  // Get feature arrays with proper fallbacks
  const luxuryFeatures = t('whatWeOffer.packages.luxury.features', { 
    returnObjects: true, 
    defaultValue: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] 
  }) as string[];
  
  const adventureFeatures = t('whatWeOffer.packages.adventure.features', { 
    returnObjects: true, 
    defaultValue: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] 
  }) as string[];
  
  const budgetFeatures = t('whatWeOffer.packages.budget.features', { 
    returnObjects: true, 
    defaultValue: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] 
  }) as string[];

  // Debug: Log translations to see if they're working
  console.log('Luxury title:', t('whatWeOffer.packages.luxury.title'));
  console.log('Luxury features:', luxuryFeatures);
  console.log('First luxury feature:', Array.isArray(luxuryFeatures) ? luxuryFeatures[0] : 'No features');

  const packages: Package[] = [
    {
      id: 'luxury',
      title: t('whatWeOffer.packages.luxury.title', { defaultValue: 'Luxury Package' }),
      color: 'primary',
      features: [
        { icon: 'car-side', label: Array.isArray(luxuryFeatures) && luxuryFeatures[0] ? luxuryFeatures[0] : 'Luxury Transport' },
        { icon: 'ship', label: Array.isArray(luxuryFeatures) && luxuryFeatures[1] ? luxuryFeatures[1] : 'Yacht Experience' },
        { icon: 'flag-checkered', label: Array.isArray(luxuryFeatures) && luxuryFeatures[2] ? luxuryFeatures[2] : 'VIP Activities' },
        { icon: 'home', label: Array.isArray(luxuryFeatures) && luxuryFeatures[3] ? luxuryFeatures[3] : 'Premium Accommodation' },
        { icon: 'glass-cheers', label: Array.isArray(luxuryFeatures) && luxuryFeatures[4] ? luxuryFeatures[4] : 'Exclusive Dining' },
      ],
      images: ['/images/adv.jpg'],
    },
    {
      id: 'adventure',
      title: t('whatWeOffer.packages.adventure.title', { defaultValue: 'Adventure Package' }),
      color: 'secondary',
      features: [
        { icon: 'water', label: Array.isArray(adventureFeatures) && adventureFeatures[0] ? adventureFeatures[0] : 'Water Sports' },
        { icon: 'bullseye', label: Array.isArray(adventureFeatures) && adventureFeatures[1] ? adventureFeatures[1] : 'Target Activities' },
        { icon: 'swimmer', label: Array.isArray(adventureFeatures) && adventureFeatures[2] ? adventureFeatures[2] : 'Swimming' },
        { icon: 'motorcycle', label: Array.isArray(adventureFeatures) && adventureFeatures[3] ? adventureFeatures[3] : 'Adventure Tours' },
        { icon: 'utensils', label: Array.isArray(adventureFeatures) && adventureFeatures[4] ? adventureFeatures[4] : 'Local Dining' },
      ],
      images: ['/images/add.jpg'],
    },
    {
      id: 'budget',
      title: t('whatWeOffer.packages.budget.title', { defaultValue: 'Budget Package' }),
      color: 'accent',
      features: [
        { icon: 'gamepad', label: Array.isArray(budgetFeatures) && budgetFeatures[0] ? budgetFeatures[0] : 'Fun Activities' },
        { icon: 'microphone', label: Array.isArray(budgetFeatures) && budgetFeatures[1] ? budgetFeatures[1] : 'Entertainment' },
        { icon: 'route', label: Array.isArray(budgetFeatures) && budgetFeatures[2] ? budgetFeatures[2] : 'City Tours' },
        { icon: 'ship', label: Array.isArray(budgetFeatures) && budgetFeatures[3] ? budgetFeatures[3] : 'Boat Trips' },
        { icon: 'home', label: Array.isArray(budgetFeatures) && budgetFeatures[4] ? budgetFeatures[4] : 'Accommodation' },
      ],
      images: ['/images/budd.jpg'],
    },
  ];

  return (
    <section id="what-we-offer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-black">
            {t('whatWeOffer.title', { defaultValue: 'What We Offer' })}
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
                    {t('hero.discoverPackages', { defaultValue: 'Discover Packages' })}
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