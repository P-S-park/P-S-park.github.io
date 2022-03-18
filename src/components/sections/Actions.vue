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
<p>Будем добиваться правовой оценки происходящего в судебном порядке. Для покрытия расходов на адвокатов и возможные экспертизы объявлен сбор средств. </p>
<h3>Задачи юристу</h3>
<p>Анализ всех материалов и выбор наиболее перспективного предмета иска. Ожидаем рекомендаций по наиболее эффективным действиям и юридического сопровождения.</p>
<h3>Цели</h3>
<p>Как минимум: остановка работ, отправка проекта «благоустройства» на экспертизу и возмещение причиненного ущерба.
  Как максимум: привлечение виновных к ответственности.</p>
<h3>Отчёты</h3>
<p>Ежемесячно: отчеты о проделанной работе и полученных результатах.</p>
<h3>Сроки</h3>
<p>Зная отечественное правосудие, мы настраиваемся на несколько месяцев работы. К сожалению, никто ничего не может гарантировать, но количество нарушений так велико, что мы настроены на решительную борьбу!</p>

          </v-card-text>
          <v-lazy>
            <iframe :src="iframeURL" width="100%" height="343" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
          </v-lazy>
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
      iframeURL: 'https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D0%B0%20%D0%B2%20%D0%BF%D0%B0%D1%80%D0%BA%20%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5-%D0%A1%D1%82%D1%80%D0%B5%D1%88%D0%BD%D0%B5%D0%B2%D0%BE&targets-hint=&default-sum=&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&comment=on&hint=%D0%9D%D0%B0%20%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D0%B0%20%D0%B2%20%D0%BF%D0%B0%D1%80%D0%BA%20%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D0%A1%D1%82%D1%80%D0%B5%D1%88%D0%BD%D0%B5%D0%B2%D0%BE&successURL=https%3A%2F%2Fpspark.ru%2F&quickpay=shop&account=410011436357459&',
    };
  },
}
</script>
