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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className={`${colors.header} text-white p-6 text-center`}>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      {/* Images gallery */}
      {images.length > 0 && (
        <div className="flex space-x-4 p-4 overflow-x-auto cursor-pointer">
          {images.map((src, i) => (
            <div key={i} className="flex-shrink-0 rounded-md overflow-hidden shadow-md" onClick={() => setPreviewIndex(i)}>
              <Image src={src} alt={`${title} image ${i + 1}`} width={250} height={150} className="object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className={`${colors.icon} mr-3 transition-transform duration-300 group-hover:scale-110`}>
                <i className={`fas fa-${feature.icon}`}></i>
              </span>
              <span className="text-gray-600">{feature.label}</span>
            </li>
          ))}
        </ul>
        {action && <div className="text-center">{action}</div>}
      </div>

      {/* Preview modal */}
    {previewIndex !== null && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
    onClick={() => setPreviewIndex(null)}
  >
    <div className="relative max-w-full max-h-full">
      <img
        src={images[previewIndex]}
        alt={`${title} preview image`}
        className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
      />
      <button
        className="absolute top-4 right-4 text-white text-4xl font-bold focus:outline-none"
        onClick={() => setPreviewIndex(null)}
        aria-label="Close image preview"
      >
        &times;
      </button>
    </div>
  </div>
)}

    </div>
  );
}
