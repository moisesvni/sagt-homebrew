import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import router from './route/index.js'

Vue.config.productionTip = false

require('./plugins/apex-charts');

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify
}).$mount('#app')
