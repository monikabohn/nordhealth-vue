// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@pinia/nuxt'],
  app: {
    baseURL: '/nordhealth-vue/'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('nord-')
    }
  }
})
