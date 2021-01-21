module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fandowShop/'
    : '/',
  css: {
    extract: false
    // loaderOptions: {
    //   scss: {
    //     // 新版本sass-loader， 将data改成prependData进行配置
    //     prependData: '@import "@/scss/variables.scss";'
    //   }
    // }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return {
          ...options,
          // 修复静态资源引用的问题 vue cli 2 => vue cli 3 升级之后配置项由 transformToRequire 改为 transformAssetUrls
          transformAssetUrls: {
            // video: ['src', 'poster'],
            // source: 'src',
            // img: 'src',
            // image: 'xlink:href',
            // 在这里添加需要使用静态资源的自定义元素
            'v-img': 'src',
            'v-parallax': 'src'
          }
        }
      })
  }

}
