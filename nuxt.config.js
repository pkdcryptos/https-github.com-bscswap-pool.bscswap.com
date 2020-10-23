
export default {
  mode: 'spa',
  head: {
    title: "BSCswap LaunchField",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Decentralized Exchange of the Degens, by the Degens, for the Degens." },
      { hid: 'keywords', name: 'keywords', content: 'Dapp, DeFi, Staking, Token, DEGEN' },
      { name: 'twitter:title', content: 'pool.bscswap.com' },
      { name: 'twitter:description', content: "Decentralized Exchange of the Degens, by the Degens, for the Degens." },
      { name: 'twitter:image', content: '/logo.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@BSCswapProtocol' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'apple-touch-icon', href: '/logo.png' },
      { rel: 'shortcut icon', href: '/logo.png' }
    ]
  },

  router: {
    routeNameSplitter: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/bootstrap_vue',
    '@/plugins/i18n_vue',
    '@/plugins/web3_utils'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
