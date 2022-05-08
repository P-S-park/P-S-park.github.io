<template>
  <section id="dictionary" class="green lighten-3 pb-12">
    <div class="py-12"></div>
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Аббревиатуры</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
    </v-container>

    <v-row>
      <v-col cols="12" md="4" offset-md="2">
        <v-card
          class="mx-auto text-left"
          tile
        >
          <v-list-item two-line v-for="([dt, dd], i) in dict()" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="dt"></v-list-item-title>
              <v-list-item-subtitle v-html="dd"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> 
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          class="mx-auto text-left"
          tile
        >
          <v-list-item two-line v-for="([dt, dd], i) in dict(1)" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="dt"></v-list-item-title>
              <v-list-item-subtitle v-html="dd"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> 
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>


<script>
const dict = {
  'ООПТ': 'особо охраняемая природная территория',
  'ОКН': 'объект культурного наследия',
  'ПИП': 'природно-исторический парк',
  'ПК': 'природный комплекс',
  'ПТ': 'природные территории',
  'ПОС': 'проект организации строительства',
  'ППР': 'проект производства работ',
  'РГ': 'рабочая группа',
  'ОИВ': 'органы исполнительной власти',
  'ДКН': 'департамент культурного наследия Москвы',
  'ДКР': 'департамент капитального ремонта',
  'ДПиООС': 'департамент природопользования и охраны окружающей среды города Москвы',
  'МГН (1)': 'департамент культурного наследия города Москвы (Мосгорнаследие)',
  'МГН (2)': 'маломобильные группы населения',
  'ГИКЭ': 'государственная историко-культурная экспертиза',
  'МАФ': 'малая архитектурная форма',
  'КС ОНФ': '«Круглый Стол» Общественного Народного Фронта',
  'ЕР': 'Единая Россия',
  'ППМ': 'постановление правительства Москвы',
  'ПП РФ': 'постановление правительства РФ',
  'ФЗ': 'федеральный закон',
  'ГНБ': 'установка горизонтально-направленного бурения',
  'СНиП': 'строительные нормы и правила',
  'ГОСТ': 'межгосударственный стандарт',
  'МО': 'муниципальный округ',
  'ПЗЗ': 'правила землепользования и застройки',
  'ГПЗУ': 'градостроительный план земельного участка',
  'МЦД': 'московский центральный диаметр. МЦД-2 – железнодорожная ветка от Рижского вокзала мимо парка к Щукинской',
  'МЦК': 'московское центральное кольцо – железнодорожное пассажирское кольцо, проходит мимо парка к Балтийской',
};

export default {
  data() {
    return {
    };
  },
  methods: {
    dict(halve) {
      const length = Object.entries(dict).length;
      const mid = Math.ceil(length / 2);
      return Object
        .entries(dict)
        .sort(([a], [b]) => (a > b ? 1 : (a < b ? -1 : 0)))
        .slice(halve ? mid : 0, halve ? length : mid)
      ;
    },
  },
}
</script>
