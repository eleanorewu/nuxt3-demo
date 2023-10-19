// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/style.css','@fortawesome/fontawesome-svg-core/styles.css'
  ],
  "app": {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "2024救世貓貓",
      "meta": [
          { "name": "description", "content": "這是 救世貓貓的競選網站" },
          { "property": "og:title", "content": "2024救世貓貓" },
          { "property": "og:url", "content": "http://localhost:3000/" },
          { "property": "og:description", "content": "這是 救世貓貓的競選網站" },
      ]
    }
  }, 
  "imports": {
    "dirs": ['stores']
  },
  "modules": ['@pinia/nuxt', '@nuxtjs/color-mode'],
  colorMode: {
      // preference: 'light', // 預設主題
      dataValue: 'theme', // html 標籤中的主題
  },
})
