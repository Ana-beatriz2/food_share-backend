const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
        timestemps: true
    }
  },
};

module.exports = config;
