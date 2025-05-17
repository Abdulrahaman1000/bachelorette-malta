'use client';

import Image from 'next/image';
import React from 'react';

const packages = [
  {
    id: 'luxury',
    title: 'Luxury Package',
    images: ['/images/luxury1.jpg', '/images/luxury2.jpg'],
    activities: [
      'Limousine ride',
      'Private catamaran ride',
      'Go-kart racing',
      'Private farmhouse with pool',
      'VIP nightlife',
    ],
  },
  {
    id: 'adventure',
    title: 'Adventure Package',
    images: ['/images/adventure1.jpg', '/images/adventure2.jpg'],
    activities: [
      'Jetskiing',
      'Paintball competition',
      'Kayaking or paddleboarding',
      'Quad biking',
      'Farmhouse BBQ evening',
    ],
  },
  {
    id: 'budget',
    title: 'On Budget Package',
    images: ['/images/budget1.jpg', '/images/budget2.jpg'],
    activities: [
      'Laser game',
      'Karaoke night',
      'Bowling match',
      'Island tour',
      'Boat ride and cozy farmhouse',
    ],
  },
];

export default function WhatWeOfferPage() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-black">Our Experience Packages</h1>

      <div className="space-y-20">
        {packages.map((pkg) => (
          <div key={pkg.id}>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">{pkg.title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {pkg.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${pkg.title} ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md object-cover w-full h-64"
                />
              ))}
            </div>

            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              {pkg.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
