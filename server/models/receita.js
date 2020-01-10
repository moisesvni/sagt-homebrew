module.exports = (sequelize, DataTypes) => {
    const Receita = sequelize.define('Receita', {
      nome: DataTypes.STRING
    });
  
    return Receita;
  }