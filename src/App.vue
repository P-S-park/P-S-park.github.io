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
      <Title next="#problem" />

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

      <Actions />

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
                  <component :is="item.component" :title="item.btnTitle" class="mt-2" />
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
                class="py-12"
                color="grey lighten-4"
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
import Title from './components/Title.vue';
import btnCopyCode from './components/btnCopyCode.vue';
import Actions from './components/Actions.vue';
import Resonance from './components/Resonance.vue';
import Glavcontrol2 from './components/glavcontrol/Glavcontrol.vue';
import Digging from './components/Digging.vue';
import Stats from './components/Stats.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
import Flyers from './components/Flyers.vue';

import data from './data';
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

import goTo from './goto';

export default {
  name: 'App',

  components: {
    Title,
    Actions,
    Glavcontrol2,
    btnCopyCode,
    Digging,
    Resonance,
    Stats,
    Footer,
    Menu,
    Flyers,
  },

  data: () => ({
    ...data,
    img: {
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

  mixins: [
    goTo,
  ],

  methods: {
    copy(text) {
      navigator.clipboard.writeText(text)
        .catch(console.error)
      ;
    },
  },
};
</script>
