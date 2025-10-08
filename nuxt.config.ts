// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   runtimeConfig: {
  public: {
    API_ENDPOINT: process.env.NUXT_PUBLIC_API_ENDPOINT,
  },
},
  routeRules: {
    '/api/**': {
      proxy: {
        to: `${process.env.NUXT_PUBLIC_API_ENDPOINT}/api/**`,
      },
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/image', '@nuxt/ui']
})