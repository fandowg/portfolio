import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1280,
      xl: 1920
    },
    scrollBarWidth: 24
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#000', // #E53935
        secondary: '#FFCDD2', // #FFCDD2
        accent: '#3F51B5' // #3F51B5
      }
    }
  }
  // icons: {
  //   iconfont: 'mdi' // 默认值 - 仅用于展示目的
  // }
}

export default new Vuetify(opts)
