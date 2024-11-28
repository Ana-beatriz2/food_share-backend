module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produto_coleta_produto', {
      posto_coleta_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'posto_coleta',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      produto_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'produto',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
      }

    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('produto_coleta_produto');
  },
};
