<template>
  <section id="actions" class="light-green accent-1">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Действовать</h2>
    </v-container>

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        class="py-4 px-4"
      >
        <v-card>
          <v-card-title>Что можете сделать Вы</v-card-title>
          <v-card-text>
            <ol>
              <li>Дежурить в парке. Для координации дежурств звоните по тел.
                <a href="tel:+79967139924">8 (996) 713-99-24</a>, <a href="tel:+79261366658">8 (926) 136-66-58</a>
                или лучше <a href="https://forms.gle/frztrnMZ4wSBvkqd8">заполните Анкету</a>.
              </li>
              <li>Вызывать полицию в парк и требовать документирования правонарушений. <a href="/police/" target="_self">Инструкция</a></li>
              <li>Записаться на личный прием в надзорные органы (материалы предоставим)</li>
              <li>Отправлять обращения по фактам нарушений.</li>
              <li>При наличии контактов в СМИ, просить осветить проблему.</li>
              <li>Распространять информацию о происходящем беззаконии и её авторах в соцсетях.</li>
            </ol>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        class="py-4 px-4"
      >
        <v-card>
          <v-card-title>Где дежурить</v-card-title>

          <v-row dense>
            <v-col
              v-for="place in places"
              :key="place.title"
              cols="12"
              sm="6"
              lg="4"
              xl="3"
              class="py-4 px-4"
            >
              <v-card color="#FFF8E1">
                <v-card-text v-text="place"></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <Fundraise />

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
      >
        <v-card>
          <v-card-title>Отправить письма</v-card-title>
        <v-row dense>
          <v-col
            v-for="card in letters"
            :key="card.title"
            cols="12"
            sm="6"
            lg="4"
            xl="3"
            class="py-4 px-4"
          >
            <v-card :color="card.check ? '#FEFEFE' : '#FFF8E1'" :flat="card.check">
              <v-card-title tag="h2" v-text="card.title"></v-card-title>
              <v-card-subtitle>{{formatDate(card.date)}}</v-card-subtitle>
              <v-card-text v-html="card.html"></v-card-text>
              <v-card-actions v-if="card.copytext">
                <CopyButton :text="card.copytext" :title="card.copytitle" />
              </v-card-actions>
              <v-card-actions>
                <v-checkbox
                  :off-icon="mdiCheckboxBlankOutline"
                  :on-icon="mdiCheckboxMarked"
                  v-model="card.check"
                  :label="card.check ? 'отправлено' : 'отправлено?'"
                />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
      >
        <v-row dense>
          <v-col
            v-for="card in actions"
            :key="card.title"
            cols="12"
            md="4"
            lg="3"
            class="py-4 px-4"
          >
            <v-card>
              <v-card-title tag="h2" v-text="card.title"></v-card-title>
              <v-card-text v-html="card.html"></v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <component :is="card.component" />

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
  
</template>


<script>
import CopyHashtags from '@/components/btnCopyHashtags.vue';
import CopyButton from '@/components/CopyButton.vue';
import { mdiCheckboxBlankOutline, mdiCheckboxMarked  } from '@mdi/js';
import letters from '@/letters';
import Fundraise from '@/components/Fundraise.vue';

/*
  Store user selection of checkboxes in browser localStorage
  Random hash is a key for each letter, value is 1 or 0.
*/
const DIVIDER_FIELDS = ':';
const DIVIDER_ROWS = ',';
const LS_KEY_LETTERS = 'LS_KEY_LETTERS';

const places = [
  'Сваи на склонах, особенно лестница',
  'Уже сваренную лестницу свести на нет',
  'Родники: настил, чтобы не начали сваи ставить',
  'Птичья петля: убрать свет, сделать дорожки из гранотсева и деревянные ограничители',
  'Детская площадка над родником — в старых границах, натуральное покрытие (пока не покажут проект с натуральным покрытием - не ставить бордюры и прочее)',
  'Покос леса и прудов',
  'Кафе у усадьбы: уже поставили фундамент, это ОКН, нужно отменить',
  'Трансформаторная будка у оврага — нельзя',
  'Тропы в лесу: нельзя терравей, нужен гранотсев',
];

// letters check state
const storedChecks = (localStorage.getItem(LS_KEY_LETTERS) || '')
  .split(DIVIDER_ROWS)
  .reduce((acc, c) => {
    const [key, value] = c.split(DIVIDER_FIELDS);
    acc[key] = !!(Number(value));
    return acc;
  }, {});

letters.forEach((letter) => letter.check = !!storedChecks[letter.hash]);

const actions = [
  {
    title: 'Разобраться',
    html: `Посмотрите, пожалуйста, <a href="https://youtu.be/W1UoPUczbzE">видео</a> с подробным разбором проекта.
    `,
  },
  {
    title: 'Фиксировать',
    html: `
      Фото происходящего в парке помечайте хэштегами:
        <code>#паркПокровскоеСтрешнево #ПокровскоеСтрешнево #СЗАО #Войковский #САО #собянин #PSpark #экологияМосквы</code>
    `,
    component: 'CopyHashtags',
  },
  {
    title: 'Подписать',
    html: `
      <ul>
        <li><a href="https://chng.it/wwPKsTF7">петиция</a> на Change.org </li>
        <li><a href="https://act.greenpeace.org/page/94412/action/1">петиция</a> GreenPeace</li>
      </ul>
      <p>Набравшие тысячи подписей петиции передают в мэрию или президенту.</p>`,
  },
  {
    title: 'Быть вместе',
    html: `
      Telegram <a href="https://t.me/streshnevo_save">@streshnevo_save</a>
      <br>ВКонтакте <a href="https://vk.com/pipstreshnevo">pipstreshnevo</a>
      <br>YouTube <a href="https://www.youtube.com/user/kampariin">kampariin</a>
      <br>Facebook <a href="https://www.facebook.com/groups/pipstreshnevo">pipstreshnevo</a>
      <br>Instagram <a href="https://www.instagram.com/streshnevo_news/">@streshnevo_news</a>
      <br>Эл. почта <a href="mailto:p.s.park@ya.ru">P.S.park@ya.ru</a>
    `,
  },
];

export default {
  components: {
    CopyHashtags,
    CopyButton,
    Fundraise,
  },

  data() {
    return {
      actions,
      letters,
      places,
      mdiCheckboxBlankOutline,
      mdiCheckboxMarked,
    };
  },

  methods: {
    formatDate(date) {
      const pad = (n) => n.toString().padStart(2, '0');
      const year = date.getFullYear();
      const month = 1 + date.getMonth();
      const day = date.getDate();
      return [year, month, day].map(pad).join('-');
    },
  },

  watch: {
    letters: {
      handler: letters => {
        const state = letters.map(letter => [letter.hash, +letter.check].join(':')).join(',');
        localStorage.setItem(LS_KEY_LETTERS, state);
      },
      deep: true,
    },
  },
}
</script>
