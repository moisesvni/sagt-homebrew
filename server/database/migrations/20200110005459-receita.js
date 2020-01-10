// criar - npx sequelize-cli seed:generate --name demo
// executar - npx sequelize db:migrate:all

//px sequelize-cli db:migrate:undo
//npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js


module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Receita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      userId : {
        allowNull: false,
        type : DataTypes.INTEGER,
        // onDelete : 'CASCADE',
        references : {
            model : 'Users',
            key : 'id',
            as : 'userId'
        },
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};
