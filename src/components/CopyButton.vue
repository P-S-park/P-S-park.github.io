<template>
  <v-btn v-on:click="copy" outlined color="deep-orange">
    <v-icon small dark left v-html="iconSvg" />
    Текст {{ copied ? ' скопирован' : '' }}
  </v-btn>
</template>

<script>
import { mdiCheck, mdiContentCopy } from '@mdi/js'

export default {
  name: 'copyButton',
  data: () => ({
    copied: false,
    iconSvg: mdiContentCopy,
  }),
  props: ['text'],
  methods: {
    copy: function() {
      navigator.clipboard
        .writeText(this.text)
        .then(() => this.copied = '- скопирован!')
        .then(() => setTimeout(() => this.copied = '', 3000))
        .catch(console.error)
      ;
    },
  },
  computed: {
    iconSvg() {
      return this.copied ? mdiCheck : mdiContentCopy;
    },
  },
};

</script>
