<template>
  <section id="dkn" class="blue lighten-4">
    <div class="py-12"></div>
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">До конца января</h2>
      <h4 class="display-1 font-weight-bold mb-3">Напишите в Департамент Культурного Наследия</h4>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto mb-8 text-left"
        max-width="720"
      >

        <p>
          <a href="https://www.mos.ru/dkn/documents/discussions/view/15177221/">Акт</a>
          государственной историко-культурной экспертизы (ГИКЭ) сейчас выставлен на публичное обсуждение.
        </p>

        <p>Текст возражений до 1 февраля 2022  можно направить любым из способов:</p>

        <ul>
          <li>через <a href="https://www.mos.ru/feedback/reception/?department=20488090">форму обратной связи</a> "Электронная приемная" на сайте Департамента</li>
          <li>на официальный адрес эл. почты Департамента <a href="mailto:DKN_INFO@mos.ru">DKN_INFO@mos.ru</a></li>
          <li>лично передать в службу &laquo;Одного окна&raquo; по адресу: ул. Пятницкая, 19</li>
        </ul>

        <h3 class="my-3">Отправка через эл. приёмную:</h3>
        <ol>
          <li><a href="https://www.mos.ru/feedback/reception/?department=20488090">открыть</a> эл. приёмную ДКН</li>
          <li>получатель обращения: <code>Строительство</code> &rarr; <code>Департамент Культурного Наследия</code></li>
          <li>заполняем <code>Сведения об отправителе</code></li>
          <li><code>Суть вопроса</code> &ndash; можно написать: <code>Предложения/Замечания/Возражения на Акт ГИКЭ</code> </li>
          <li><code>Содержание обращения</code> позволяет скопировать и вставить, однако подготовленный текст превышает допустимые 10 тыс. знаков.
            <ul>
              <li>либо прикрепить текст файлом, и указать, что содержание обращения в приложении</li>
              <li>либо редактировать текст и сокращать</li>
            </ul>
          </li>
          <li>Потребуется ввести проверочный код.</li>
        </ol>
        <p class="my-3">
          Скопировать текст обращения: 
          <copyButtonDKN />
        </p>
      </v-responsive>
    </v-container>
  </section>  
</template>

<script>
import copyButtonDKN from './copyButtons/dkn.vue';

export default {
  components: {
    copyButtonDKN,
  },
  setup() {
    
  },
}
</script>