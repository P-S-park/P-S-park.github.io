import Vue from 'vue'
import Aqueduct from './pages/Aqueduct.vue'
import vuetify from './plugins/vuetify'
import metrika from './metrika'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Aqueduct)
}).$mount('#app')

metrika();
