require('dotenv').config();

const settings = {
  PORT: process.env.PORT,
  DEFAULT_DB: process.env.DEFAULT_DB,
  JWT_SECRET: process.env.JWT_SECRET,
  DB: {
    HOST: process.env.HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    DIALECT: process.env.DIALECT,
  },
};

module.exports = settings;
