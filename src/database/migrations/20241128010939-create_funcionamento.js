module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funcionamento', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      dia: {
        type: Sequelize.ENUM('segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'),
        allowNull: false
      },
      hora_inicio: {
        type: Sequelize.TIME,
        allowNull: false
      },
      hora_fim: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      posto_coleta_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'posto_coleta',
          key: 'id',
        },
        onDelete: 'CASCADE',
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('funcionamento');
  },
};