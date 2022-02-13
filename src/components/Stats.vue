<template>
  <section id="stats" class="grey">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      :src="imgPonds"
    >
      <v-container fill-height>
        <v-row class="mx-auto">
          <v-col
            v-for="[value, title] of stats"
            :key="title"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <div
                class="display-3 font-weight-black mb-4"
                v-text="value"
              ></div>

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
import imgPonds from '../assets/ponds.jpg';

export default {
  data() {
    return {
      imgPonds,
      stats: [
        ['15000+', 'подписей собрано'],
        ['3200+', ' в группе Fb'],
        ['7', 'прудов'],
        ['1', 'парк'],
      ],
    };
  },
}
</script>
