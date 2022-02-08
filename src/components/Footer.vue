<template>
  <v-footer
    class="justify-center"
    color="#292929"
    height="170"
  >
    <div class="title font-weight-light grey--text text--lighten-1 text-center">
      Россия, Москва, <abbr title="Северо-Западный административный округ">СЗАО</abbr> 
      и <abbr title="Северный административный округ">САО</abbr>, район Покровское-Стрешнево
      <br>Контакты:
      <v-btn href="mailto:ps-park@mail.ru" icon dark small ><v-icon dark v-html="mdiAt" /></v-btn>
      <v-btn href="https://www.facebook.com/groups/pipstreshnevo" icon dark small ><v-icon dark v-html="mdiFacebook" /></v-btn>
      <br>&copy; {{ (new Date()).getFullYear() }}, неравнодушные москвичи.
    </div>
  </v-footer>
</template>

<script>
import {
  mdiAt,
  mdiFacebook,
} from '@mdi/js';

export default {
  data() {
    return {
      mdiAt,
      mdiFacebook,
    };
  },
}
</script>
