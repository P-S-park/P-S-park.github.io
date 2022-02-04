<template>
  <v-sheet>
    <div ref="video"></div>
  </v-sheet>
</template>

<script>
export default {

  mounted() {
    setTimeout(() => {
      // async load YouTube player
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player(this.$refs.video, {
          width: '468',
          height: '264',
          videoId: 'EHiQidSnbI8',
          playerVars: {
            'playsinline': 1,
            'listType': 'list',
            'list': 'PLfzaXDQBQ7yFoFqILJSp5bQsTCP3-nu3L',
            'hl': 'ru',
          },
        });
      }
    }, 500);      
  },
}
</script>