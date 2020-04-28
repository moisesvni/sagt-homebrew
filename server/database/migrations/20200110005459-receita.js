// criar tabela - npx sequelize-cli migration:generate --name xaxa
// criar dados tabela - npx sequelize-cli seed:generate --name xaxa

// executar criacao de tabelas - npx sequelize db:migrate
// popular tabelas - npx sequelize-cli db:migrate:all

//npx sequelize-cli db:migrate:undo
//npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js


module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('receita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('receita');
  }
};
