module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posto_coleta', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      logradouro: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING(2)
      },
      ponto_referencia: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.UUID,
        references: {
          model: 'usuario',
          key: 'id',
        },
        onDelete: 'SET NULL',
        allowNull: true
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('posto_coleta');
  },
};