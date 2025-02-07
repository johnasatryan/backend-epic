const { Sequelize } = require('sequelize');
const settings = require('./config');

const sequelize = new Sequelize(
  settings.DB.NAME,
  settings.DB.USER,
  settings.DB.PASSWORD,
  {
    host: settings.DB.HOST,
    port: settings.DB.PORT,
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
