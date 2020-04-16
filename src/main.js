import Vue from 'vue';
import * as sagt from './sagt';

Vue.config.productionTip = false;
Vue.use(sagt, { el: '#app' });

export default sagt;