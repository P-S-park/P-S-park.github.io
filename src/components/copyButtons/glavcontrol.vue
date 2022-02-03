<template>
  <copyButton :text="text" />
</template>

<script>
import copyButton from '../CopyButton.vue';
import text from '../../texts/glavcontrol';

export default {
  data: () => ({ text }),
  components: { copyButton, },
}
</script>
