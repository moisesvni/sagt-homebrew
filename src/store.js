import Vue from 'vue'
import Vuex from 'vuex'
import receitaStore from './components/receita/receita-store.js'

Vue.use(Vuex);
var store = new Vuex.Store();

store.registerModule('receita', receitaStore);
export default store
