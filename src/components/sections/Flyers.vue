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
            v-for="pdf in pdfs"
            :key="pdf.url"
            cols="6"
            sm="3"
          >
            <v-card color="grey">
              <v-lazy transition="fade-transition">
                <v-img contain :aspect-ratio="210/297" :src="pdf.png" max-height="350" />
              </v-lazy>
              <v-card-actions>
                <v-btn dark color="deep-orange" :href="pdf.url" class="mx-auto">
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
import preview3 from '@/assets/flyers/list-3-preview.png';
import preview7 from '@/assets/flyers/list-7-preview.png';

import { mdiDownload } from '@mdi/js';

const pdfs = [
  { url: 'https://disk.yandex.ru/i/2tQyPJh5vvPx-g', png: preview7 },
  { url: 'https://disk.yandex.ru/i/h7_80Dxk_TGNNw', png: preview3 },
];

export default {

  data() {
    return {
      pdfs,
      mdiDownload,
    };
  },
}
</script>
