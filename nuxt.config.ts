export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'fr',
      },
    },
  },
  site: {
    url: "https://leterrainconfus.fr",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
  ],
});
