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
          <v-card-text class="doctext" v-text="text" />

          <v-card-actions>
            <CopyButton :text="text" />
            <v-btn outlined color="deep-orange" v-if="urlAttachments" :href="urlAttachments">
              <v-icon small dark left v-html="icons.mdiDownload" />
              приложения
            </v-btn>
            <v-btn outlined color="deep-orange" v-if="urlPdf" :href="urlPdf">
              <v-icon small dark left v-html="icons.mdiFilePdfBox" />
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
} from '@mdi/js';

export default {
  props: [
    'title',
    'brief',
    'recepients',
    'text',
    'urlAttachments',
    'urlPdf',
  ],
  data() {
    return {
      icons: {
        mdiClose,
        mdiContentCopy,
        mdiDownload,
        mdiFilePdfBox,
        mdiSend,
      },
      iconSvg: mdiClose,
      dialog: false,
      notifications: false,
      sound: false,
      widgets: false,
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
  }
</style>