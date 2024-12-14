module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produto', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marca: {
        type: Sequelize.STRING
      },
      tipo_alimento: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('produto');
  },
};