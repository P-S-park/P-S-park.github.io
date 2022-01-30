<template>
  <v-btn color="deep-orange" target="_self" outlined @click="$vuetify.goTo(anchor)">
    <v-icon small left>mdi-arrow-down</v-icon>
    {{text}}
  </v-btn>
</template>

<script>

export default {
  name: 'goButton',
  props: ['text', 'anchor'],
};

</script>
