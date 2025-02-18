'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produto', [
      {
        id: uuidv4(),
        nome: 'Arroz',
        marca: 'Tio João',
        tipo_alimento: 'Grãos',
      },
      {
        id: uuidv4(),
        nome: 'Feijão Preto',
        marca: 'Bico da Seda',
        tipo_alimento: 'Grãos',
      },
      {
        id: uuidv4(),
        nome: 'Macarrão Instantâneo',
        marca: 'Nissin',
        tipo_alimento: 'Produtos de Padaria',
      },
      {
        id: uuidv4(),
        nome: 'Molho de Tomate',
        marca: 'Elefante',
        tipo_alimento: 'Enlatados',
      },
      {
        id: uuidv4(),
        nome: 'Leite em Pó',
        marca: 'Ninho',
        tipo_alimento: 'Produtos Lácteos',
      },
      {
        id: uuidv4(),
        nome: 'Queijo Parmesão',
        marca: 'Vigor',
        tipo_alimento: 'Produtos Lácteos',
      },
      {
        id: uuidv4(),
        nome: 'Café Torrado',
        marca: 'Pilão',
        tipo_alimento: 'Bebidas',
      },
      {
        id: uuidv4(),
        nome: 'Sopa Instantânea',
        marca: 'Knorr',
        tipo_alimento: 'Produtos Desidratados',
      },
      {
        id: uuidv4(),
        nome: 'Óleo de Soja',
        marca: 'Liza',
        tipo_alimento: 'Óleos e Gorduras',
      },
      {
        id: uuidv4(),
        nome: 'Grão-de-Bico',
        marca: 'Primor',
        tipo_alimento: 'Grãos',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produto', null, {});
  }
};
