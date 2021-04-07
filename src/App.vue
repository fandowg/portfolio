<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app flat dark>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="@/assets/images/avatar.jpg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>范宇宏</v-list-item-title>
          <v-list-item-subtitle>前端工程師</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item @click="gotoSection('#about')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>關於范宇宏</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="gotoSection('#skill')">
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>前端技能</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="gotoSection('#portfolio')">
            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>作品集</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="gotoSection('#job-experience')">
            <v-list-item-icon>
              <v-icon>mdi-chart-timeline-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>工作經歷</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="gotoSection('#contact')">
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
    <v-app-bar
      color="secondary"
      dark
      app
      dense
      flat
      inverted-scroll
      scroll-threshold="700"
      v-if="this.$vuetify.breakpoint.mobile"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="left-menu">
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Fandow</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main id="main" style="padding-top: 0">
      <v-parallax
        class="d-flex justify-center align-center"
        app
        :height="parallaxHeight"
        :src="require(`@/assets/images/${parallaxImg}`)"
      >
        <v-container
          fluid
          class="container d-flex justify-center align-center text-center flex-column black--text mt-banner"
        >
          <h1 class="text-md-h2 text-h3 text-uppercase font-weight-bold mb-4">
            Fandow <br />
            PORTFOLIO
          </h1>
          <p class="body-1">
            網頁設計師
            <v-icon color="secondary">mdi-arrow-top-right-thick</v-icon>
            前端工程師
          </p>
          <v-btn
            fab
            outlined
            color="grey darken-3"
            @click="gotoSection('#about')"
          >
            <v-icon> mdi-chevron-double-down </v-icon>
          </v-btn>
        </v-container>
      </v-parallax>

      <section id="about" class="px-md-6">
        <v-container class="pt-16">
          <v-row>
            <v-col lg="auto" sm="4" class="d-flex justify-center align-center">
              <v-avatar size="200">
                <img src="@/assets/images/avatar.jpg" />
              </v-avatar>
            </v-col>
            <v-col lg="9" sm="8" cols="12" class="pl-sm-6">
              <h2 class="font-weight-bold mb-3">關於 Fandow 范宇宏</h2>
              <v-divider class="mb-4"></v-divider>
              <v-responsive>
                <p>
                  我是 范宇宏，熱愛創新與學習，擔任網頁設計師已有 5
                  年資歷，非常熟悉 RWD 網頁製作，期間學習前端相關技能，使用 Vue
                  開發 SPA 網站。
                </p>
                <p>
                  擔任過網站開發團隊的不同職位，從網站企劃 → 網頁設計師 →
                  前端工程師，熟悉網站開發流程，能了解業主的需求，並快速的解決問題。
                </p>
                <p>
                  此外，我過去也是華語歌詞作者，賣出 4
                  首歌詞，對我來說從寫歌詞到寫程式，都是創作，歌詞和 coding
                  沒什麼不同。
                </p>

                <v-btn
                  color="primary"
                  depressed
                  link
                  href="https://www.cakeresume.com/fandow"
                  target="_blank"
                >
                  完整履歷 <v-icon>mdi-link</v-icon>
                </v-btn>
              </v-responsive>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section id="skill" class="px-md-6">
        <v-container class="pt-16">
          <h2 class="font-weight-bold mb-3">前端技能</h2>
          <v-divider class="mb-4"></v-divider>

          <p class="mb-8">前端學員永無止境，技能陸續增加中</p>

          <v-row class="">
            <v-col lg="2" md="3" cols="6">
              <v-icon large color="secondary">mdi-vuejs</v-icon>

              Vue
            </v-col>
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-jquery</v-icon> jQuery</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-language-javascript</v-icon>
              JavaScript</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-language-html5</v-icon>
              HTML5</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-sass</v-icon> SCSS</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-language-css3</v-icon>
              CSS3</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-webpack</v-icon>
              Webpack</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-github</v-icon> Git</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-vuetify</v-icon>
              Vuetify</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-bootstrap</v-icon>
              Bootstrap</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-cellphone-link</v-icon>
              RWD網頁設計</v-col
            >
            <v-col lg="2" md="3" cols="6"
              ><v-icon large color="secondary">mdi-image-filter-hdr</v-icon>
              Adobe XD</v-col
            >
          </v-row>
        </v-container>
      </section>
      <section id="portfolio" class="px-md-6">
        <v-container class="text-center pt-16">
          <!-- <h2 class="font-weight-bold mb-6 ">作品集</h2> -->
          <v-row>
            <v-col md="6" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5 text-md-h4">
                  CAMELBAK 購物網
                </v-card-title>
                <p>使用 Vue 做的 SPA 購物商城</p>
                <!-- <template slot="progress">
                  <v-progress-linear
                    color="primary"
                    height="2"
                    indeterminate
                  ></v-progress-linear>
                </template> -->
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_1_1.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  以世界知名品牌補水品牌 CAMELBAK
                  為主的購物網站，配合商品，做成整體無邊框設計，可加入購物車，有完整購買流程，產品列表可以多層篩選，產品資料也有製作後台可以上架。
                </v-card-text>
                <v-card-text class="px-0 black--text subtitle-1">
                  <v-chip class="mr-2"> Vue </v-chip>
                  <v-chip> Javascript </v-chip>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://fandowg.github.io/fandowShop"
                    target="_blank"
                  >
                    前往
                  </v-btn>

                  <v-btn
                    color="secondary"
                    class="btn-full"
                    href="https://github.com/fandowg/fandowShop"
                    target="_blank"
                  >
                    GitHub
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="6" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5 text-md-h4">
                  巨匠美語官網
                </v-card-title>
                <p>語言學習官網</p>

                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_2_1.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  功能完整的語言學習官網，各式課程介紹，部落格與影音內容，以網頁填單
                  → 分校打電話聯繫 →
                  面談報名為主要商業模式，另有學員專區給學員做劃位和請假等等的功能使用。
                </v-card-text>
                <v-card-text class="px-0 black--text subtitle-1">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <!-- <v-card-text class="px-0">
                </v-card-text> -->
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://www.soeasyedu.com.tw/"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  GaragePlay 官網
                </v-card-title>
                <p>形象官網，產品資料</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_3_1.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  發行過《屍速列車》《我和我的冠軍女兒》的車庫娛樂，於2017重新規劃官網，採用全版設計，主色調並不明顯，希望凸顯的，是電影本身。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> 已改版 </v-chip>
                  <!-- <v-chip class="mr-2"> Bootstrap </v-chip> -->
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://garageplay.tw/"
                    target="_blank"
                  >
                    目前網站(改版後)
                  </v-btn>
                  <v-btn
                    color="secondary"
                    class="btn-full"
                    href="https://fandowg.github.io/garageplay/"
                    target="_blank"
                  >
                    原作品
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  KINOPASS 院線通
                </v-card-title>
                <p>訂閱式服務</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_3_2.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  國外行之有年，但是國內還不流行的電影 pass
                  票，一段時間內電影看到飽的服務，希望能用訂閱制，給一些獨立電影發光的機會。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://fandowg.github.io/kinopass/"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  KINOSTREAM 雲端影城
                </v-card-title>
                <p>線上影城</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_3_3.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  擁有自己的線上影城，是每一個片商的夢想，不期待像是 Netflix
                  那樣的規模，只希望能夠放一些有趣的，主題性強的影片。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://fandowg.github.io/kinostream/"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  WeTIX 集氣購票網
                </v-card-title>
                <p>眾籌類型的網站</p>
                <v-img class="elevation-2" src="@/assets/images/project_3_4.jpg"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  有些電影台灣沒有上映，但是很多影迷很期待能夠在大螢幕看到這些電影，所以網站採用眾籌的方法，只須投票，票數到達門檻，就會和戲院合作，包下某個場次給影迷看這些電影。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://fandowg.github.io/wetix/"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  樂聲影城 LUX CINEMA 改版
                </v-card-title>
                <p>影城官網，含訂票流程</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_3_5.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  樂聲影城改版的官網，包含完整訂票流程，也可以線上劃位，使用電子票券、優惠券，在台灣的影城裡面算是E化做得很好的。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> 已改版 </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://www.luxcinema.com.tw/"
                    target="_blank"
                  >
                    目前網站(改版後)
                  </v-btn>
                  <v-btn
                    color="secondary"
                    class="btn-full"
                    href="https://fandowg.github.io/luxcinema/"
                    target="_blank"
                  >
                    原作品
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  TAIPEIBO 台北票房網
                </v-card-title>
                <p>票房資料網站</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_3_6.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  傾向給同業或者影評人使用的票房資訊網站，每日更新票房資料。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <!-- <v-chip class="mr-2"> Bootstrap </v-chip> -->
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://fandowg.github.io/taipeibo/"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5"> 師資招募頁 </v-card-title>
                <p>專案網頁</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_2_2.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  為了招募外籍講師做的專案招募頁面，採全版大背景設計。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://www.soeasyedu.com.tw/about-gjun-and-recruiting"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  巨匠美語課程頁
                </v-card-title>
                <p>產品介紹頁</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_2_3.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  簡單清楚的課程頁面設計，有做成一系列的課程產品頁面。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://www.soeasyedu.com.tw/life-english"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  巨匠集團介紹頁
                </v-card-title>
                <p>設計感較強的 about 頁面</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_2_4.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  配合設計做出的較複雜刻版的頁面，有中英文的版本，磨練css的作品。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> 純切版 </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://www.soeasyedu.com.tw/about-gjun"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  GaragePlay Japan
                </v-card-title>
                <p>子品牌的形象頁面</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_3_7.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  日式的網頁設計，以直式的文字與留白呈現，簡單乾淨，強調日本電影的高質感，當產品項目少的時候，也可用這種排版。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://garageplay.tw/japan"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5"> FlicksHouse </v-card-title>
                <p>子品牌的形象頁面</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_3_8.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  藝術片不再遙不可及，用最簡單的方式告訴你藝術電影的深奧，本網站採用不規則拼貼的設計，帶有文青氣息。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> Bootstrap </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://garageplay.tw/flickshouse"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  良友旅行 國內票券館
                </v-card-title>
                <p>獨立產品館</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_4_1.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  專門販售國內票券的旅行社旗下獨立產品特區，有自己的購買流程。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> 純切版 </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://www.ftstour.com.tw/FTS_TaiwanGo/RwdDefault.aspx"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="4" cols="12" class="">
              <v-card class="text-left" flat>
                <v-card-title class="px-0 text-h5">
                  良友旅行 國內專區
                </v-card-title>
                <p>獨立產品館</p>
                <v-img
                  class="elevation-2"
                  src="@/assets/images/project_4_2.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row> </template
                ></v-img>
                <v-card-text
                  class="stretch-content px-0 pb-0 black--text subtitle-1"
                >
                  旅行社的國內旅遊館，按照縣市分類，有多層篩選。
                </v-card-text>
                <v-card-text class="px-0">
                  <v-chip class="mr-2"> 純切版 </v-chip>
                  <v-chip> Jquery </v-chip>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="px-0 py-4">
                  <v-btn
                    color="primary"
                    class="btn-full"
                    href="https://www.ftstour.com.tw/b2c/taiwan/index.htm"
                    target="_blank"
                  >
                    前往
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section id="job-experience" class="px-md-6 grey lighten-5">
        <v-container class="py-8">
          <h2 class="font-weight-bold mb-6">工作經歷</h2>
          <!-- <v-divider class="mb-4"></v-divider> -->
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item color="secondary">
              <span slot="opposite">2018</span>
              <v-card class="elevation-2">
                <v-card-title>
                  <h3 class="text-md-h5 text-h6">
                    <span class="secondary--text">網站設計師</span>
                    <span class="d-inline-block">巨匠電腦</span>
                  </h3>
                </v-card-title>
                <v-card-text class="body-1">
                  <p>
                    主管看重我是具有企劃經驗的網頁設計師，將巨匠美語的網站改版交給我負責，我也不負眾望的完成改版，期間學習
                    SEO 相關知識，將網站 SEO 優化，提升自然流量 50%，增加約 30%
                    的網單目標，30% 的營收目標(2018年度)。
                  </p>
                  <p>
                    公司許多網頁都需要改版成RWD，期間完成許多 RWD
                    頁面，也規劃了巨匠美語的 APP
                    設計，協助公司其他事業體系的RWD網站設計。
                  </p>
                  <h4 class="body-1 secondary--text">
                    成就：獲得 2019 年巨匠集團「最佳行銷獎」。
                  </h4>
                  <span class="caption"
                    >(因為所屬行銷部門，雖是網頁設計但還是得行銷獎)</span
                  >
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="secondary">
              <span slot="opposite">2016</span>
              <v-card class="elevation-2">
                <v-card-title>
                  <h3 class="text-md-h5 text-h6">
                    <span class="secondary--text">網頁設計師</span>
                    <span class="d-inline-block">車庫娛樂</span>
                  </h3>
                </v-card-title>
                <v-card-text class="body-1">
                  <p>
                    很少有公司可以同時推5個以上的服務的，但是這家公司就是這樣，多虧老闆不停的有新的想法，所以我不斷地有新的網頁可以做，我們的服務不是只有電影而已，購票網站、線上VOD、或者是特定的服務，應有盡有。
                  </p>
                  <p>
                    這裡不像一般的網站製作，會有流程與企劃書，老闆一個想法，就開始做了，設計必須想流程與文字，還有和工程溝通，所以我的工作量很大，但我覺得這就是一種挑戰，網頁不斷的有新的技術與方法，所以我不停地問自己，有沒有更快、更直覺、更好的流程與介面，我想，這就是網頁設計的精隨。
                  </p>
                  <h4 class="body-1 secondary--text">
                    成就：3天設計並切好一個服務網站，一個月參與製作2到3個網站。
                  </h4>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="secondary">
              <span slot="opposite">2011</span>
              <v-card class="elevation-2">
                <v-card-title>
                  <h3 class="text-md-h5 text-h6">
                    <span class="secondary--text">網站企劃與文案</span>
                    <span class="d-inline-block">良友旅行社</span>
                  </h3>
                </v-card-title>
                <v-card-text class="body-1">
                  <p>
                    網站企劃的工作內容就是網站行銷內容的提案、文案和執行，比如季節性促銷活動、網站旅遊專題、網站新功能版型規劃等等，因為公司沒有設計，所以我們很多網頁的主視覺發包出去之後我們拿回來都要自己改，所以對於網頁設計有一些基礎，很多小專案的視覺也都是自己做。
                  </p>
                  <p>
                    比較大的工作項目是「沒事買買購物網」的成立，這個網站從一開始的發想、品牌概念、到後來的網站流程等等都是我一個人包辦，後期還有去談商品進貨等等的工作內容，雖然網站最後爛尾了，但是至少我有做過網站整體內容大規劃的經驗。
                    期間還有寫廣播廣告文案、製作形象小冊子、吉祥物設計等等的其他工作。
                  </p>
                  <h4 class="body-1 secondary--text">
                    成就：獨立規劃完成購物商城。
                  </h4>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="secondary">
              <span slot="opposite">2009</span>
              <v-card class="elevation-2">
                <v-card-title class="headline">
                  <h3 class="text-md-h5 text-h6">
                    <span class="secondary--text">簽約歌詞作者</span>
                    <span class="d-inline-block">福茂音樂</span>
                  </h3>
                </v-card-title>
                <v-card-text class="body-1">
                  <p>
                    曾經以為寫歌可以當飯吃，曾經好幾晚不睡為了一首歌，當然現在來看都是很幼稚的事情，但是要我再來，我還是會浪費兩年的時間為了賣出一首歌。
                  </p>
                  <p>
                    《犯規》 鬼鬼演唱 2012/12 ，中視 戀夏38°C片頭曲 <br />
                    《對角線》 陶妍霖演唱 2012/12 <br />
                    《夢想擴音機》 劉美麟 演唱 2013/05 <br />
                    《幸福的螺旋》 朱俐靜 演唱 2015/11， 星座愛情魔羯女 主題曲
                  </p>
                  <h4 class="body-1 secondary--text">
                    成就：完成夢想的一部分。
                  </h4>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </section>
      <section id="contact" class="px-md-6 grey lighten-3">
        <v-container class="py-8 pb-16">
          <h2 class="font-weight-bold mb-6" style="display: inline-block">
            聯絡方式
          </h2>

          <v-row class="align-center">
            <v-col md="3" cols="12">
              <v-icon>mdi-cellphone</v-icon> 0926837708
            </v-col>
            <v-col md="3" cols="12">
              <v-icon>mdi-email</v-icon> fandow@msn.com
            </v-col>
            <v-col md="3" cols="12">
              <v-icon>mdi-map-marker</v-icon>新北市 永和區
            </v-col>
            <v-col md="3" cols="12" class="">
              <a
                class="text-decoration-none primary--text font-weight-medium d-inline-block mr-2"
                href="https://www.facebook.com/yuhong.fan/"
                target="_blank"
              >
                <v-icon large>mdi-facebook</v-icon>
              </a>
              <a
                class="text-decoration-none primary--text font-weight-medium d-inline-block"
                href="https://github.com/fandowg"
                target="_blank"
              >
                <v-icon large>mdi-github</v-icon>
              </a>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    group: null,
    loading: true,
    selection: 1,
    sticky: false,
    parallaxHeight: 600,
    width: window.innerWidth,
    parallaxImg: 'top.jpg'
  }),
  mounted () {
    this.changeHeight()
    window.addEventListener('resize', this.changeHeight, { passive: true })
    window.addEventListener('resize', this.currentWidth)
  },
  watch: {
    width: {
      immediate: true,
      handler (newValue) {
        if (newValue <= 500) {
          this.parallaxImg = 'top_m.jpg'
        } else {
          this.parallaxImg = 'top.jpg'
        }
      }
    }
  },
  methods: {
    changeHeight () {
      if (this.$vuetify.breakpoint.mobile) {
        this.parallaxHeight = 500
      } else {
        this.parallaxHeight = 600
      }
    },
    currentWidth () {
      this.width = window.innerWidth
    },
    gotoSection (id) {
      this.$vuetify.goTo(id, {
        offset: 50
      })
      if (this.$vuetify.breakpoint.mobile) {
        this.drawer = false
      }
    }
  }
}
</script>
<style lang="scss">
@import "~vuetify/src/styles/settings/variables";
@import "@/assets/scss/helpers/_mixins";
.mt-banner {
  margin-top: 20%;
}
.full-height {
}
.v-btn.v-btn {
  text-transform: none;
}
.v-parallax__image.v-parallax__image {
  @include max(500px) {
    left: 20%;
    bottom: -10%;
  }
}
.btn-full {
  min-width: 90px !important;
  @include max(md) {
    flex-grow: 1 !important;
  }
}
.mobile-toggle.mobile-toggle {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 3;
  @include min(lg) {
    display: none;
  }
}
.left-menu.left-menu {
  position: absolute;
  left: 16px;
}
.col.col {
  display: flex;
}
.v-image.v-image {
  flex: 0 0 auto;
}
.v-card.v-card {
  display: flex;
  flex-direction: column;
}

.stretch-content {
  flex: 1 1 auto !important;
}
</style>
