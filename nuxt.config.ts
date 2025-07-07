import { resolve } from "node:path"
// https://nuxt.com/docs/api/configuration/nuxt-confi
/*
 Make sure to rename the " /nuxt/preview/ynex " to the subdirectory where you are gonana upload the project. If you are uploading it in root then chang the /nuxt/preview/ynex to '/' or remove.
*/
export default defineNuxtConfig({
 telemetry: false,

 alias:{
   assets : "/<rootDir>/assets",
   cookie: resolve(__dirname, "node_modules/cookie")
 },

 modules: [
   '@nuxt/image',
   '@pinia/nuxt', 
   '@nuxtjs/i18n',
 ],

 // Used to add the base path of url Example : https://www.spruko.com/ynex-nuxt
 app: {
   // baseURL: '/admin', // Replace with your desired base path
  //  baseURL: '/nuxt', // Replace with your desired base path
   head: {
     link: [{ rel: 'icon', type: 'image/x-icon', href: "/favicon.ico" }]
 },
 },

 ssr : false,

 build : {
   transpile : ['vue-countup-v3']
 },

 devtools: { enabled: true },

 plugins: [
   { src: "@/plugins/plugins.ts", mode: "client" },
],

 css : [
   '@/assets/css/icons.css',
   '@/assets/css/bootstrap.css',
   '@/assets/css/styles.css',
   '@/assets/scss/_banking-variables.scss',
 ],

 vite: {
   optimizeDeps: {
     include: [],
     exclude: []
   },
   define: {
     // 'import.meta.env.BASE_URL': JSON.stringify('/nuxt/ynex/preview/'),
     'import.meta.env.googleMapsApiKey': JSON.stringify('AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA')
   },
 },

 compatibilityDate: '2024-11-07',

 i18n: {
   locales: [
     { code: 'fr', name: 'Français', file: 'fr.json' },
     { code: 'en', name: 'English', file: 'en.json' },
     { code: 'it', name: 'Italiano', file: 'it.json' }
   ],
   defaultLocale: 'it',
   lazy: true,
   langDir: '../locales/',
   vueI18n: './i18n.config.ts'
 }
})
