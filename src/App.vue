<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      height="100"
    >

      <Menu />

      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
        v-if="$vuetify.breakpoint.smAndUp"
      >
        <v-img
          contain
          max-height="70%"
          :src="img.treejpg"
        ></v-img>
      </v-avatar>

      <v-toolbar-title class="text-h6 text-sm-h5 text-md-h4">
        Парк Покровское-Стрешнево
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <section id="hero" class="grey">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            :src="img.park"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      Сохраним парк
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-3']"
                      class="font-weight-black"
                    >
                      Покровское-Стрешнево
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="goTo('#problem')"
                  >
                    <v-icon v-html="icons.mdiChevronDoubleDown"></v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="problem">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Суть проблемы</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-left"
            max-width="720"
          >
          <p>Природно-исторический парк Покровское-Стрешнево ждёт беспрецедентная урбанизация с уничтожением сотен деревьев, условий для обитания животных, масштабными работами на роднике.</p>
          <p>Заказчик работ &mdash; Департамент капитального ремонта. Подряд на выполнение работ заключён в обход системы государственных закупок, без соблюдения требований антимонопольного законодательства, с компанией, не имеющей опыта работ на природных территориях.</p>
          <p>Невзирая на статусы особо охраняемой природной территории (ООПТ) и объекта культурного наследия (ОКН), планируемые в парке работы содержат многочисленные нарушения природоохранного и историко-культурного законодательства. Ответственные органы не реагируют. Ограждения уже выставлены, техника зашла в парк.</p>
          </v-responsive>

          <div></div>

          <v-btn
            class="align-self-end"
            fab
            outlined
            @click="goTo('#actions')"
          >
            <v-icon v-html="icons.mdiChevronDoubleDown"></v-icon>
          </v-btn>
        </v-container>

        <div class="py-5"></div>

      </section>

      <section id="actions" class="lime lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Действовать</h2>
        </v-container>

        <v-row>
          <v-col
            cols="12"
            md="8"
            offset-md="2"
          >

            <v-row dense>
              <v-col
                v-for="card in actions"
                :key="card.title"
                cols="12"
                md="4"
                lg="3"
                class="py-4 px-4"
              >
                <v-card>
                  <v-card-title tag="h2" v-text="card.title"></v-card-title>
                  <v-card-text v-html="card.html"></v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <component :is="card.component" />

                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>

      <section id="officials">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Куда обращаться</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>

          </v-row>

          <template>
            <v-expansion-panels focusable>
              <v-expansion-panel
                v-for="(item,i) in appeal"
                :key="i"
              >
                <v-expansion-panel-header>
                  <div class="text-h5 font-weight-regular">{{item.title}}</div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="text-left" v-html="item.html"></div>
                  <component :is="item.component" class="mt-2" />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>

        </v-container>

        <div class="py-12"></div>
      </section>

      <Glavcontrol2 />

      <Flyers />

      <Digging />

      <Resonance />

      <section id="kiosk" class="">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Зайдите в инфокиоск</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text, colsmd }, i) in kiosk"
              :key="i"
              cols="12"
              :md="colsmd || 4"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="primary"
                      size="88"
                    >
                      <v-icon
                        large
                        v-html="icons[icon]"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text
                  class="subtitle-1 text-left"
                  v-html="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <Stats />
      
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import btnGoToKiosk from './components/goButtons/kiosk.vue';
import btnClaims from './components/goButtons/claims.vue';
import btnDigging from './components/goButtons/digging.vue';
import Resonance from './components/Resonance.vue';
import MskProcuror from './components/appeals/MskProcuror.vue';
import Glavcontrol from './components/appeals/Glavcontrol.vue';
import Glavcontrol2 from './components/glavcontrol/Glavcontrol.vue';
import btnGoToGlavcontrol from './components/goButtons/glavcontrol.vue';
import Fence from './components/appeals/Fence.vue';
import Plants from './components/appeals/Plants.vue';
import Digging from './components/Digging.vue';
import Rfm from './components/appeals/Rfm.vue';
import Ksp from './components/appeals/Ksp.vue';
import Stats from './components/Stats.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
import Flyers from './components/Flyers.vue';

import data from './data';
import imgPark from './assets/park-autumn.jpg';
import imgTree from './assets/tree.png';
import imgTreejpg from './assets/tree.jpg';
import {
  mdiChevronDoubleDown,
  mdiContentCopy,
  mdiOpenInNew,
  mdiArrowDown,
  mdiMapMarker,
  mdiHelpCircle,
  mdiBullhornOutline,
} from '@mdi/js'

export default {
  name: 'App',

  components: {
    Glavcontrol,
    Glavcontrol2,
    btnGoToGlavcontrol,
    MskProcuror,
    Fence,
    Plants,
    Digging,
    Rfm,
    Ksp,
    btnGoToKiosk,
    btnClaims,
    btnDigging,
    Resonance,
    Stats,
    Footer,
    Menu,
    Flyers,
  },

  data: () => ({
    ...data,
    img: {
      park: imgPark,
      tree: imgTree,
      treejpg: imgTreejpg,
    },
    icons: {
      mdiChevronDoubleDown,
      mdiContentCopy,
      mdiOpenInNew,
      mdiArrowDown,
      mdiMapMarker,
      mdiHelpCircle,
      mdiBullhornOutline,
    },
  }),

  methods: {
    goTo(hash) {
      window.history && window.history.pushState(null, '', hash);
      this.$vuetify.goTo(hash);
    },
  },
};
</script>
