<template>
  <v-btn v-on:click="copy" outlined color="deep-orange" :x-small="$vuetify.breakpoint.smAndDown">
    <v-icon small dark left v-html="iconSvg" :x-small="$vuetify.breakpoint.smAndDown" />
    Текст {{ copied ? ' скопирован' : '' }}
  </v-btn>
</template>

<script>
import { mdiCheck, mdiContentCopy } from '@mdi/js'

export default {
  name: 'copyButton',
  data: () => ({
    copied: false,
  }),
  props: ['text'],
  methods: {
    copy: function() {
      navigator.clipboard
        .writeText(this.text)
        .then(() => this.copied = '- скопирован!')
        .then(() => setTimeout(() => this.copied = false, 3000))
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
