<template>
  <section id="hero" class="grey">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        :src="imageURL"
        v-on:error="onImageError"
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
                @click="goTo(next)"
              >
                <v-icon v-html="mdiChevronDoubleDown"></v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script>
import { mdiChevronDoubleDown } from '@mdi/js';
import imgParkWeb from '../assets/park-autumn.webp';
import imgParkWebFallback from '../assets/park-autumn.jpg';
import imgParkMob from '../assets/park-autumn-sqr.jpg';
import goTo from '../goto';

export default {
  computed: {
    imageURL() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return imgParkMob; // JPG
      } 
      
      return this.isWebpError ? imgParkWebFallback : imgParkWeb;
    },
  },
  
  data() {
    return {
      mdiChevronDoubleDown,
      imgParkMob,
      imgParkWeb,
      imgParkWebFallback,
      isWebpError: false,
    };
  },

  props: ['next', ],

  mixins: [
    goTo,
  ],

  methods: {
    onImageError(err) {
      console.log('image error', err);
      this.isWebpError = true;
    },
  },
}
</script>
