import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#00CD81'
  },
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  buildModules: [
    'vue-plausible'
  ],
  plausible: {
    domain: ''
  },
  target: 'static',
  pwa: {
    manifest: {
      name: 'Masternetwork documentation'
    }
  }
})
