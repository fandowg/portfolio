import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920

    }
    // mobileBreakpoint: 960
    // scrollBarWidth: 60
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#000', // #E53935
        secondary: '#28a7c3', // #FFCDD2
        accent: '#3F51B5' // #3F51B5
      }
    }
  }
  // icons: {
  //   iconfont: 'mdi' // 默认值 - 仅用于展示目的
  // }
}

export default new Vuetify(opts)
