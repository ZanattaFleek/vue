import Vue from 'vue'
// import App from './App.vue'

import Colaborador from './cadastros/Colaborador.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Colaborador),
}).$mount('#app')
