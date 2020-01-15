module.exports = (sequelize, DataTypes) => {
    const receita = sequelize.define('receita', {
      nome: DataTypes.STRING
    });

     receita.associate = (models) => {
      receita.hasMany(models.rampa, {
        foreignKey: 'receitaId'
      })
     }
    return receita;
  }