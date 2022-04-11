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
          и его недостатках.
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
          Что удалось получить: 3 схемы, согласование проектной документации (22 страницы),
          мероприятия по охране окружающей среды (115 стр.) 
          и инженерно-геологические изыскания (143 стр.)
        </p>

        <v-row class="my-4">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="item, i in items"
            :key="i"
          >
            <v-card class="mx-2">
              <v-card-title v-text="item.title" />
              <v-lazy>
                <a :href="item.jpg || item.pdf">
                  <v-img
                    :src="item.thumb" 
                    contain
                    :aspect-ratio="210/297"
                    max-height="256"
                  />
                </a>
              </v-lazy>
              <v-card-actions>
                <v-btn small :href="item.pdf" v-if="item.pdf">
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
          <v-card-title>Авторы и заказчики плохого проекта</v-card-title>
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
import thumb_2 from '@/assets/project/2-thumb.jpg';
import thumb_3 from '@/assets/project/3-thumb.jpg';
import thumb_4 from '@/assets/project/4-thumb.jpg';
import thumb_5 from '@/assets/project/5-thumb.jpg';
import thumb_6 from '@/assets/project/6-thumb.jpg';
import thumb_7 from '@/assets/project/Genplan_Usadby_th.png';
import thumb_8 from '@/assets/project/MGN_dostupnost_th.png';
import thumb_9 from '@/assets/project/Novy_Genplan_KS_ONF_razmeschen_23_marta_th.png';
import thumb_10 from '@/assets/project/Pokrytia_th.png';

import { mdiDownload, mdiYoutube } from '@mdi/js';

const items = [
  {thumb: thumb_9, title: 'Ген. план', jpg: 'https://disk.yandex.ru/i/nkFEFp6YxVOggA'},
  {thumb: thumb_10, title: 'Покрытия', jpg: 'https://disk.yandex.ru/i/b2QzjDwICnObCA'},
  {thumb: thumb_8, title: 'Доступность', jpg: 'https://disk.yandex.ru/i/j4RzsQpLqoRD9g'},
  {thumb: thumb_2, title: 'Зонирование', jpg: 'https://disk.yandex.ru/i/OoxJZHm3yGk8gg', pdf: 'https://disk.yandex.ru/i/b0wRNQHw9jwtsA'},
  {thumb: thumb_3, title: 'Сводный план', jpg: 'https://disk.yandex.ru/i/tTXbkFQlqW8lPA', pdf: 'https://disk.yandex.ru/i/qfXmcTfluxAvVg'},
  {thumb: thumb_4, title: 'Согласование', jpg: 'https://disk.yandex.ru/i/paKBwPzRwDFa3A', pdf: 'https://disk.yandex.ru/i/DnK4qTZIPjgQpQ'},
  {thumb: thumb_5, title: 'Охрана среды', pdf: 'https://disk.yandex.ru/i/0MgTmNX9ybQyIw'},
  {thumb: thumb_6, title: 'Гео. изыскания', pdf: 'https://disk.yandex.ru/i/VnWvXJ8Zc96uGg'},
  {thumb: thumb_7, title: 'План Усадьбы', jpg: 'https://disk.yandex.ru/i/KHKuwoT_S0nRfw', pdf: 'https://disk.yandex.ru/i/FrsNSF5iZrn8nQ'},
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
  ['МосСвет (Департамент жилищно-коммунального хозяйства)', 'А. В. Чиненков', '01.03.2021'],
  ['Директор парка', 'А. Н. Тихонов', '30.08.2021'],
  ['ГПБУ "Мосприрода"', 'В. В. Видяпин', '06.09.2021'],
  ['Департамент культурного наследия', 'А. В. Леванова', '08.11.2021'],
  ['Департамент природопользования и окружающей среды', 'А. О. Кульбачевский', '14.12.2021'],
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
