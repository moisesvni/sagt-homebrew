import moment from 'moment';

export default {
  namespaced: true,
  state: {
    receita: {},
    chartOptions: {
      series: [
          {
            name: 'Rampas',
            data: [0, 55, 68, 75, 100]
          },
          {
            name: 'Temperatura Atual',
            data: []
          }
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Grafico Rampas',
        align: 'left'
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 0,
        max: 100
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['0 min', '55 min', '80 min', '15 min', '60 min'],
      }
    }
  },
  getters: {
    getRampas: state => {
      if (!state.receita.rampas) return;
      return state.receita.rampas.length;
    },
    getDuracao: state => {
      let receita = state.receita;
      if (!receita.id) return;
      
      let sum = receita.rampas
        .map(item => item.tempo)
        .reduce((prev, curr) => moment.duration(prev, 'HH:mm:ss').add(curr), 0);
        return moment.utc(sum.asMilliseconds()).format('HH:mm');
      
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