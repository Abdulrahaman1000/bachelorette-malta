'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/app/utils/translate';

export default function TermsAndConditionsPage() {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-purple-900 to-pink-600 text-white">
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            src="/images/hero.jpeg"
            alt="Malta coastline"
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
              Terms and Conditions
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
              Please read these terms carefully before booking your unforgettable Malta experience
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-1">
              <div className="bg-white p-6 md:p-8">
                <p className="text-lg text-gray-700 mb-6">
                  At Bachelor/Bachelorette Parties Malta, we strive to provide exceptional experiences for your celebration. 
                  To ensure clarity and mutual understanding, we've outlined our terms and conditions below.
                </p>
              </div>
            </div>
            
            {/* Terms Content */}
            <motion.div 
              className="px-6 md:px-10 py-8 bg-gradient-to-b from-gray-50 to-white"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="mb-10" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    1
                  </div>
                  <h2 className="text-2xl font-bold ml-4 font-heading text-gray-800">Introduction</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-700">
                    By booking or using our services, you agree to these terms and conditions set by "Bachelor/Bachelorette Parties Malta".
                  </p>
                </div>
              </motion.div>

              <motion.div className="mb-10" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    2
                  </div>
                  <h2 className="text-2xl font-bold ml-4 font-heading text-gray-800">Booking & Payment</h2>
                </div>
                <div className="ml-16 space-y-3">
                  <p className="text-gray-700">
                    All bookings must be confirmed in advance through our website or by direct contact.
                  </p>
                  <p className="text-gray-700">
                    Full payment is required at the time of booking to secure your reservation.
                  </p>
                  <p className="text-gray-700">
                    Pricing may vary based on package, number of participants, and season.
                  </p>
                </div>
              </motion.div>

              <motion.div className="mb-10" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    3
                  </div>
                  <h2 className="text-2xl font-bold ml-4 font-heading text-gray-800">Cancellation & Refund Policy</h2>
                </div>
                <div className="ml-16 space-y-3">
                  <p className="text-gray-700">
                    All payments are final. No refunds will be issued under any circumstances, including cancellations, missed events, or changes of plans.
                  </p>
                  <p className="text-gray-700">
                    We strongly recommend clients purchase personal travel insurance in case of unexpected issues.
                  </p>
                </div>
              </motion.div>

              <motion.div className="mb-10" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    4
                  </div>
                  <h2 className="text-2xl font-bold ml-4 font-heading text-gray-800">Changes or Cancellations by Us</h2>
                </div>
                <div className="ml-16 space-y-3">
                  <p className="text-gray-700">
                    If an event must be canceled or modified due to safety concerns, weather, or availability, we will attempt to provide a suitable replacement activity.
                  </p>
                  <p className="text-gray-700">
                    No monetary refunds will be given. Replacements are offered at our discretion.
                  </p>
                </div>
              </motion.div>

              <motion.div className="mb-10" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    5
                  </div>
                  <h2 className="text-2xl font-bold ml-4 font-heading text-gray-800">Responsibility & Liability</h2>
                </div>
                <div className="ml-16 space-y-3">
                  <p className="text-gray-700">
                    Participation in all events is at your own risk.
                  </p>
                  <p className="text-gray-700">
                    We are not liable for injuries, property damage, or losses.
                  </p>
                  <p className="text-gray-700">
                    All guests are expected to behave respectfully and responsibly.
                  </p>
                </div>
              </motion.div>

              <motion.div className="mb-10" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    6
                  </div>
                  <h2 className="text-2xl font-bold ml-4 font-heading text-gray-800">Age & Conduct</h2>
                </div>
                <div className="ml-16 space-y-3">
                  <p className="text-gray-700">
                    Minimum age is 18 for participation.
                  </p>
                  <p className="text-gray-700">
                    Inappropriate behavior may lead to removal from the event with no refund or compensation.
                  </p>
                </div>
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    7
                  </div>
                  <h2 className="text-2xl font-bold ml-4 font-heading text-gray-800">Agreement</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-700">
                    By booking, you confirm that you understand and accept these terms fully.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready for an Unforgettable Experience?</h3>
              <p className="text-white/90 mb-6">
                Now that you're familiar with our terms, let's start planning your dream bachelorette experience in Malta!
              </p>
              <button 
                className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.history.back()}
              >
                Return to Booking
              </button>
            </div>
          </div>

          {/* Last Updated */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-gray-500">
              Last updated: May 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
}