module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'REI Cedar Style Guide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cedar Documentation Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Add modules
  */
  modules: [
    '@nuxtjs/markdownit'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~/assets/css/cedar-components.scss',
    '~/assets/css/main.scss'
  ],
  plugins: [
    { src: '~/plugins/live-edit', ssr: false }
  ],
  generate: {
    dir: 'docs'
  },
  router: {
    middleware: 'home-route',
    base: process.env.NODE_ENV === 'prod' ? '/rei-cedar-docs/' : '/'
  }
}
