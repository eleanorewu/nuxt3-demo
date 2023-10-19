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
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
})
