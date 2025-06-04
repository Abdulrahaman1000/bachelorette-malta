// Create a new file: src/app/components/DynamicHeader.tsx
'use client';

import dynamic from 'next/dynamic';

// Import Header without SSR to prevent hydration issues
const Header = dynamic(() => import('../components/layout/Header'), {
  ssr: false,
  loading: () => (
    <header className="fixed top-0 w-full z-50 bg-black/60 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            Bachelor&Bachelorette
          </span>
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <span className="font-medium text-white">What We Offer</span>
              <span className="font-medium text-white">Booking</span>
              <span className="font-medium text-white">Contact</span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  ),
});

export default Header;