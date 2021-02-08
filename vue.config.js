module.exports = {
  publicPath: './',
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return {
          ...options,
          transformAssetUrls: {
            'v-img': 'src',
            'v-parallax': 'src'
          }
        }
      })
  }

}
