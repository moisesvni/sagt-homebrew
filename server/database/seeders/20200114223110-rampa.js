'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('rampa', [{
        order: 1,
        tempo: '00:80' , // em minutos
        temperatura: 40, // graus celsius,
      }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('rampa', null, {});
  }
};