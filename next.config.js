// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Correct: App Router doesn't use the i18n config from Pages Router
};

module.exports = nextConfig;

