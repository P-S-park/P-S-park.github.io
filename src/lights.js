import Vue from 'vue'
import Lights from './pages/Lights.vue'
import vuetify from './plugins/vuetify'
import metrika from './metrika'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Lights)
}).$mount('#app')

metrika();
