const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const path = require('path');

dotenv.config();

const config = {
  development: {
    connection: {
      dialect: 'postgres',
      database: process.env.DB_NAME,
      port: '5432',
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      define: {
          timestamps: false,
          freezeTableName: true
      }
    }
  },
};

const sequelize = new Sequelize(config.development.connection);

module.exports = sequelize;