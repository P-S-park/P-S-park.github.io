<template>
  <v-btn
    color="deep-orange"
    outlined
    dark
    href="https://forms.gle/q8poLihQjfXYhKgf9"
  >
    <v-icon small left v-html="iconSvg"></v-icon>
    Заполните форму
  </v-btn>
</template>


<script>
import { mdiOpenInNew } from '@mdi/js'


export default {
  data: () => {
    return {
      iconSvg: mdiOpenInNew,
    };
  },
}
</script>