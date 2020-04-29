import fabricacaoStore from './fabricacao-store'
import cardFabricacao from './card-fabricacao';
import temperaturas from './temperaturas';
import controles from './controles';
import tanque from './tanque';
import bombas from './bombas';

export function install (vue, parameters) {
  vue.component('card-fabricacao', cardFabricacao);
  vue.component('temperaturas', temperaturas);
  vue.component('controles', controles);
  vue.component('tanque', tanque);
  vue.component('bombas', bombas);
  parameters.store.registerModule('fabricacao', fabricacaoStore);  
}
