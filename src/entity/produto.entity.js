const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/index.js');

class Produto extends Model {}

Produto.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: true, 
      },
      tipo_alimento: {
        type: DataTypes.STRING,
        allowNull: true, 
      },
    },
    {
      sequelize,
      modelName: 'Produto',
      tableName: 'produto'
    }
  );

module.exports = Produto;