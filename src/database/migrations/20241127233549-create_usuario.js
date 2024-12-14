module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_usuario: {
        type: Sequelize.ENUM('doador', 'receptor'),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING
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
      cpf: {
        type: Sequelize.STRING,
        unique: true
      },
      cnpj: {
        type: Sequelize.STRING,
        unique: true
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('usuario');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_usuario_tipo_usuario";');
  },
};