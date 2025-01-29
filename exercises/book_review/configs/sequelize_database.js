const { Sequelize } = require('sequelize');
const settings = require('./config');

const sequelize = new Sequelize(
  settings.database,
  settings.user,
  settings.password,
  {
    host: settings.host,
    port: settings.port,
    dialect: 'postgres',
    logging: false, // set to true to see raw SQL queries
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Connected to PostgreSQL using Sequelize.'))
  .catch((err) => console.error('Unable to connect:', err.message));

module.exports = sequelize;
