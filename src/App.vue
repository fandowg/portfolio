<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app flat dark>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img
            src="https://scontent.ftpe7-1.fna.fbcdn.net/v/t31.0-1/c1043.0.643.643a/s200x200/13116275_1192686910765799_5167399299137142623_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=ZFXkvO4MtBoAX9jZT9B&_nc_ht=scontent.ftpe7-1.fna&tp=28&oh=8170795bd12219b716c40305ad3b4820&oe=602C7B05"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Fandow</v-list-item-title>
          <v-list-item-subtitle>前端工程師</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>關於Fandow</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>專業技能</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>作品集</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-chart-timeline-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>工作經歷</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>聯絡方式</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar class="transparent" app dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-toolbar-title>Fandow</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main style="padding-top: 0">
      <v-parallax
        class="d-flex justify-center align-center"
        app
        height="600"
        src="@/assets/images/top.jpg"
      >
        <!-- <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template> -->
        <v-container
          fluid
          class="container d-flex justify-center align-center text-center flex-column black--text mt-banner"
        >
          <h1 class="display-3 text-uppercase font-weight-bold mb-4">
            Fandow <br />
            PORTFOLIO
          </h1>
          <p>
            網頁設計師 <v-icon>mdi-arrow-top-right-thick</v-icon> 前端工程師
          </p>
          <v-btn fab outlined color="grey darken-3">
            <v-icon> mdi-chevron-double-down </v-icon>
          </v-btn>
        </v-container>
      </v-parallax>

      <!-- <v-img
        class="d-flex justify-center align-center "
        app
        :src="require('@/assets/images/top.jpg')"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        <v-container fluid class="container d-flex justify-center align-center text-center flex-column mt-banner">
          <h1 class="display-3 text-uppercase font-weight-bold mb-4">Fandow <br> PORTFOLIO</h1>
          <p>網頁設計師 <v-icon >mdi-arrow-top-right-thick</v-icon> 前端工程師</p>
 <v-btn fab outlined color="grey darken-3" >
            <v-icon >
              mdi-chevron-double-down
            </v-icon>
          </v-btn>
        </v-container>

      </v-img> -->

      <section>
        <v-container class="text-center py-8 px-12">
          <!-- <h2 class="font-weight-bold mb-6 ">作品集</h2> -->
          <v-row>
            <v-col md="6" class="">
              <v-card class="text-left mx-2" flat>
                <v-card-title class="px-0 h2 text-h4">
                  CAMELBAK品牌購物網
                </v-card-title>
                <p>使用 Vue 做的購物商城</p>

                <!-- <template slot="progress">
                  <v-progress-linear
                    color="primary"
                    height="2"
                    indeterminate
                  ></v-progress-linear>
                </template> -->

                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_1.jpg"
                ></v-img>

                <v-card-text class="px-0 pb-0 black--text subtitle-1">
                  以世界知名品牌補水品牌 CAMELBAK 為主的購物網站，配合商品，做成整體無邊框設計，有購物車，完整購買流程，產品資料也有製作後台可以上架。
                  </v-card-text>
                  <v-card-text class="px-0 black--text subtitle-1 justify-end">
                    <v-chip class="mr-2"> Vue </v-chip>
                    <v-chip> Javascript </v-chip>

                </v-card-text>
                <v-divider></v-divider>
                <!-- <v-card-text class="px-0">

                </v-card-text> -->
                <v-card-actions class="px-0 py-4">
                  <v-btn  color="primary"> 作品連結 </v-btn>
                  <v-btn  color="primary"> Github </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="6" class="">
              <v-card class="text-left mx-2" flat>
                <v-card-title class="px-0 h2 text-h4">
                  巨匠美語官網
                </v-card-title>
                <p>語言學習官網</p>

                <!-- <template slot="progress">
                  <v-progress-linear
                    color="primary"
                    height="2"
                    indeterminate
                  ></v-progress-linear>
                </template> -->

                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_2.jpg"
                ></v-img>

                <v-card-text class="px-0 pb-0 black--text subtitle-1">
                 功能完整的語言學習官網，各式課程介紹，部落格與影音內容，無線上金流，以網頁填單 → 分校打電話聯繫 → 面談報名為主要商業模式。
                  </v-card-text>
                  <v-card-text class="px-0 black--text subtitle-1 justify-end">
                    <v-chip class="mr-2"> Bootstrap </v-chip>
                    <v-chip> Jquery </v-chip>

                </v-card-text>
                <v-divider></v-divider>
                <!-- <v-card-text class="px-0">

                </v-card-text> -->
                <v-card-actions class="px-0 py-4">
                  <v-btn  color="primary"> 作品連結 </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>

            <v-col md="4" class="">
              <v-card class="text-left" flat>
                <!-- <template slot="progress">
                  <v-progress-linear
                    color="primary"
                    height="2"
                    indeterminate
                  ></v-progress-linear>
                </template> -->

                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_3.jpg"
                ></v-img>

                <v-card-title class="px-0"> CAMELBAK品牌購物網 </v-card-title>
                <v-card-text class="px-0">
                  以世界知名品牌補水品牌 CAMELBAK
                  為主的購物網站，配合商品，做成整體無邊框設計。
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Vue </v-chip>
                  <v-chip> Javascript </v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section>
        <v-container fluid class="text-center py-8">
          <h2 class="font-weight-bold mb-6">關於Fandow</h2>
          <v-responsive>
            <p>我是 Fandow，從事網頁設計已有五年的經歷。</p>

            <p class="mb-6">
              自學轉職前端工程師，熱愛創新與學習，做過網站PM，熟悉網站開發的流程，能為團隊帶來最大的貢獻。
            </p>
            <v-btn
              color="primary"
              depressed
              link
              href="https://github.com/fandowg/fandowShop"
              target="_blank"
            >
              完整履歷 <v-icon>mdi-link</v-icon>
            </v-btn>
          </v-responsive>
          <!-- <v-banner single-line :sticky="sticky">
          We can't save your edits while you are in offline mode.

          <template v-slot:actions>
            <v-btn text color="deep-purple accent-4"> Get Online </v-btn>
          </template>
        </v-banner> -->
        </v-container>
      </section>
      <section>
        <v-container fluid class="text-center py-8">
          <h2 class="font-weight-bold mb-6">前端技能</h2>
          <v-responsive>
            <p class="mb-8">前端學員永無止境，技能陸續增加中</p>
          </v-responsive>
          <v-row>
            <v-col md="2"
              ><v-icon large>mdi-vuejs</v-icon>
              <h3>Vue</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-jquery</v-icon>
              <h3>jQuery</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-language-javascript</v-icon>
              <h3>JavaScript</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-language-html5</v-icon>
              <h3>HTML5</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-sass</v-icon>
              <h3>SCSS</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-language-css3</v-icon>
              <h3>CSS3</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-webpack</v-icon>
              <h3>Webpack</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-github</v-icon>
              <h3>Git</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-vuetify</v-icon>
              <h3>Vuetify</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-bootstrap</v-icon>
              <h3>Bootstrap</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-cellphone-link</v-icon>
              <h3>RWD網頁設計</h3></v-col
            >
            <v-col md="2"
              ><v-icon large>mdi-image-filter-hdr</v-icon>
              <h3>Adobe XD</h3></v-col
            >
          </v-row>
        </v-container>
      </section>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<style lang="scss">
.mt-banner {
  // transform: rotate(-6deg);
  margin-top: 20%;
}
.full-height {
}
// .v-parallax__image {
//   transform: none !important;
//   width: 100% !important;
// }
// .v-parallax{
//   height: 100% !important;
//   img{
// height: 100%;
//   }
// }
</style>
<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    group: null,
    loading: true,
    selection: 1,
    sticky: false
  })

  // watch: {
  //   group () {
  //     this.drawer = false
  //   }
  // },
  // methods: {
  //   onClick () {
  //     // Perform an action
  //   }
  // }
}
</script>

<style lang="scss">
</style>
