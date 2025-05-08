// middleware.ts (place in the root of your project)
import { defaultLocale, locales } from 'locale.config';
import { NextRequest, NextResponse } from 'next/server';


// Define paths that should not be processed by the middleware
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  // Check if the request is for a public file (e.g., images, fonts)
  if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
    return;
  }

  // Check if the requested pathname already has a valid locale
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname starts with one of our locales
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return; // Continue with the request as is
  }

  // If no locale in pathname, redirect to the default locale
  // Determine the locale to use (from cookie, accept-language header, or default)
  // You can implement more sophisticated locale detection here
  const locale = defaultLocale;

  // Build the URL with the locale
  const url = new URL(`/${locale}${pathname}`, request.url);
  
  // Preserve query parameters
  url.search = request.nextUrl.search;
  
  // Return a redirect response
  return NextResponse.redirect(url);
}

// Configure the middleware to match all routes except for specific paths
export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    '/((?!_next|api).*)',
    // Optional: Skip specific files (e.g., favicon.ico)
    // '/((?!favicon.ico).*)',
  ],
};