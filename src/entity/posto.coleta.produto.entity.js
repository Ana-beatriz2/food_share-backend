const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/index.js');
const Produto = require("./produto.entity.js");
const PostoColeta = require("./posto.coleta.entity.js");
const Usuario = require("./usuario.entity.js");

class PostoColetaProduto extends Model {}

PostoColetaProduto.init( 
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      postoColetaId: {
        type: DataTypes.UUID,
        field: 'posto_coleta_id',
        references: {
          model: 'posto_coleta',
          key: 'id',
        }
      },
      produtoId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'produto_id',
        references: {
          model: 'produto',
          key: 'id',
        }
      },
      usuarioId: {
        type: DataTypes.UUID,
        field: 'usuario_id',
        references: {
          model: 'usuario',
          key: 'id',
        }
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      observacao: {
        type: DataTypes.STRING,
      },
      imagem: {
        type: DataTypes.STRING,
      },
      validade: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PostoColetaProduto',
      tableName: 'posto_coleta_produto'
    }
  );

module.exports = PostoColetaProduto;


PostoColetaProduto.belongsTo(Produto, { foreignKey: 'produtoId' });
Produto.hasMany(PostoColetaProduto, { foreignKey: 'produtoId' });

PostoColetaProduto.belongsTo(PostoColeta, { foreignKey: 'postoColetaId' });
PostoColeta.hasMany(PostoColetaProduto, { foreignKey: 'postoColetaId' });

PostoColetaProduto.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(PostoColetaProduto, { foreignKey: 'usuarioId' });
  