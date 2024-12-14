module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posto_coleta_produto', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      posto_coleta_id: {
        type: Sequelize.UUID,
        references: {
          model: 'posto_coleta',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      produto_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'produto',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      usuario_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      observacao: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      },
      validade: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('posto_coleta_produto');
  },
};
