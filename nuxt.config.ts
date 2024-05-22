export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
  ],
  i18n: {
    vueI18n: './UI/language/i18n.js',
    locales: [
      {
        code: 'FR',
        name: 'Francais',
        iso: 'fr-FR',
        file: './components/UI/language/francais.json',
      },
      {
        code: 'EN',
        name: 'English',
        iso: 'en-EN',
        file: './components/UI/language/english.json',
      },
    ],
    defaultLocale: 'EN',
  },
});
