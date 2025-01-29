require('dotenv').config();

const settings = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  default_database: process.env.DB_DEFAULT,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

module.exports = settings;
