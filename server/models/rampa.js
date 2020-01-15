module.exports = (sequelize, DataTypes) => {
    const rampa = sequelize.define('rampa', {
      order: DataTypes.INTEGER,
      tempo: DataTypes.TIME,
      temperatura: DataTypes.INTEGER
    }, 
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false
    });
    return rampa;
  }