<template>
  <section id="problem">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Суть проблемы</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8 text-left"
        max-width="720"
      >
        <p>Природно-исторический парк Покровское-Стрешнево подвергается беспрецедентной <span class="font-weight-bold">урбанизации</span> с уничтожением сотен деревьев и среды обитания животных. В ближайшее время могут начаться масштабные работы по изменению гидрологии территории и преобразованию родников в декоративные фонтанчики.</p>
        <p>Заказчик работ &mdash; департамент капитального ремонта. Не проведено полноценных гео-изысканий и оценки воздействия на окружающую среду. Подряд на выполнение работ заключён в&nbsp;обход системы гос. закупок, в&nbsp;обход антимонопольного законодательства &mdash; с компанией, не имеющей опыта работ на природных территориях.</p>
        <p>Проект полностью игнорирует смысл статусов особо охраняемой природной территории (ООПТ) и объекта культурного наследия (ОКН). Ответственные органы не реагируют на вопиющие нарушения.</p>
      </v-responsive>

      <div></div>

      <v-btn
        class="align-self-end"
        fab
        outlined
        @click="goTo(next)"
      >
        <v-icon v-html="mdiChevronDoubleDown"></v-icon>
      </v-btn>
    </v-container>

    <div class="py-5"></div>

  </section>
</template>

<script>
import { mdiChevronDoubleDown } from '@mdi/js';
import goto from '@/goto';

export default {
  data() {
    return {
      mdiChevronDoubleDown,
    };
  },

  mixins: [ goto ],

  props: ['next', ],
}
</script>
