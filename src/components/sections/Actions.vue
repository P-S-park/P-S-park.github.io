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
              <li>
                Отправлять обращения по фактам нарушений на портал <a href="https://gorod.mos.ru/">Наш город</a> и в профильные ведомства:
                ДПиООС, Мосприрода, ДКН. Аббревиатуры расшифрованы <a target="_self" href="#dictionary">ниже</a>.
              </li>
              <li>
                Распространять информацию о происходящем беззаконии и её авторах в соцсетях.
                <br />Размещая посты во ВКонтакте, упоминайте тэгами ответственные организации, чиновников и муниципальных депутатов
                <v-btn @click="toggleVk" x-small>список тэгов ВК</v-btn>

                <div id="vk-tags" v-if="showVk">
                  <v-row>
                    <v-col xs="12" md="6">
                  <h3 class="my-4">Аккаунты ВКонтакте, чтобы отмечать в постах</h3>
                  <h4>Департаменты Москвы</h4>
                  <ul>
                    <li><code>@dkr_mos</code> Департамент капитального ремонта </li>
                    <li><code>@dpioosmos</code> Департамент природопользования Москвы </li>
                    <li><code>@moscowdkn</code> Мосгорнаследие</li>
                    <li><code>@mospriroda</code> Мосприрода</li>
                    <li><code>@ecoproskurkino</code> Дирекция ПТ "Тушинский", "Покровское-Стрешнево"</li>
                  </ul>

                  <h4>Районные организации</h4>
                    <ul>
                      <li><code>@szaomos</code> Префектура СЗАО города Москвы</li>
                      <li><code>@public218764000</code> Управа района Покровское-Стрешнево</li>
                      <li><code>@voikovskii</code> управа района Войковский</li>
                    </ul>

                    <h4>Надзорные органы</h4>
                    <ul>
                      <li><code>@sledcomru</code> Следственный комитет Российской Федерации</li>
                      <li><code>@moscowproc</code> прокуратура москвы</li>
                    </ul>

                    <h4>Общественный народный фронт</h4>
                    <ul>
                      <li><code>@zhandarovajulia1</code> Юлия Жандарова, Московское отделение ОНФ</li>
                    </ul>
                  </v-col>
                  <v-col>
                    <h4>Муниципальные депутаты:</h4>
                    <ul>
                      <li><code>@id111810536</code> Павел Черкасов, </li>
                      <li><code>@id712829694</code> Елена Волкова </li>
                      <li><code>@yuliya.kochetova</code> Юлия Кочетова </li>
                      <li><code>@id528516922</code> Марина Климова </li>
                      <li><code>@id545590723</code> Наталья Чекалдина</li>
                      <li><code>@yuris</code> Юрий Силантьев </li>
                      <li><code>@snadehina</code> Светлана Надёхина </li>
                      <li><code>@oldpolkovnik</code> Николай Страхов</li>
                      <li><code>@leonovavk</code> Вера Леонова </li>
                      <li><code>@id714488058</code> Татьяна Бухмина </li>
                      <li><code>@doctormaksimyak</code> Ирина Максимяк</li>
                      <li><code>@id720990258</code> Анна Комиссарова</li>
                    </ul>

                    <h4>Рабочие организации</h4>
                    <ul>
                      <li><code>@public212623149</code> ГБУ "Жилищник района Покровское-Стрешнево" </li>
                      <li><code>@dgkhmoscow</code> ДЖКХ</li>
                      <li><code>@dtroad</code> Дептранс Москвы</li>
                      <li><code>@mosroad</code> Московские дороги</li>
                    </ul>
                  </v-col>
                  </v-row>
                </div>
              </li>
              <li>Дежурить в парке. Для координации дежурств звоните по тел.
                <a href="tel:+79967139924">8 (996) 713-99-24</a>, <a href="tel:+79261366658">8 (926) 136-66-58</a>
                или лучше <a href="https://forms.gle/frztrnMZ4wSBvkqd8">заполните Анкету</a>.
              </li>
              <li>
                В случае наблюдения в парке правонарушения - вызывать полицию в парк и требовать документирования правонарушений. <a href="/police/" target="_self">Инструкция</a>
              </li>
              <li>
                При наличии контактов в СМИ, просить осветить проблему.
              </li>

            </ol>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <Fundraise />

    <Court />

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
      >
        <v-row dense>
          <v-col
            v-for="card, i in actions"
            :key="card.title"
            cols="12"
            md="4"
            :lg="i === 1 ? 6 : 3"
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
import Court from '@/components/Court.vue';

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
    html: `<a href="https://youtu.be/W1UoPUczbzE">Претензии к проекту</a> — подробное видео.
      <p>
        Фильм о нашем Парке в четырёх частях. Вышли первые две части:
        <ol>
          <li><a href="https://youtu.be/A64Y-Jch8n8">Покровское-Стрешнево: история от XVII века до декабря 2021 года</a></li>
          <li><a href="https://www.youtube.com/watch?v=9tWMqHMH8QM">Вторжение</a></li>
        </ol>
      </p>
    `,
  },
  {
    title: 'Фиксировать',
    html: `
      Фото и видео происходящего в парке помечайте хэштегами:
        <code>#паркПокровскоеСтрешнево #ПокровскоеСтрешнево #СЗАО #Войковский #САО #собянин #PSpark #экологияМосквы</code>
      <p>Размещайте фото в наших соц. сетях</p>
    `,
    component: 'CopyHashtags',
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
    Court,
  },

  data() {
    return {
      actions,
      letters,
      places,
      mdiCheckboxBlankOutline,
      mdiCheckboxMarked,
      showVk: false,
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
    toggleVk(e) {
      e.preventDefault();
      e.stopPropagation();
      this.showVk = !this.showVk;
    }
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
