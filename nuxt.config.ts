export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          app_name: 'Creative Design'
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      gaId: '',
    },
  },
  content: {
  },
})
