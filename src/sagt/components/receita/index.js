import receitaStore from './receita-store'
import ReceitaEdit from './receita-edit';

export function install (vue, parameters) {
  vue.component('receita-edit', ReceitaEdit);
  parameters.store.registerModule('receita', receitaStore);  
}
