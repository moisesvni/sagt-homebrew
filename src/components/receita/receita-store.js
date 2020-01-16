export default {
  namespaced: true,
  state: {
    receita: {},
    dialog: false,
    snackbar: false,
    snackbarText: false,
  },
  getters: {
    getReceita: state => {
      return state.receita;
    }
  },
  actions: {
    setReceita ({ state, commit }, receita) { 
      if (state.receita !== receita) commit('setReceita', receita);
    },
    changeDialog ({ state, commit }) { 
      commit('setDialog', state.dialog);
    },
    changeSnackbar ({ commit }, value) { 
      commit('openSnackbar', value);
    },
    setSnackbarText ({ commit }, value) { 
      commit('setSnackbarText', value);
    }
  },
  mutations: {
    setReceita (state, receita)  { 
      state.receita = receita;
    },
    setDialog (state, dialog)  { 
      state.dialog = !dialog;
    },
    openSnackbar (state, value)  { 
      state.snackbar = value;
    },
    setSnackbarText (state, value)  { 
      state.snackbarText = value;
    }
  }
  };