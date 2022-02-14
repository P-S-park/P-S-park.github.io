<template>
  <CopyButton
    :text="text"
    :title="title"
  />
</template>

<script>
import CopyButton from './CopyButton.vue';

export default {
  components: {
    CopyButton
  },

  data() {
    return {
      text: `#паркПокровскоеСтрешнево #ПокровскоеСтрешнево #СЗАО #Войковский #САО #собянин #стоп_бл_во #PSpark #экологияМосквы`,
      title: 'хэштеги',
    };
  },
}
</script>
