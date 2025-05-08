'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function AboutUsPage() {
  const images = [
    "/images/splash1.jpg", // Replace with your actual image URLs
    "/images/splash2.jpg",
    "/images/splash3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image section with carousel */}
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

          {/* Content column */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-4 font-heading">
                About Us
              </h2>
              <p className="text-xl text-gray-600 mb-6 italic">
                “Because every story deserves an unforgettable beginning.”
              </p>
              <p className="text-gray-700 mb-8">
                Welcome to the world of Bachelor & Bachelorette Parties Malta, where ordinary days turn into legendary memories. We specialize in planning bachelor and bachelorette parties that go beyond the usual – moments filled with emotion, adventure, laughter, and elegance.
              </p>
              <p className="text-gray-700 mb-8">
                Our mission is to create a tailor-made experience for every group – whether you’re dreaming of a luxury yacht escape, an action-packed adrenaline weekend, or simply quality time with friends in Malta’s stunning surroundings.
              </p>
              <p className="text-gray-700 mb-8">
                We work exclusively with trusted partners and provide accommodation in stylish private farmhouses. From airport pickup to the final toast, we take care of every detail. We believe a bachelorette party should be unique, stress-free, and flawlessly planned. And that’s exactly what we deliver.
              </p>

              {/* Features Section */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4 text-black">Our Core Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Feature 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="text-primary-600 mr-4">
                      <i className="fas fa-calendar text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Expert Planning</h4>
                      <p className="text-gray-600 text-sm">Personalized itineraries tailored to your group</p>
                    </div>
                  </motion.div>

                  {/* Feature 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start"
                  >
                    <div className="text-primary-600 mr-4">
                      <i className="fas fa-map-marker-alt text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Local Expertise</h4>
                      <p className="text-gray-600 text-sm">Insider access to Malta.</p>
                    </div>
                  </motion.div>

                  {/* Feature 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="text-primary-600 mr-4">
                      <i className="fas fa-users text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Group Sizes</h4>
                      <p className="text-gray-600 text-sm">Perfect for groups of all sizes, from intimate gatherings to large celebrations.</p>
                    </div>
                  </motion.div>

                  {/* Feature 4 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="text-primary-600 mr-4">
                      <i className="fas fa-hands-helping text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Full Support</h4>
                      <p className="text-gray-600 text-sm">24/7 assistance throughout your stay to ensure everything runs smoothly.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
