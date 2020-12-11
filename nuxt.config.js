export default {
  srcDir: 'src',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'resume-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito%3A200%2C300%2C400%2C600%2C700%2C800%2C900%7CPoppins%3A300%2C400%2C500%2C600' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', file: 'en.js' }
    ],
    lazy: true,
    langDir: 'locale/',
    defaultLocale: 'en',
  },

  styleResources: {
    scss: '@/assets/scss/_mixin.scss'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
