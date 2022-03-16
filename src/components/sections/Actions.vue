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
        lg="4"
        offset-lg="4"
        class="py-4 px-6"
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
  {
    title: 'Сова',
    html: `Краснокнижная птица, к сожалению, погибла на днях около родников.
      8 писем, чтобы выяснить причину гибели и предотвратить подобное в будущем.
      <br><a href="https://disk.yandex.ru/i/F0SdRLhCj4f5yg">Инструкция</a> по отправке писем 
      и <a href="https://disk.yandex.ru/d/9KG1oPQYzRwGmQ">папка с файлами</a>.
    `,
  },
  {
    title: 'Риск травм',
    html: `Повреждения корней деревьев, покрытие площадок, футбольное поле — это предпосылки к травмоопасным ситуациям.
    <br>9 писем. Отправьте, пожалуйста, хотя бы 3:
      <br><a href="https://disk.yandex.ru/i/nCssWaJJIJaI-Q">Инструкция</a>
      и <a href="https://disk.yandex.ru/d/EhhtGNyzMprAEw">папка с файлами</a>.
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
    title: 'Наказать', 
    html: `Сейчас уничтожают результаты совсем недавнего «улучшения» парка. Миллиарды <s>растащены</s> потрачены впустую?
    <br>Заявление в прокуратуру:`,
    component: 'MskProcuror',
  },
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
    };
  },
}
</script>
