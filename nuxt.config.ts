// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './UI/language/i18n.js',
    locales: [ 
                      { code: 'FR', name: 'Francais', iso: 'fr-FR', file: './components/UI/language/francais.json', },
                      { code: 'EN', name: 'English', iso: 'en-EN', file: './components/UI/language/english.json', },
                  ],
    defaultLocale: 'EN',
  }
})