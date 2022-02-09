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
      <span v-if="buildString">Обновлено: {{ buildString }}</span>
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
    let buildString;
    try {
      const ts = document.documentElement.dataset.buildTimestamp || Date.now();
      const D = new Date();
      D.setTime(ts);

      buildString = new Intl.DateTimeFormat(
        'ru-RU',
        { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', }
      )
      .format(D);
    } catch (e) {
      console.error(e);
      buildString = false;
    }

    return {
      mdiAt,
      mdiFacebook,
      buildString,
    };
  },

  computed: {
  },
}
</script>
