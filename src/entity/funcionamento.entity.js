const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/index.js');
const PostoColeta = require("../entity/posto.coleta.entity.js");

class Funcionamento extends Model {}

Funcionamento.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    dia: {
      type: DataTypes.ENUM('segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'),
      allowNull: false
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: false
    },
    postoColetaId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'posto_coleta_id',
      references: {
        model: 'posto_coleta',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'Funcionamento',
    tableName: 'funcionamento'
  }
);

Funcionamento.belongsTo(PostoColeta, { foreignKey: 'postoColetaId' });
PostoColeta.hasMany(Funcionamento, { foreignKey: 'postoColetaId' });

module.exports = Funcionamento;
