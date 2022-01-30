<template>
  <copyButton :text="text" />
</template>

<script>
import copyButton from '../CopyButton.vue';
import text from '../../texts/rfm';

export default {
  data: () => ({ text }),
  components: { copyButton, },
}
</script>
