import fabricacaoStore from './fabricacao-store'
import cardFabricacao from './card-fabricacao';

export function install (vue, parameters) {
  vue.component('card-fabricacao', cardFabricacao);
  parameters.store.registerModule('fabricacao', fabricacaoStore);  
}
