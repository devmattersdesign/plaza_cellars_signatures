import cheerio from "cheerio";
import dotenv from "dotenv"; dotenv.config();
export default {
    loading: false,
    optimization: { minimize: false },
    env: {
       CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
       CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
       CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
     },
     generate: {
        minify: false,
        minifyCSS: false,
        minifyJS: false,
    },
      // head: {
      //   // title: 'Plaza Cellars — Email Signatures',
      //   // htmlAttrs: {
      //   //   lang: 'en'
      //   // },
      //   // meta: [
      //   //   { charset: 'utf-8' },
      //   //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //   //   { hid: 'description', name: 'description', content: '' },
      //   //   { name: 'format-detection', content: 'telephone=no' }
      //   // ],
      //   // link: [
      //   //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      //   // ]
      // },

      // Global CSS: https://go.nuxtjs.dev/config-css
      css: [
      ],

      // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
      plugins: ["~/plugins/contentful"],

      // Auto import components: https://go.nuxtjs.dev/config-components
      components: false,

      // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
      buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ]

}
