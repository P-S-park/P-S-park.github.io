<template>
  <v-menu
    left
    bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon v-html="mdiDotsVertical" />
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="item, i in menu"
        :key="i"
        @click="() => goTo('#' + item.anchor)"
      >
        <v-list-item-title v-text="item.title" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mdiDotsVertical } from '@mdi/js';
import goto from '../goto';

const menu = [
  {title: 'Суть проблемы', anchor: 'problem', },
  {title: 'Действовать', anchor: 'actions', },
  {title: 'Календарь', anchor: 'calendar', },
  {title: 'Куда обращаться', anchor: 'officials', },
  {title: 'Листовки', anchor: 'flyers', },
  {title: 'Резонанс', anchor: 'resonance', },
  {title: 'Инфокиоск', anchor: 'kiosk', },
  {title: 'Статистика', anchor: 'stats', },
];

export default {
  data() {
    return {
      menu,
      mdiDotsVertical,
    };
  },

  mixins: [
    goto,
  ],
}
</script>
