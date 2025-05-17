// app/[locale]/what-we-offer/page.tsx
'use client';

import PackagesSection from '@/app/components/sections/PackageSection';

export default function WhatWeOfferPage() {
  return (
    <main className="py-16 px-6 max-w-6xl mx-auto">
      <PackagesSection translations={undefined} />
    </main>
  );
}
