import Vue from 'vue'
import Eleven from './Eleven.vue'
import vuetify from './plugins/vuetify'
import metrika from './metrika'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Eleven)
}).$mount('#app')

metrika();
