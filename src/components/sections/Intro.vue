<template>
  <section id="problem">
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-row class="py-12">
          <v-col cols="12" md="6">
            <h2 class="display-1 mb-6 text-center">Новости</h2>
            <div class="text-center">
              <v-pagination
                v-model="newsIndex"
                :length="news.length"
                circle
                color="green darken-2"
                :prev-icon="mdiChevronLeft"
                :next-icon="mdiChevronRight"
              ></v-pagination>
            </div>
            <h4 v-text="newsTitle" class="pt-4 px-2" />
            <div class="news-container">
              <div v-html="newsHTML" ref="newsbox" class="px-2" :class="{limited: isLimited, maxheight: true}" />
              <div class="shield" v-if="isLimited" />
            </div>
            <div class="text-center">
              <v-btn small plain @click="unlimit" v-if="isLimited">читать полностью</v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <h2 class="display-1 mb-6">Суть проблемы</h2>

            <v-responsive
              class="mx-auto font-weight-light mb-8 text-left px-2"
              max-width="720"
            >
              <p>В 2022 г. Природно-исторический парк Покровское-Стрешнево подвергся беспрецедентной урбанизации с уничтожением сотен деревьев и среды обитания животных.</p>
              <p>Были уничтожены несколько гектаров плодородной лесной почвы и подлеска, обрублены корни сотням деревьев (8 деревьев уже упало), затронута гидрология этой территории.</p>
              <p>Работы велись круглосуточно с превышением нормативов по шуму. Животному, растительному и грибному миру был нанесен существенный урон.</p>
              <p>Проложены подземные коммуникации, установлено три трансформаторных подстанции.</p>
              <p>Качество работ крайне низкое. В настоящее время продолжаются активные работы по ремонту Усадьбы, вместо реставрации.</p>

              <!-- <p>Природно-исторический парк Покровское-Стрешнево подвергается беспрецедентной <span class="font-weight-bold">урбанизации</span> с уничтожением сотен деревьев и среды обитания животных. Идут масштабные работы по изменению гидрологии территории и преобразованию родников в декоративные фонтанчики.</p>
              <p>Заказчик работ &mdash; департамент капитального ремонта. Не проведено полноценных гео-изысканий и оценки воздействия на окружающую среду. Подряд на выполнение работ заключён в&nbsp;обход системы гос. закупок, в&nbsp;обход антимонопольного законодательства &mdash; с компанией, не имеющей опыта работ на природных территориях.</p>
              <p>Проект полностью игнорирует смысл статусов Особо охраняемой природной территории (ООПТ) и Объекта культурного наследия (ОКН).</p>
              <p>Освещение парка ведёт к гибели животных. <a target="_self" href="/lights/">Подробнее</a>.</p> -->
            </v-responsive>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <v-btn
              class="align-self-end"
              fab
              outlined
              @click="goTo(next)"
            >
              <v-icon v-html="mdiChevronDoubleDown"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </section>
</template>

<script>
import { mdiChevronDoubleDown, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import goto from '@/goto';
import news from '@/news';

export default {
  data() {
    return {
      mdiChevronDoubleDown,
      mdiChevronLeft,
      mdiChevronRight,
      newsIndex: 1,
      news,
      isLimited: true,
    };
  },

  mixins: [ goto ],

  props: ['next', ],

  computed: {
    currentNews() {
      return this.news[this.newsIndex - 1];
    },
    newsTitle() {
      const { date } = this.currentNews;
      let result;
      try {
        result = Intl.DateTimeFormat('ru-RU', {dateStyle: 'full'}).format(new Date(date));
      } catch (e) {
        console.error(e);
        result = date;
      }
      return result;
    },
    newsHTML() {
      return this.currentNews.html;
    },
  },

  methods: {
    unlimit() {
      this.isLimited = !this.isLimited;
    },

    clamp() {
      this.isLimited = true;
      this.$nextTick(() => {
        const { newsbox } = this.$refs;
        const { scrollHeight, offsetHeight } = newsbox;
        this.isLimited = scrollHeight !== offsetHeight;
      });
    },
  },

  mounted() {
    this.$nextTick(this.clamp);
  },

  watch: {
    newsIndex() {
      this.clamp();
    },
  },
}
</script>


<style scoped>
  .shield {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    position: relative;
    top: -8em;
    height: 8em;
    margin-bottom: -8em;
  }
  .limited {
    max-height: 15em;
    overflow: hidden;
  }
</style>
