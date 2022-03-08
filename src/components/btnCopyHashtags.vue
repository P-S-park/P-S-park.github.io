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
      text: `#паркПокровскоеСтрешнево #ПокровскоеСтрешнево #СЗАО #Войковский #САО #собянин #PSpark #экологияМосквы`,
      title: 'хэштеги',
    };
  },
}
</script>
