<template>
  <section id="flyers" class="grey darken-2">
    <div class="py-12"></div>
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3 white--text">Листовки</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-responsive class="mx-auto mb-8" max-width="960">
        <v-row class="text-left">
          <v-col
            v-for="n of 4"
            :key="n"
            cols="6"
            sm="3"
          >
            <v-card color="grey">
              <v-lazy transition="fade-transition">
                <v-img contain :aspect-ratio="210/297" :src="getPreview(n)" max-height="350" />
              </v-lazy>
              <v-card-actions>
                <v-btn dark color="deep-orange" :href="getLink(n)" class="mx-auto">
                  <v-icon small dark left v-html="mdiDownload" />
                  PDF
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </section>
</template>

<script>
import preview1 from '@/assets/list-1-preview.png';
import preview2 from '@/assets/list-2-preview.png';
import preview3 from '@/assets/list-3-preview.png';
import preview4 from '@/assets/list-4-preview.png';

import { mdiDownload } from '@mdi/js';

const links = [
  'https://disk.yandex.ru/i/l16WfT6Jp3mt3g',
  'https://disk.yandex.ru/i/NmFTbk93geUS4Q',
  'https://disk.yandex.ru/i/h7_80Dxk_TGNNw',
  'https://disk.yandex.ru/i/ivyql4tcSESyjA',
];

export default {

  data() {
    return {
      preview1,
      preview2,
      preview3,
      preview4,
      mdiDownload,
    };
  },

  methods: {
    getPreview(n) {
      return this['preview' + n];
    },
    getLink(n) {
      return links[(n - 1) % links.length];
    },
  },
}
</script>
