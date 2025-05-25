import React, { useState } from 'react';
import Image from 'next/image';

type CardProps = {
  title: string;
  color: 'primary' | 'secondary' | 'accent';
  features: {
    icon: string;
    label: string;
  }[];
  images?: string[];
  action?: React.ReactNode;
};

const colorMap = {
  primary: {
    header: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white',
    icon: 'text-pink-500',
  },
  secondary: {
    header: 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white',
    icon: 'text-indigo-500',
  },
  accent: {
    header: 'bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 text-white',
    icon: 'text-teal-500',
  },
};

export default function Card({ title, color, features, images = [], action }: CardProps) {
  const colors = colorMap[color];
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Header */}
      <div className={`${colors.header} p-6 text-center`}>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      {/* Image gallery */}
      {images.length > 0 && (
        <div className="flex space-x-4 overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-300">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => setPreviewIndex(index)}
            >
              <Image
                src={src}
                alt={`${title} image ${index + 1}`}
                width={256}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      )}

      {/* Features */}
      <div className="p-6 space-y-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className={`${colors.icon} text-xl mr-3`}>
                <i className={`fas fa-${feature.icon}`}></i>
              </span>
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>

        {/* Action button */}
        {action && <div className="mt-6 text-center">{action}</div>}
      </div>

      {/* Fullscreen Modal Preview */}
      {previewIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative w-full max-w-6xl mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={images[previewIndex]}
                alt={`${title} preview image`}
                layout="responsive"
                width={1200}
                height={700}
                className="object-contain w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl font-bold focus:outline-none z-10"
                onClick={() => setPreviewIndex(null)}
                aria-label="Close preview"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
