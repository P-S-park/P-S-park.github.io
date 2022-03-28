<template>
  <v-footer
    class="justify-center"
    color="#292929"
    height="210"
  >
    <div class="title font-weight-light grey--text text--lighten-1 text-center">
      Россия, Москва, <abbr title="Северо-Западный административный округ">СЗАО</abbr> 
      и <abbr title="Северный административный округ">САО</abbr>, район Покровское-Стрешнево
      <br>Контакты:
      <v-btn href="https://t.me/streshnevo_save/" icon dark small ><v-icon dark v-html="siTelegram.path" /></v-btn>
      <v-btn href="https://vk.com/pipstreshnevo" icon dark small ><v-icon dark v-html="siVk.path" /></v-btn>
      <v-btn href="mailto:p.s.park@ya.ru" icon dark small ><v-icon dark v-html="mdiAt" /></v-btn>
      <v-btn href="https://www.facebook.com/groups/pipstreshnevo" icon dark small ><v-icon dark v-html="mdiFacebook" /></v-btn>
      <v-btn href="https://www.instagram.com/streshnevo_news/" icon dark small ><v-icon dark v-html="mdiInstagram" /></v-btn>
      <span v-if="buildString" class="ml-4">Обновлено: {{ buildString }}</span>
      <br>&copy; {{ (new Date()).getFullYear() }}, неравнодушные москвичи.
    </div>
  </v-footer>
</template>

<script>
import {
  mdiAt,
  mdiFacebook,
  mdiInstagram,
} from '@mdi/js';

import { siVk, siTelegram } from 'simple-icons/icons';

export default {
  data() {
    let buildString;
    try {
      const ts = document.documentElement.dataset.buildTimestamp || Date.now();
      const D = new Date();
      D.setTime(ts);
      D.setMinutes(5 * Math.round(D.getMinutes() / 5)); // round to 5 minutes

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
      mdiInstagram,
      siVk,
      siTelegram,
      buildString,
    };
  },

  computed: {
  },
}
</script>
