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
import MskProcuror from './appeals/MskProcuror.vue';
// import btnDigging from './goButtons/digging.vue';
import btnClaims from './goButtons/claims.vue';
import btnGoToGlavcontrol from './goButtons/glavcontrol.vue';
// import Plants from './appeals/Plants.vue';
import Glavcontrol from './appeals/Glavcontrol.vue';
import Fence from './appeals/Fence.vue';
import btnGoToKiosk from './goButtons/kiosk.vue';
// import Rfm from './appeals/Rfm.vue';
// import Ksp from './appeals/Ksp.vue';


const actions = [
  {title: 'Наказать', 
    html: `Сейчас уничтожают результаты совсем недавнего «улучшения» парка. Миллиарды <s>растащены</s> потрачены впустую?
    <br>Заявление в прокуратуру:`,
    component: 'MskProcuror'},
  // {title: 'Ивы и траншея', 
  //   html: `Трактором роют траншею у 4-го пруда. Ивы под угрозой! Отправить 6 обращений.`,
  //   component: 'btnDigging'},
  {title: 'Требовать', html: 'Список основных претензий к реконструкции парка:', component: 'btnClaims', },
  {title: 'Остановить', html: `В Глав. Контроль Москвы два письма 
    о грубых нарушениях при закупках, 
    поставновке задачи 
    и неэффективности реализации гос. программ`, component: 'btnGoToGlavcontrol', },
  // {title: 'Штрафовать', 
  //   html: `4-го февраля трактор повредил несколько зелёных насаждений. Должны оштрафовать!`,
  //   component: 'Plants'},
  {title: 'Восстановить', 
    html: `3-го февраля снесли две только недавно устроенные спорт-площадки около Четвёртого пруда. Зачем!`,
    component: 'Glavcontrol'},
  {title: 'Контролировать', 
    html: 'Мы можем, и будем осуществлять Общественный Контроль. Требуем убрать непрозрачные сетки!',
    component: 'Fence'},
  {
    title: 'Инфокиоски',
    html: `У трёх входов в парк стоят будки для сбора мнений.
      <br>Вот <a href="https://disk.yandex.ru/d/gwMRkx0RWQgKNA">фото страниц</a> альбома, который покажут.
      <br>Оставить там свои замечания:
      `,
    component: 'btnGoToKiosk'},
  // {title: 'Фин. мониторинг', 
  //   html: `Отправить аргументированную жалобу на неправомерное расходование бюджетных средств в парке`,
  //   component: 'Rfm'},
  // {title: 'Счётная палата', 
  //   html: `В Контрольно-счётную палату города Москвы отправить жалобу на расходование бюджетных средств`,
  //   component: 'Ksp',
  // },
  {title: 'Подписать', html: `
      <ul>
        <li><a href="https://chng.it/wwPKsTF7">петиция</a> на Change.org </li>
        <li><a href="https://act.greenpeace.org/page/94412/action/1">петиция</a> GreenPeace</li>
      </ul>
      <p>Набравшие тысячи подписей петиции передают в мэрию или президенту.</p>
      <p class="my-0">Подписавшим по эл. почте поступят важные обновления по теме.</p>`,
  },
  {title: 'Быть вместе', html: `
      Facebook <a href="https://www.facebook.com/groups/pipstreshnevo">pipstreshnevo</a></li>
      <br>Instagram <a href="https://www.instagram.com/streshnevo_news/">@streshnevo_news</a></li>
      <br>Telegram <a href="https://t.me/streshnevo_save">@streshnevo_save</a></li>
  `,
  },
];


export default {
  components: {
    MskProcuror,
    // btnDigging,
    btnClaims,
    btnGoToGlavcontrol,
    // Plants,
    Glavcontrol,
    Fence,
    btnGoToKiosk,
    // Rfm,
    // Ksp,
  },

  data() {
    return {
      actions,
    };
  },
}
</script>