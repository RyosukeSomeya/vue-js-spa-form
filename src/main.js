import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router' //追加
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex);

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
