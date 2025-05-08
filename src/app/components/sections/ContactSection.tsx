'use client';

import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-150px)] bg-gradient-to-b from-purple-900 to-pink-600 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-lg text-white opacity-90">
            Get in touch to plan your perfect bachelorette party in Malta!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Image Section - Fixed height and proper containment */}
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
            <Image
              src="/images/contact.png"
              alt="Bachelorette party in Malta"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Contact Information - Better spacing and contrast */}
          <div className="space-y-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            {/* Email */}
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all border-l-4 border-pink-400">
              <div className="bg-pink-600 p-3 rounded-full">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a
                  href="mailto:bachelorettemalta@gmail.com"
                  className="text-pink-200 hover:text-white transition-colors"
                >
                  bachelorettemalta@gmail.com
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all border-l-4 border-blue-400">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaFacebook className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Facebook</h3>
                <a
                  href="https://facebook.com/bachelorettemalta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  facebook.com/bachelorettemalta
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all border-l-4 border-purple-400">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                <FaInstagram className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Instagram</h3>
                <a
                  href="https://instagram.com/bachelorettemalta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  @bachelorettemalta
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all border-l-4 border-green-400">
              <div className="bg-green-600 p-3 rounded-full">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <a
                  href="tel:+35677381284"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  +356 77381284
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="pt-6 mt-6 border-t border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-white/70"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-white/70"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-white/70"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}