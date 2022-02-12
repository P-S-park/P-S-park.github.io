<template>
  <v-btn color="deep-orange" target="_self" outlined @click="goTo(anchor)">
    <v-icon small left v-html="iconSvg" />
    {{text}}
  </v-btn>
</template>

<script>
import { mdiArrowDown } from '@mdi/js'
import goto from '../goto';

export default {
  name: 'goButton',
  props: ['text', 'anchor'],
  data() {
    return {
      iconSvg: mdiArrowDown,
    };
  },
  mixins: [
    goto,
  ],
};

</script>
