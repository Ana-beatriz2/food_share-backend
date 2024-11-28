module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reserva_produto', {
      reserva_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'reserva',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('reserva_produto');
  },
};
