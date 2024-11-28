module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reserva', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      usuario_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      observacao: {
        type: Sequelize.STRING
      },
      posto_coleta_id: {
        type: Sequelize.UUID,
        references: {
          model: 'post_coleta',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      entregue: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      data_retirada: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('reserva');
  },
};