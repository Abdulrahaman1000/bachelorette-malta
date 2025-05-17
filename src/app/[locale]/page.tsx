import { Suspense } from "react";
import ClientPage from "./ClientPage";

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage locale={locale} />
    </Suspense>
  );
}
