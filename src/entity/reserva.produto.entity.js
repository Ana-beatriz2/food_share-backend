const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/index.js');
const Reserva = require("./reserva.entity.js");
const Produto = require("./produto.entity.js");

class ReservaProduto extends Model {}

ReservaProduto.init(
    {
        reservaId: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            field: 'reserva_id',
            references: {
                model: 'reserva',
                key: 'id'
            }
        },
        produtoId: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            field: 'produto_id',
            references: {
                model: 'produto',
                key: 'id'
            }
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'ReservaProduto',
        tableName: 'reserva_produto'
    }
);

ReservaProduto.belongsTo(Reserva, { foreignKey: 'reservaId' })
Reserva.hasMany(ReservaProduto,  { foreignKey: 'reservaId' })

ReservaProduto.belongsTo(Produto, { foreignKey: 'produtoId' })
Produto.hasMany(ReservaProduto, { foreignKey: 'produtoId' })

module.exports = ReservaProduto;