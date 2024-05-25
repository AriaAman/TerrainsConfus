export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "fr",
      },
    },
  },
  site: {
    name: "Le Terrain Confus",
    url: "https://leterrainconfus.fr",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/seo"],
});
