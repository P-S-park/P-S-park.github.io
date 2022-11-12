<template>
  <v-avatar
    class="mr-3"
    color="grey lighten-5"
    size="70"
    v-if="$vuetify.breakpoint.smAndUp"
  >
    <v-img
      contain
      max-height="70%"
      :src="imgTreeJpg"
      @click="goHome"
      class="pointer"
    ></v-img>
  </v-avatar>
</template>

<script>
import imgTreeJpg from '@/assets/tree.jpg';

const { BASE_URL } = import.meta.env;

export default {
  data() {
    return {
      imgTreeJpg,
    };
  },
  methods: {
    goHome() {
      window.location.href = BASE_URL;
    },
  },
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
