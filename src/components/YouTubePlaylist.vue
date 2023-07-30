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
          // videoId: '',
          playerVars: {
            'listtype': 'playlist',
            'list': 'PLhdJDo6vgwsH7cbBDxfh-7X963TxGHUox',
            'playsinline': 1,
            'hl': 'ru',
          },
        });
      }
    }, 500);      
  },
}
</script>