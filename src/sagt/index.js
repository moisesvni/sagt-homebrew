import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as components from './components/index'; 

export function install (vue, parameters) {
  parameters = parameters || {};
  parameters.router = router;
  parameters.store = store;
  vue.use(components, parameters);

  new Vue({ vuetify, router, store, render: h => h(app) }).$mount('#app');
}
