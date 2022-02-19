<template>
  <section id="calendar" class="background">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Календарь</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-row />

      <v-sheet max-width="760" class="mx-auto background">
        <v-row>
          <v-col
            cols="12"
            md="6"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-card
              class="mx-auto text-left"
            >
              <v-lazy v-if="item.img">
                <v-img :src="item.img" :aspect-ratio="16/9" max-height="250" class="mx-auto" />
              </v-lazy>

              <v-card-title v-text="item.title" />
              <v-card-text v-html="item.html" />
              <v-divider class="mx-4"></v-divider>
              <v-card-title v-text="item.date" />
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import imgKuznetsov from '@/assets/calendar/kuznetsov.jpg';

const items = [
  {
    date: '19 февраля 17:00',
    title: 'Встреча с депутатом',
    html: `
      <p>
        Встреча с депутатом Государственной Думы <a href="http://duma.gov.ru/duma/persons/1056140/">Дмитрием Вадимовичем Кузнецовым</a>
        пройдёт в эту субботу 19.02.2022 в 17:00 на перекрестке у начала Елизаветинского оврага, где дети катаются с горки и летом круглая клумба.
      </p>
      <p>Ближайший вход в парк &ndash; от бассейна Марина Клаб (Ленинградское ш. 25А стр.4)</p>
      <p>Это не демонстрация. Никаких листовок, лозунгов, транспарантов. Возьмите паспорт. Пожалуйста, приходите со своими вопросами депутату и приглашайте соседей.</p>
    `,
    img: imgKuznetsov,
  },
];


export default {
  components: {
    // btnCopyCode,
  },

  data() {
    return {
      items,
      imgKuznetsov,
    };
  },

}
</script>

<style scoped>
  .background {
    background-color: #E0F2F1;
  }
</style>
