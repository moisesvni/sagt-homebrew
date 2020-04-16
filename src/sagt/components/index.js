require('../plugins/apex-charts');
import * as receita from './receita/index'; 
import * as fabricacao from './fabricacao/index'; 
import popover from './util/confirm-popover';

export function install (vue, parameters) {
  let modules = [receita, fabricacao];
  modules.forEach((mod) => vue.use(mod, parameters));

  vue.component('confirm-popover', popover);
 }
