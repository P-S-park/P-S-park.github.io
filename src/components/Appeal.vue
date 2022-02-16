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
        <v-icon small left v-html="icons.mdiSend" />
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
          <v-icon v-html="icons.mdiClose"></v-icon>
        </v-btn>
        <v-toolbar-title v-text="title || 'Обращение'" />
      </v-toolbar>
      <v-card>
        <v-card-title>Суть</v-card-title>
        <v-card-text v-text="brief" />

        <v-card-title>Адресаты</v-card-title>
        <v-card-text v-html="recepients" />
          
        <v-card-title>Текст обращения</v-card-title>
        <v-divider />
        <v-card-text class="doctext" v-text="text" />
        <v-divider />

        <v-card-actions>
          <CopyButton :text="text" />
          <v-btn :x-small="$vuetify.breakpoint.smAndDown" outlined color="deep-orange" v-if="urlLetter" :href="urlLetter">
            <v-icon :x-small="$vuetify.breakpoint.smAndDown" small dark left v-html="icons.mdiDownload" />
            текст
          </v-btn>
          <v-btn :x-small="$vuetify.breakpoint.smAndDown" outlined color="deep-orange" v-if="urlAttachments" :href="urlAttachments">
            <v-icon :x-small="$vuetify.breakpoint.smAndDown" small dark left v-html="icons.mdiDownload" />
            приложения
          </v-btn>
          <v-btn :x-small="$vuetify.breakpoint.smAndDown" outlined color="deep-orange" v-if="urlPdf" :href="urlPdf">
            <v-icon :x-small="$vuetify.breakpoint.smAndDown" small dark left v-html="icons.mdiFilePdfBox" />
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
  mdiDownload,
  mdiFilePdfBox,
  mdiSend,
} from '@mdi/js';

export default {
  props: [
    'title',
    'brief',
    'recepients',
    'text',
    'urlAttachments',
    'urlLetter',
    'urlPdf',
  ],
  data() {
    return {
      icons: {
        mdiClose,
        mdiDownload,
        mdiFilePdfBox,
        mdiSend,
      },
      dialog: false,
    };
  },
  computed: {
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
    height: 300px;
    overflow: scroll;
  }
</style>
