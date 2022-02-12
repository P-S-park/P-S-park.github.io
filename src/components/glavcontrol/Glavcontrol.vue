<template>
  <section id="glavcontrol" class="green lighten-3">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Глав. Контроль</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
    </v-container>

    <v-container max-width="760">
      <v-card>
        <v-card-title>В Главное Контрольное управление г. Москвы</v-card-title>
        <v-card-text>
          <p>Мы подготовили два продуманных письма, в которых сгруппировали основные нарушения, происходящие в парке.</p>

          <h3>Куда отправлять</h3>
          <a href="https://www.mos.ru/feedback/reception/?department=21375090">Эл. приёмная</a>
          <br>Поставить галочку <code>Обращение должностному лицу</code> 
          и выбрать получателя: <code>Данчиков Евгений Александрович</code>

          <h3>Как вставить текст</h3>
          <p>
            В эл. приёмной правительства Москвы заблокирована возможность вставки скопированного текста.
            <br>Чтобы обойти блокировку в браузере на компьютере, надо на странице отправки сообщения открыть Консоль браузера:
            <br>нажать F12 или одновременно Ctrl + Shift + J (на Mac это Cmd + Option + J)
            <br>скопировать в неё следующий код: <code>document.addEventListener('paste', e => e.stopImmediatePropagation(), true);</code>
            <br>и нажать Enter, чтобы он выполнился. После этого получится вставить текст через Ctrl + C,  Ctrl + V
          </p>

          <v-radio-group v-model="targetIndex">
            <v-radio
              :on-icon="mdiRadioboxMarked"
              :off-icon="mdiRadioboxBlank"
              v-for="(item, n) in targets"
              :key="n"
              :label="item.title"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
          
        <v-card-title>Суть вопроса</v-card-title>
        <v-card-text v-text="item.subj" />

        <v-card-title>Содержание обращения</v-card-title>
        <v-card-text class="doctext" v-text="item.text" />

        <v-card-actions>
          <CopyButton :text="item.text" />
          <v-btn  :x-small="$vuetify.breakpoint.smAndDown" outlined color="deep-orange" v-if="item.urlLetter" :href="item.urlLetter">
            <v-icon  :x-small="$vuetify.breakpoint.smAndDown" dark left v-html="mdiDownload" />
            текст
          </v-btn>
          <v-btn  :x-small="$vuetify.breakpoint.smAndDown" outlined color="deep-orange" v-if="item.urlAttachment" :href="item.urlAttachment">
            <v-icon  :x-small="$vuetify.breakpoint.smAndDown" dark left v-html="mdiDownload" />
            приложения
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-container>

    <div class="py-12"></div>
  </section>  
</template>

<script>
import {
  mdiRadioboxBlank,
  mdiRadioboxMarked,
  mdiFilePdfBox,
  mdiDownload,
} from '@mdi/js';

import text1 from './letter-text-1';
import text2 from './letter-text-2';
import CopyButton from '../CopyButton.vue';

const subj1 = `Нарушения при Закупке, формулировка ТЗ содержащая недопустимые для ООПТ и ОКН мероприятия`;
const subj2 = `Неэффективное исполнение государственных программ`;

const targets = [
  {title: 'Письмо 1', text: text1, subj: subj1, urlLetter: 'https://disk.yandex.ru/i/sozYVSfnvqoOYw', urlAttachment: 'https://disk.yandex.ru/i/j2sOhWyFJDrhuQ', },
  {title: 'Письмо 2', text: text2, subj: subj2, urlLetter: 'https://disk.yandex.ru/i/9dDNgsIxKcjHhA', urlAttachment: 'https://disk.yandex.ru/i/Xf175BZ3lPT-WA', },
];

export default {
  data() {
    return {
      mdiRadioboxBlank,
      mdiRadioboxMarked,
      mdiFilePdfBox,
      mdiDownload,
      targetIndex: 0,
      targets,
      urlImagesFolder: 'https://disk.yandex.ru/d/VPGmFiw7Ej7eeQ',
      urlImagesZip: 'https://disk.yandex.ru/d/7LadCTjsMTAXCw',
    };
  },

  components: {
    CopyButton, 
  },

  computed: {
    item() {
      return targets[this.targetIndex];
    },
  },
}
</script>

<style scoped>
  .doctext {
    white-space: pre-line;
    height: 300px;
    overflow: scroll;
  }
</style>
