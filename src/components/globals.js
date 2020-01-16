import Vue from 'vue';
import ReceitaEdit from './receita/receita-edit';
import Popover from './util/confirm-popover';
import CardFabricacao from './fabricacao/card-fabricacao';

require('../plugins/apex-charts');

Vue.component('receita-edit', ReceitaEdit);
Vue.component('confirm-popover', Popover);
Vue.component('card-fabricacao', CardFabricacao);