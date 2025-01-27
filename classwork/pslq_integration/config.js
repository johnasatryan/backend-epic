require('dotenv').config();

const settings = {
  APP_PORT: process.env.PORT,
  database: process.env.DEFAULT_DB,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  targetDB: process.env.DB_NAME,
};

module.exports = settings;
