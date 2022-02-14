<template>
  <v-dialog
    v-model="dialog"
    :hide-overlay="isMobile"
    transition="dialog-bottom-transition"
    max-width="960"
    :fullscreen="isMobile"
  >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="deep-orange"
          outlined
          v-bind="attrs"
          v-on="on"
        >
          <v-icon small left v-html="mdiSend" />
          Отправить
        </v-btn>
      </template>

      <v-card>
        <v-toolbar
          dark
          color="green"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon v-html="mdiClose"></v-icon>
          </v-btn>
          <v-toolbar-title v-text="title || 'Обращение'" />
        </v-toolbar>
        <v-card>
          <v-card-title>Суть</v-card-title>
          <v-card-text v-text="brief" />

          <v-card-title>Адресаты</v-card-title>
          <v-card-text>
            <v-radio-group v-model="targetIndex">
              <v-radio
                :on-icon="mdiRadioboxMarked"
                :off-icon="mdiRadioboxBlank"
                v-for="(item, n) in targets"
                :key="n"
                :label="item.recepient"
                :value="n"
              ></v-radio>
            </v-radio-group>
            <div v-html="address" />
          </v-card-text>
          <v-divider />
          <v-row>
            <v-col cols="10" offset="1">
              <v-card-text class="doctext" v-text="text" />
            </v-col>
          </v-row>
          <v-divider />

          <v-card-actions>
            <CopyButton :text="text" />
            <v-btn :x-small="$vuetify.breakpoint.smAndDown" outlined color="deep-orange" v-if="urlLetter" :href="urlLetter">
              <v-icon :x-small="$vuetify.breakpoint.smAndDown" small dark left v-html="mdiDownload" />
              текст
            </v-btn>
            <v-btn :x-small="$vuetify.breakpoint.smAndDown" outlined color="deep-orange" v-if="urlAttachments" :href="urlAttachments">
              <v-icon :x-small="$vuetify.breakpoint.smAndDown" small dark left v-html="mdiDownload" />
              приложения
            </v-btn>
            <v-btn :x-small="$vuetify.breakpoint.smAndDown" outlined color="deep-orange" v-if="urlPdf" :href="urlPdf">
              <v-icon :x-small="$vuetify.breakpoint.smAndDown" small dark left v-html="mdiFilePdfBox" />
              PDF
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-card>

  </v-dialog>  
</template>

<script>
import CopyButton from './CopyButton.vue';

import {
  mdiClose,
  mdiContentCopy,
  mdiDownload,
  mdiFilePdfBox,
  mdiSend,
  mdiRadioboxBlank,
  mdiRadioboxMarked,
} from '@mdi/js';

export default {
  props: [
    'title',
    'brief',
    'targets', // array of items with props: 
                  // 'recepient',
                  // 'text',
                  // 'urlAttachments',
                  // 'urlLetter',
                  // 'urlPdf',
  ],
  data() {
    return {
      mdiClose,
      mdiContentCopy,
      mdiDownload,
      mdiFilePdfBox,
      mdiSend,
      mdiRadioboxBlank,
      mdiRadioboxMarked,

      dialog: false,
      targetIndex: 0,
    };
  },
  computed: {
    target() {
      return this.targets[this.targetIndex];
    },
    address() {
      return this.target.address; 
    },
    text() {
      return this.target.text; 
    },
    urlLetter() {
      return this.target.urlLetter; 
    },
    urlAttachments() {
      return this.target.urlAttachments; 
    },
    urlPdf() {
      return this.target.urlPdf; 
    },
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  },
  components: {
    CopyButton,
  },
}
</script>

<style scoped>
  .doctext {
    white-space: pre-line;
    height: 250px;
    overflow: scroll;
    background-color: #FFF8E1;
  }
</style>