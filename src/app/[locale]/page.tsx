// src/app/[locale]/page.tsx
import { Suspense } from "react";
import HomePage from "../page";


interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage locale={locale} />
    </Suspense>
  );
}
