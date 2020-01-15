module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('rampa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      tempo: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      temperatura: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      receitaId : {
        type : DataTypes.INTEGER,
        // onDelete : 'CASCADE',
        references : {
            model : 'receita',
            key : 'id',
            as : 'receitaId'
        },
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('rampa');
  }
};
