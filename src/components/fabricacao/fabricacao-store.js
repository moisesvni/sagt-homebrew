import moment from 'moment';

export default {
  namespaced: true,
  state: {
    receita: {},
  },
  getters: {
    getRampas: state => {
      if (!state.receita) return;
      return state.receita.rampas.length;
    },
    getDuracao: state => {
      let receita = state.receita;
      if (!receita.id) return;
      
      let sum = receita.rampas
        .map(item => item.tempo)
        .reduce((prev, curr) => moment.duration(prev, 'HH:mm:ss').add(curr), 0);
        return moment.utc(sum.asMilliseconds()).format("HH:mm")
      
    }
  },
  actions: {
    setReceita ({ state, commit }, receita) { 
      if (state.receita !== receita) commit('setReceita', receita);
    }
  },
  mutations: {
    setReceita (state, receita)  { 
      state.receita = receita;
    }
  }
  };