<template>
  <section id="actions" class="lime lighten-3">
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
          <v-card-title>Что можете сделать Вы?</v-card-title>
          <v-card-text>
            <ol>
              <li>Вызывать полицию в парк и требовать документирования правонарушений. <a href="/police" target="_self">Инструкция</a></li>
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
          <v-card-title>Сбор средств на юриста</v-card-title>
          <v-card-text>

          <v-alert type="success" dense>
            <template v-slot:prepend>
              <v-icon v-html="mdiCheck" />
            </template>
            100 тыс. рублей собрали! Сбор пока закрыт. Люди, вы великие!
          </v-alert>
<p>Будем добиваться правовой оценки происходящего в судебном порядке. Для покрытия расходов на адвокатов и возможные экспертизы объявлен сбор средств. </p>
<h3>Задачи юристу</h3>
<p>Анализ всех материалов и выбор наиболее перспективного предмета иска. Ожидаем рекомендаций по наиболее эффективным действиям и юридического сопровождения.</p>
<h3>Цели</h3>
<p>Как минимум: остановка работ, отправка проекта «благоустройства» на экспертизу и возмещение причиненного ущерба.
  Как максимум: привлечение виновных к ответственности.</p>
<h3>Отчёты</h3>
<p>Ежемесячно: отчеты о проделанной работе и полученных результатах.</p>
<h3>Сроки</h3>
<p>Настраиваемся на несколько месяцев работы. К сожалению, никто ничего не может гарантировать, но количество нарушений так велико, что мы настроены на решительную борьбу!</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

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
            md="4"
            lg="3"
            class="py-4 px-4"
          >
            <v-card color="#FFF8E1">
              <v-card-title tag="h2" v-text="card.title"></v-card-title>
              <v-card-subtitle>{{formatDate(card.date)}}</v-card-subtitle>
              <v-card-text v-html="card.html"></v-card-text>
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
import MskProcuror from '@/components/appeals/MskProcuror.vue';
import btnClaims from '@/components/goButtons/claims.vue';
import btnGoToGlavcontrol from '@/components/goButtons/glavcontrol.vue';
import Glavcontrol from '@/components/appeals/Glavcontrol.vue';
import Fence from '@/components/appeals/Fence.vue';
import Birch from '@/components/appeals/Birch.vue';
import btnGoToKiosk from '@/components/goButtons/kiosk.vue';
import CopyHashtags from '@/components/btnCopyHashtags.vue';
import { mdiCheck, mdiCheckboxBlankOutline, mdiCheckboxMarked  } from '@mdi/js';

const letters = [
  {
    date: new Date(2022, 2, 22),
    title: 'Гидрогеология',
    html: `Близость Химкинского водохранилища, каптаж родников и безопасность. Запрос проектировщику. Копии в ДКР, ДПиООС, прокуратуру, управы.
      <a href="https://disk.yandex.ru/i/pUDEya06ri0SQQ">Документ</a>`,
    url: 'https://disk.yandex.ru/i/pUDEya06ri0SQQ',
  },
  {
    date: new Date(2022, 2, 22),
    title: 'Оранжерея',
    html: `Генстрой не по проекту разбирает стены оранжереи. Письмо в прокуратуру, копии в ДКН, МВД, МосПрироду, управу.
    <a href="https://disk.yandex.ru/i/VlZmoCTBSX2Kjg">Документ</a>`,
    url: 'https://disk.yandex.ru/i/VlZmoCTBSX2Kjg',
  },
  {
    date: new Date(2022, 2, 22),
    title: 'Кап. строительство',
    html: `Вопреки закону об ООПТ, ведётся строительство капитальных объектов. Письмо в прокуратуру, копии в МВД и МосПрироду.
    <a href="https://disk.yandex.ru/i/2hHYu3gObHnAPA">Документ</a>`,
    url: 'https://disk.yandex.ru/i/2hHYu3gObHnAPA',
  },
  {
    date: new Date(2022, 2, 22),
    title: 'Деревья и корни',
    html: `Работы в парке уже повредили корни деревьев, что приведёт к нежелательным последствиям. Письмо с приложением в прокуратуру, копии в МВД и МосПрироду.
    <a href="https://disk.yandex.ru/i/Tj5s-WwJB4tE7A">Документ</a> и <a href="https://disk.yandex.ru/i/EL3YO6ZfvyTmow">приложения</a>`,
    url: ['https://disk.yandex.ru/i/Tj5s-WwJB4tE7A', 'https://disk.yandex.ru/i/EL3YO6ZfvyTmow'],
  },
];

const actions = [
  {
    title: 'Разобраться',
    html: `Коротко: 26 основных претензий к реконструкции парка – см. ниже.
      <br>
      Подробнее: посмотрите, пожалуйста, <a href="https://youtu.be/W1UoPUczbzE">видео</a> с подробным разбором проекта.
    `,
    component: 'btnClaims',
  },
  // {
  //   title: 'Фиксировать',
  //   html: `
  //     Фото происходящего в парке помечайте хэштегами:
  //       <code>#паркПокровскоеСтрешнево #ПокровскоеСтрешнево #СЗАО #Войковский #САО #собянин #PSpark #экологияМосквы</code>
  //   `,
  //   component: 'CopyHashtags',
  // },
  {
    title: 'Инфокиоски',
    html: `У трёх входов в парк стоят будки для сбора мнений.
      Вот <a href="https://disk.yandex.ru/d/gwMRkx0RWQgKNA">фото страниц</a> альбома, который покажут.
      <br>Оставить там свои замечания:
      `,
    component: 'btnGoToKiosk'
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
      Facebook <a href="https://www.facebook.com/groups/pipstreshnevo">pipstreshnevo</a>
      <br>ВКонтакте <a href="https://vk.com/pipstreshnevo">pipstreshnevo</a>
      <br>Telegram <a href="https://t.me/streshnevo_save">@streshnevo_save</a>
      <br>Instagram <a href="https://www.instagram.com/streshnevo_news/">@streshnevo_news</a>
      <br>YouTube <a href="https://www.youtube.com/user/kampariin">kampariin</a>
      <br>Эл. почта <a href="mailto:p.s.park@ya.ru">P.S.park@ya.ru</a>
    `,
  },
];


export default {
  components: {
    MskProcuror,
    btnClaims,
    btnGoToGlavcontrol,
    Glavcontrol,
    Birch,
    Fence,
    btnGoToKiosk,
    CopyHashtags,
  },

  data() {
    return {
      actions,
      letters,
      mdiCheck,
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
}
</script>
