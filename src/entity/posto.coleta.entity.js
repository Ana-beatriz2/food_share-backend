const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/index.js');

class PostoColeta extends Model {}

PostoColeta.init(
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
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      logradouro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      complemento: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      estado: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      ponto_referencia: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      usuarioId: {
        type: DataTypes.UUID,
        allowNull: true,
        field: 'usuario_id',
        references: {
          model: 'usuario',
          key: 'id',
        }
      },
    },
    {
      sequelize,
      modelName: 'PostoColeta',
      tableName: 'posto_coleta',
    }
  );

module.exports = PostoColeta;
