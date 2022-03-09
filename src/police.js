import Vue from 'vue'
import Police from './pages/Police.vue'
import vuetify from './plugins/vuetify'
import metrika from './metrika'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Police)
}).$mount('#app')

metrika();
