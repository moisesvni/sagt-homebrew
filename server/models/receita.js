module.exports = (sequelize, DataTypes) => {
    const receita = sequelize.define('receita', {
      nome: DataTypes.STRING
    },
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false
    });

     receita.associate = (models) => {
      receita.hasMany(models.rampa, {
        foreignKey: 'receitaId',
        onDelete: 'cascade'
      })
     }
    return receita;
  }