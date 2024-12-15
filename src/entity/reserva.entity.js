const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/index.js');
const Usuario = require('./usuario.entity.js');
const PostoColeta = require('./posto.coleta.entity.js');

class Reserva extends Model {}

Reserva.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    usuarioId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'usuario_id',
      references: {
        model: 'usuario',
        key: 'id',
      }
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postoColetaId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'posto_coleta_id',
      references: {
        model: 'posto_coleta',
        key: 'id',
      }
    },
    entregue: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dataRetirada: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'data_retirada',
    },
  },
  {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reserva',
  }
);

Reserva.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(Reserva, { foreignKey: 'usuarioId' });

Reserva.belongsTo(PostoColeta, { foreignKey: 'postoColetaId' });
PostoColeta.hasMany(Reserva, { foreignKey: 'postoColetaId' });

module.exports = Reserva;