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
          :src="imgTreeJpg"
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
import Menu from './components/Menu.vue';

import Title from './components/Title.vue';
import Intro from './components/Intro.vue';
import Actions from './components/Actions.vue';
import Officials from './components/Officials.vue';
import Flyers from './components/Flyers.vue';
import Resonance from './components/Resonance.vue';
import Infokiosk from './components/Infokiosk.vue';
import Stats from './components/Stats.vue';
import Footer from './components/Footer.vue';

import imgTreeJpg from './assets/tree.jpg';

export default {
  name: 'App',

  components: {
    Menu,
    Title,
    Intro,
    Actions,
    Officials,
    Flyers,
    Resonance,
    Infokiosk,
    Stats,
    Footer,
  },

  data() {
    return {
      imgTreeJpg,
    };
  },
};
</script>
