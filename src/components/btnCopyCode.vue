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

  props: ['title', ],

  data() {
    return {
      text: `document.addEventListener('paste', e => e.stopImmediatePropagation(), true);`,
    };
  },
}
</script>
