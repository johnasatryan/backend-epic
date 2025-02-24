require('dotenv').config();

const settings = {
  port: process.env.PORT,
  dbName: process.env.DB_NAME,
  mongoUri: process.env.MONGO_URI,
};

module.exports = settings;
