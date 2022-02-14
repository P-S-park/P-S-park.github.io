<template>
  <section id="officials">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Куда обращаться</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>

      </v-row>

      <template>
        <v-expansion-panels focusable>
          <v-expansion-panel
            v-for="(item,i) in appeal"
            :key="i"
          >
            <v-expansion-panel-header>
              <div class="text-h5 font-weight-regular">{{item.title}}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="text-left" v-html="item.html"></div>
              <component :is="item.component" :title="item.btnTitle" class="mt-2" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>

    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import btnCopyCode from './btnCopyCode.vue';

const appeal = [
  {
    title: 'Правительство Москвы',
    html: `Электронная приёмная Правительства Москвы
      <a href="https://www.mos.ru/feedback/reception/">mos.ru/feedback/reception</a> 
      <br>Выберите получателя обращения:
      <ol>
        <li>Правительство Москвы</li>
        <li>Окружающая среда &rarr; <a href="https://www.mos.ru/feedback/reception/?department=20703090">Департамент природопользования и охраны окружающей среды</a></li>
        <li>ЖКХ и благоустройство &rarr; <a href="https://www.mos.ru/feedback/reception/?department=19966090">Департамент капитального ремонта</a></li>
        <li>Строительство &rarr; <a href="https://www.mos.ru/feedback/reception/?department=20488090">Департамента культурного наследия</a></li>
      </ol>
      <p>
        Они заблокировали вставку скопированного текста, поэтому в окошко &laquo;Содержание обращения&raquo; коротко: 
        <br><code>Обращение прикреплено</code> или <code>Текст обращения в приложении</code>, а большое письмо прикрепите файлом.
      </p>
      <h4>Для продвинутых &laquo;хакеров&raquo;</h4>
      <div>
        На компьютере разблокировать вставку текста можно в консоли браузера.
        <br>Находясь на странице отправки сообщения, откройте Консоль (доп. служебное окно браузера):
        <ul class="mt-0">
          <li>Chrome, FireFox: <code>Ctrl + Shift + J</code> (<code>Cmd + Shift + J</code> на Маке)</li>
          <li>Safari: <code>Ctrl + Shift + C</code></li>
        </ul>
        Скопируйте</a> и вставьте туда следующий код:
        <br><code>document.addEventListener('paste', e => e.stopImmediatePropagation(), true);</code>
        <br>и нажмите <code>Enter</code>, чтобы выполнить его.
        <br>После этого вставка через <code>Ctrl + V</code> заработает (но не заблокированное меню правой кнопкой).
      </div>
    `,
    component: 'btnCopyCode',
    btnTitle: 'Код',
  },
  {
    title: 'МосПрирода',
    html: `ГПБУ «Мосприрода»
    <br>эл. почта <a href="mailto:mospriroda@eco.mos.ru">mospriroda@eco.mos.ru</a>
    <br>по тел. <a href="tel:+74997392707">8 (499) 739-27-07</a> (или <a href="tel:+74997392705">-05</a>,
    или <a href="tel:+74997392708">-08</a>) &mdash; принимают заявки и сразу регистрируют их`
  },
  {
    title: 'ОАТИ',
    html: `Объединение административно-технических инспекций города Москвы
    <br><a href="https://www.mos.ru/feedback/reception/?department=21519090">https://www.mos.ru/feedback/reception/?department=21519090</a>
    <br>эл. почта <a href="mailto:oati@mos.ru">oati@mos.ru</a>
    `
  },
  {
    title: 'Дирекция парка',
    html: `Дирекция ООПТ ПИП Покровское-Стрешнево
    <br><a href="tel:+74991596581">+7 (499) 159-65-81</a>`
  },


  {
    title: 'Природоохранная прокуратура',
    html: `Межрайонная природоохранная прокуратура г.Москвы
      <br>Эл. почта: <a href="mailto:prokpri@mosproc.ru">prokpri@mosproc.ru</a>
      <br>Эл. приемная: <a href="https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest">https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest</a>
    `
  },
  {
    title: 'Тушинская прокуратура',
    html: `Тушинская межрайонная прокуратура
      <br><a href="mailto:proktus@mosproc.ru">proktus@mosproc.ru</a>
      <br>эл. приёмная  <a href="https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest">https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest</a>
      <br>При обращении в прокуратуру можно выбрать «Без авторизации», поставить согласие на обработку данных. 
      <br>На вопрос орган прокуратуры выбрать &laquo;Прокуратура субъекта Российской Федерации&raquo;
      <br>Далее – Город федерального значения Москва.
      <br>Потом либо &laquo;Природоохранную&raquo; или &laquo;Тушинскую&raquo; прокуратуру.
      <br>Тема: <code>По вопросам охраны окружающей среды и природопользования</code>
    `,
  },
];


export default {
  components: {
    btnCopyCode,
  },

  data() {
    return {
      appeal,
    };
  },
}
</script>
