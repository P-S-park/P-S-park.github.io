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

      <Intro next="#actions" />

      <Actions />

      <Officials />

      <Flyers />

      <Resonance />

      <Infokiosk />

      <Stats />
      
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import Title from './components/Title.vue';
import Intro from './components/Intro.vue';
import Officials from './components/Officials.vue';
import Actions from './components/Actions.vue';
import Resonance from './components/Resonance.vue';
import Infokiosk from './components/Infokiosk.vue';
import Stats from './components/Stats.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
import Flyers from './components/Flyers.vue';

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
    Intro,
    Officials,
    Actions,
    Resonance,
    Infokiosk,
    Stats,
    Footer,
    Menu,
    Flyers,
  },

  data: () => ({
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
