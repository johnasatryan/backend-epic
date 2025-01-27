const { Pool } = require('pg');
const settings = require('../config');

const { APP_PORT, targetDB, ...configs } = settings;

configs.database = targetDB;

const db = (text, data) => {
  const pool = new Pool(configs);
  return pool
    .query(text, data)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = db;
