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
      <p>Природно-исторический парк Покровское-Стрешнево ждёт беспрецедентная урбанизация с уничтожением сотен деревьев, условий для обитания животных, масштабными работами на роднике.</p>
      <p>Заказчик работ &mdash; Департамент капитального ремонта. Подряд на выполнение работ заключён в обход системы государственных закупок, без соблюдения требований антимонопольного законодательства, с компанией, не имеющей опыта работ на природных территориях.</p>
      <p>Невзирая на статусы особо охраняемой природной территории (ООПТ) и объекта культурного наследия (ОКН), планируемые в парке работы содержат многочисленные нарушения природоохранного и историко-культурного законодательства. Ответственные органы не реагируют. Ограждения уже выставлены, техника зашла в парк.</p>
      </v-responsive>

      <div></div>

      <v-btn
        class="align-self-end"
        fab
        outlined
        @click="goTo('#actions')"
      >
        <v-icon v-html="mdiChevronDoubleDown"></v-icon>
      </v-btn>
    </v-container>

    <div class="py-5"></div>

  </section>
</template>

<script>
import { mdiChevronDoubleDown } from '@mdi/js';
import goto from '../goto';

export default {
  data() {
    return {
      mdiChevronDoubleDown,
    };
  },

  mixins: {
    goto,
  },
}
</script>
