module.exports = {
  mode: 'universal',
  server: {
    port: 3003 // default: 3000
    // host: 'http://localhost' // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'opendata',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    // 'normalize-scss/sass/normalize/_import-now.scss',
    '@/assets/scss/style.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    // '~/plugins/vuelidate',
    // { src: '~/plugins/vue-google-auth.js', ssr: false },
    // { src: '~/plugins/fb-sdk.js', ssr: false },
    // { src: '~/plugins/vue2-editor.js', ssr: false },
    // { src: '~/plugins/socket', ssr: false },
    { src: '~/plugins/vue-infinite-loading', ssr: false },
    // { src: '~/plugins/vue-notification' },
    // { src: '~/plugins/vue-read-more', ssr: false },
    // { src: '~/plugins/vue-awesome-swiper' },
    // '~plugins/vue-js-modal'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/toast',
    // '@nuxtjs/axios',
    // 'vue-scrollto/nuxt'
  ],
  /*
 ** Nuxt.js dev-modules
 */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(webp)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        ],
        exclude: /(node_modules)/
      })
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vue: {
    config: {
      keyCodes: {
        backspace: 8
      }
    }
  }
}
