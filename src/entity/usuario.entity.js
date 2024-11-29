const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/index.js');

class Usuario extends Model {}


Usuario.init(
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
        email: {
          type: DataTypes.STRING(150),
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        senha: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        tipoUsuario: {
          type: DataTypes.ENUM('admin', 'doador', 'receptor'),
          allowNull: false,
          field: "tipo_usuario"
        },
        telefone: {
          type: DataTypes.STRING,
          allowNull: true,
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
          allowNull: true
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true
        },
        cnpj: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true
        }
    },
    {
        sequelize,
        modelName: "Usuario",
        tableName: "usuario"
    }
)

module.exports = Usuario;