<template>
  <section id="project">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Проект</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
    </v-container>

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
      >
        <p class="mx-2">
          Мы записали <a href="https://youtu.be/W1UoPUczbzE">видео</a>, в котором подробно рассказываем о проекте 
          и его основных недостатках.
          Объективно. Прямо в инфокиоске.
        </p>

        <div class="text-center">
          <v-btn href="https://youtu.be/W1UoPUczbzE" class="mx-auto" color="primary">
            <v-icon left v-html="mdiYoutube" />
            Смотреть видео
          </v-btn>
        </div>

        <p class="mx-2 mt-4">
          Проект проводимых в парке работ — это объёмная документация в нескольких томах.
          В нашем распоряжении лишь некоторые её части: три схемы и многостраничный документ «Согласования» проектной документации,
          в конце которого схема участка подворья. Перечень мероприятий по охране окружающей среды на 115 страниц и инженерно-геологические изыскания на 143 страницы.
        </p>

        <v-row class="my-4">
          <v-col
            cols="12"
            md="6"
            lg="3"
            v-for="item, i in items"
            :key="i"
          >
            <v-card class="mx-2">
              <v-card-title v-text="item.title" />
              <v-lazy>
                <a :href="item.jpg">
                  <v-img
                    :src="item.thumb" 
                    contain
                    :aspect-ratio="210/297"
                    max-height="256"
                  />
                </a>
              </v-lazy>
              <v-card-actions>
                <v-btn small :href="item.pdf">
                  <v-icon v-html="mdiDownload" small left />
                  PDF
                </v-btn>
                <v-btn small :href="item.jpg" v-if="item.jpg">
                  <v-icon v-html="mdiDownload" small left />
                  JPG
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-card class="" color="#EFEBE9">
          <v-card-title>Авторы и заказчики так-себе прожекта</v-card-title>
          <v-card-text>
            <v-simple-table>
              <tbody>
                <tr class="mt-0 mb-1" v-for="item, i in orgs" :key="i">
                  <td>{{ item[0] }} &mdash; {{ item[1] }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>

        <v-card class=" mt-4" color="#EFEBE9">
          <v-card-title>Согласовали проект с нарушениями</v-card-title>
          <v-card-text>
            <v-simple-table>
              <thead>
                <tr>
                  <th>Организация / должность</th>
                  <th>ФИО</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr class="mt-0 mb-1" v-for="item, i in approved" :key="i">
                  <td>{{ item[0] }}</td>
                  <td>{{ item[1] }}</td>
                  <td>{{ item[2] }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </section>
</template>

<script>
import thumb_1 from '@/assets/project/1-thumb.jpg';
import thumb_2 from '@/assets/project/2-thumb.jpg';
import thumb_3 from '@/assets/project/3-thumb.jpg';
import thumb_4 from '@/assets/project/4-thumb.jpg';
import thumb_5 from '@/assets/project/5-thumb.jpg';
import thumb_6 from '@/assets/project/6-thumb.jpg';

import { mdiDownload, mdiYoutube } from '@mdi/js';

const items = [
  {thumb: thumb_1, title: 'Генеральный план', jpg: 'https://disk.yandex.ru/i/W3Wt13kZk_zfRQ', pdf: 'https://disk.yandex.ru/i/V4jGMfqfVP1NHg'},
  {thumb: thumb_2, title: 'Схема зонирования', jpg: 'https://disk.yandex.ru/i/OoxJZHm3yGk8gg', pdf: 'https://disk.yandex.ru/i/b0wRNQHw9jwtsA'},
  {thumb: thumb_3, title: 'Сводный план', jpg: 'https://disk.yandex.ru/i/tTXbkFQlqW8lPA', pdf: 'https://disk.yandex.ru/i/qfXmcTfluxAvVg'},
  {thumb: thumb_4, title: 'Согласование', jpg: 'https://disk.yandex.ru/i/paKBwPzRwDFa3A', pdf: 'https://disk.yandex.ru/i/DnK4qTZIPjgQpQ'},
  {thumb: thumb_5, title: 'Охрана среды', pdf: 'https://disk.yandex.ru/i/0MgTmNX9ybQyIw'},
  {thumb: thumb_6, title: 'Гео. изыскания', pdf: 'https://disk.yandex.ru/i/VnWvXJ8Zc96uGg'},
];

const orgs = [
  ['Балансодержатель', 'ГПБУ «Мосприрода»'],
  ['Государственный Заказчик', 'Департамент капитального ремонта Москвы (Сергей Мельников, Максим Гордиенко)'],
  ['Заказчик концепции', 'ГАУ «МосжилНИИпроект»'],
  ['Исполнитель концепции', 'WOWhaus'],
  ['Заказчик проекта', 'Государственное казенное учреждение города Москвы по капитальному ремонту многоквартирных домов «УКРИС»'],
  ['Исполнитель проекта', 'ООО Неон (В Арбитражном суде г.Москвы с 2017 по 2021г. рассматривалось 12 исков к ООО «Неон»)'],
  ['Заказчик подряда', 'Автономная некоммерческая организация «Развитие городских технологий». Учреждена 21.02.2021'],
  ['Подрядчик', 'ООО «Генстрой» (микропредприятие со списочной численностью в 7 человек, имеющее большой опыт в благоустройстве кладбищ и организации охоты)'],
  ['Заказчик подключения к водоснабжению и водоотведению', 'АО «Мосводоканал»'],
  ['Проектировщик подключения к водоснабжению и водоотведению', 'АО Финансовая группа «Эверест»'],
  ['Подрядчик подключения к водоснабжению и водоотведению', 'АО «Группа компаний ЕКС»'],
  ['Проведение газа', 'Заказчик АО «Мосгаз», подрядчик ООО «УниверсалСтрой»'],
];

const approved = [
  ['МосСвет (Департамент жилищно-коммунального хозяйства)', 'А.В. Чиненков', '01.03.2021'],
  ['Директор парка', 'А.Н. Тихоновым', '30.08.2021'],
  ['ГПБУ "Мосприрода"', 'В.В. Видяпин', '06.09.2021'],
  ['Департамент культурного наследия', 'А.В. Леванова', '08.11.2021'],
  ['Департамент природопользования и окружающей среды', 'А.О. Кульбачевский', '14.12.2021'],
];


export default {
  data() {
    return {
      items,
      orgs,
      approved,
      mdiDownload,
      mdiYoutube,
    };
  },
}
</script>

<style scoped>
  #project {
    background-color: #FFF8E1;
  }
</style>
