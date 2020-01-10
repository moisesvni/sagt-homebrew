// npx sequelize-cli db:seed:all

'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Receita', [{
        userId: 2,
        nome: 'Kalic Jack',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Receita', null, {});
  }
};