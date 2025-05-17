'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Card from '../ui/Card';
import Image from 'next/image';
import Button from '../ui/Button';

interface Feature {
  icon: string;
  label: string;
}

interface Package {
  id: string;
  title: string;
  color: 'primary' | 'secondary' | 'accent'; // You can expand this if needed
  features: Feature[];
  images: string[];
}

export default function PackagesSection() {
  const packages: Package[] = [
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
      images: ['/images/luxury1.jpg', '/images/luxury2.jpg'],
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
      images: ['/images/adventure3.webp', '/images/adventure2.webp'],
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
      images: ['/images/game1.jpg', '/images/game2.jpg'],
    },
  ];

  return (
    <section id="what-we-offer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-black">
            What We Offer
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
            >
              <Card
                title={pkg.title}
                color={pkg.color}
                features={pkg.features}
                images={pkg.images}
                action={
                  <Button href="/what-we-offer" color={pkg.color} className="mt-8">
                    Choose this package
                  </Button>
                }
              />

              {/* Render images below Card */}
              <div className="flex space-x-4 mt-6">
                {pkg.images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`${pkg.title} image ${i + 1}`}
                    width={150}
                    height={100}
                    className="rounded-md object-cover"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
