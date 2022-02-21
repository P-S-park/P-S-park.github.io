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
import MskProcuror from '@/components/appeals/MskProcuror.vue';
import btnClaims from '@/components/goButtons/claims.vue';
import btnGoToGlavcontrol from '@/components/goButtons/glavcontrol.vue';
import Glavcontrol from '@/components/appeals/Glavcontrol.vue';
import Fence from '@/components/appeals/Fence.vue';
import Birch from '@/components/appeals/Birch.vue';
import btnGoToKiosk from '@/components/goButtons/kiosk.vue';
import CopyHashtags from '@/components/btnCopyHashtags.vue';

const actions = [
  {
    title: 'Разобраться',
    html: `Коротко: 26 основных претензий к реконструкции парка – см. ниже.
      <br>
      Подробнее: посмотрите, пожалуйста, <a href="https://youtu.be/W1UoPUczbzE">видео</a> с подробным разбором проекта.
    `,
    component: 'btnClaims',
  },
  {title: 'Фиксировать', html: `
    Нужны фотографии и видео происходящего в парке. Хэштеги:
      <code>#паркПокровскоеСтрешнево #ПокровскоеСтрешнево #СЗАО #Войковский #САО #собянин #стоп_бл_во #PSpark #экологияМосквы</code>
    <br>Публикуйте также <a href="https://www.facebook.com/groups/pipstreshnevo">в нашей группе</a> в Facebook.
    `,
    component: 'CopyHashtags',
  },
  {title: 'Проверить', 
    html: `Срубили берёзу прямо у фонтана. Пусть предъявят порубочный билет`,
    component: 'Birch'},
  {title: 'Наказать', 
    html: `Сейчас уничтожают результаты совсем недавнего «улучшения» парка. Миллиарды <s>растащены</s> потрачены впустую?
    <br>Заявление в прокуратуру:`,
    component: 'MskProcuror'},
  {title: 'Контролировать', 
    html: 'Мы можем, и будем осуществлять Общественный Контроль. Требуем убрать непрозрачные сетки!',
    component: 'Fence'},
  {
    title: 'Инфокиоски',
    html: `У трёх входов в парк стоят будки для сбора мнений.
      Вот <a href="https://disk.yandex.ru/d/gwMRkx0RWQgKNA">фото страниц</a> альбома, который покажут.
      <br>Оставить там свои замечания:
      `,
    component: 'btnGoToKiosk'},
  {title: 'Подписать', html: `
      <ul>
        <li><a href="https://chng.it/wwPKsTF7">петиция</a> на Change.org </li>
        <li><a href="https://act.greenpeace.org/page/94412/action/1">петиция</a> GreenPeace</li>
      </ul>
      <p>Набравшие тысячи подписей петиции передают в мэрию или президенту.</p>
      <p class="my-0">Подписавшим по эл. почте поступят важные обновления по теме.</p>`,
  },
  {title: 'Быть вместе', html: `
      Facebook <a href="https://www.facebook.com/groups/pipstreshnevo">pipstreshnevo</a>
      <br>Instagram <a href="https://www.instagram.com/streshnevo_news/">@streshnevo_news</a>
      <br>Telegram <a href="https://t.me/streshnevo_save">@streshnevo_save</a>
      <br>Эл. почта: <a href="mailto:p.s.park@ya.ru">P.S.park@ya.ru</a>
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
    };
  },
}
</script>
