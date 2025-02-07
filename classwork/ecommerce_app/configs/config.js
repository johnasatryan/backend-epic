require('dotenv').config();

const settings = {
  PORT: process.env.PORT || 3000,
  DB: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
  },
  DEFAULT_DB: process.env.DEFAULT_DB,
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = settings;
