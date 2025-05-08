// app/[locale]/page.tsx
import ClientPage from './ClientPage';
import { Suspense } from 'react';

// Static metadata
export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};

// Server component that passes locale to client component
export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage locale={locale} />
    </Suspense>
  );
}