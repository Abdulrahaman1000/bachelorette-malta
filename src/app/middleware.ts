import { defaultLocale, locales } from 'locale.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathLocale = pathname.split('/')[1];

  // Set cookie if visiting root
  if (pathname === '/') {
    const response = NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
    response.cookies.set('NEXT_LOCALE', defaultLocale);
    return response;
  }

  // Handle locale switching
  if (locales.includes(pathLocale)) {
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', pathLocale);
    return response;
  }

  // Redirect to default locale
  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}