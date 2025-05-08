/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Remove the i18n configuration for App Router
  // The App Router has a different way of handling internationalization
};

module.exports = nextConfig;