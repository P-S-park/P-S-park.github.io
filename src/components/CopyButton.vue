<template>
  <v-btn v-on:click="copy" outlined color="deep-orange">
    <v-icon small dark left>
      {{ copied ? 'mdi-check' : 'mdi-content-copy' }}
    </v-icon>Текст {{ copied ? ' скопирован' : '' }}
  </v-btn>
</template>

<script>

export default {
  name: 'copyButton',
  data: () => ({ copied: false }),
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
};

</script>
