// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de'], // Add your locales here
    localePath: './public/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  },
};