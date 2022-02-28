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

      <Stats />
      
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import Menu from '@/components/Menu.vue';

import Stats from '@/components/sections/Stats.vue';
import Footer from '@/components/Footer.vue';

import imgTreeJpg from './assets/tree.jpg';

export default {
  name: 'App',

  components: {
    Menu,
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
