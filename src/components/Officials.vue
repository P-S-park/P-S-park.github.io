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
        <v-card
          class="mx-auto text-left"
          max-width="760"
          tile
        >
          <v-list-item two-line v-for="(item, i) in appeal" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.html"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> 
        </v-card>      
      </template>

      <v-card max-width="760" class="my-4 mx-auto text-left" >
        <v-card-text>
          В эл. приёмных на Mos.ru вставка скопированного текста <span class="font-weight-black">заблокирована</span>, поэтому в окошко &laquo;Содержание обращения&raquo; коротко: 
          <code>Обращение прикреплено</code> или <code>Текст обращения в приложении</code>,
          а большое письмо прикрепите файлом.
        </v-card-text>
        <v-card-actions>
          <v-btn small @click="show = !show">
            <v-icon left v-html="show ? mdiChevronUp : mdiChevronDown" />
            Как разблокировать
          </v-btn> 
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              <h4>Для продвинутых &laquo;хакеров&raquo;</h4>
              <div>
                На компьютере разблокировать вставку текста можно в консоли браузера.
                <br>Находясь на странице отправки сообщения, откройте Консоль (доп. служебное окно браузера):
                <ul class="mt-0">
                  <li>Chrome, FireFox: <code>Ctrl + Shift + J</code> или <code>Cmd + Shift + J</code> на Маке</li>
                  <li>Safari: <code>Ctrl + Shift + C</code></li>
                </ul>
                <a href="#" @click.prevent="copyCode">Скопируйте</a> и вставьте туда следующий код:
                <br><code>document.addEventListener('paste', e => e.stopImmediatePropagation(), true);</code>
                <v-btn icon @click="copyCode">
                  <v-icon v-html="mdiContentCopy" />
                </v-btn>
                <span v-if="isCopied" class="green"><br>код скопирован</span>
                <br>и нажмите <code>Enter</code>, чтобы выполнить его.
                <br>После этого вставка через <code>Ctrl + V</code> заработает (но не заблокированное меню правой кнопкой).
              </div>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import { mdiChevronUp, mdiChevronDown, mdiContentCopy } from '@mdi/js';

const appeal = [
  {
    title: 'Правительство Москвы',
    html: `<a href="https://www.mos.ru/feedback/reception/?department=11491090">эл. приёмная</a>
      `,
  },

  {
    title: 'ДПиООС',
    html: `Департамент природопользования и охраны окружающей среды
    <br><a href="https://www.mos.ru/feedback/reception/?department=20703090">эл. приёмная</a>
      `,
  },
  
  {
    title: 'ДКР',
    html: `Департамент капитального ремонта
    <br><a href="https://www.mos.ru/feedback/reception/?department=19966090">эл. приёмная</a>
      `,
  },
  
  {
    title: 'ДКН',
    html: `Департамент культурного наследия
    <br><a href="https://www.mos.ru/feedback/reception/?department=20488090">эл. приёмная</a>
      `,
  },

  {
    title: 'МосПрирода',
    html: `ГПБУ «Мосприрода»
    <br>эл. почта <a href="mailto:mospriroda@eco.mos.ru">mospriroda@eco.mos.ru</a>
    <br>тел. <a href="tel:+74997392707">8 (499) 739-27-07</a> (или <a href="tel:+74997392705">-05</a>,
    или <a href="tel:+74997392708">-08</a>)
    <br>по телефону принимают заявки 
    и регистрируют.`
  },
  {
    title: 'ОАТИ',
    html: `Объединение административно-технических инспекций города Москвы
    <br><a href="https://www.mos.ru/feedback/reception/?department=21519090">эл. приёмная</a>
    <br>эл. почта <a href="mailto:oati@mos.ru">oati@mos.ru</a>
    `
  },
  {
    title: 'Дирекция парка',
    html: `Дирекция ООПТ ПИП Покровское-Стрешнево
    <br>тел. <a href="tel:+74991596581">+7 (499) 159-65-81</a>`
  },


  {
    title: 'Природоохранная прокуратура',
    html: `Межрайонная природоохранная прокуратура г.Москвы
      <br><a href="https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest">эл. приёмная</a>
      <br>эл. почта: <a href="mailto:prokpri@mosproc.ru">prokpri@mosproc.ru</a>
    `
  },
  {
    title: 'Тушинская прокуратура',
    html: `Тушинская межрайонная прокуратура
      <br>эл. почта: <a href="mailto:proktus@mosproc.ru">proktus@mosproc.ru</a>
      <br><a href="https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest">эл. приёмная</a>
      <p class="my-2">
        «Без авторизации», согласие на обработку данных. 
        <br>Орган: &laquo;Прокуратура субъекта Российской Федерации&raquo;
        <br>&laquo;Город федерального значения Москва&raquo;
        <br>&laquo;Природоохранную&raquo; или &laquo;Тушинскую&raquo; прокуратуру.
        <br>Тема: <code>По вопросам охраны окружающей среды и природопользования</code>
      </p>
    `,
  },
];


export default {
  components: {
    // btnCopyCode,
  },

  data() {
    return {
      appeal,
      show: false,
      isCopied: false,
      mdiChevronUp,
      mdiChevronDown,
      mdiContentCopy,
    };
  },

  methods: {
    copyCode() {
      const code = `document.addEventListener('paste', e => e.stopImmediatePropagation(), true);`;
      try {
        navigator.clipboard
          .writeText(code)
          .then(() => this.isCopied = true)
          .then(() => setTimeout(() => this.isCopied = false, 2e3))
          .catch(console.error)
        ;
      } catch(err) {
        console.error(err);
      }
    },
  },
}
</script>
