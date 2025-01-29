const { Pool, Client } = require('pg');
const settings = require('./config');

const { default_database, database, ...configs } = settings;

const enusreDatabaseExists = () => {
  const client = new Client({
    database: default_database,
    ...configs,
  });

  return client
    .connect()
    .then(() => {
      console.log(
        'Connected to default database (postgres). Checking for target database...'
      );
      return client
        .query(`SELECT 1 FROM pg_database WHERE datname = $1`, [database])
        .then((res) => {
          if (res.rowCount === 0) {
            console.log(`"${database}" database does not exist. Creating...`);
            return client.query(`CREATE DATABASE ${database}`).then(() => {
              console.log(`Database ${database} created successfully`);
            });
          } else {
            console.log(`Database "${database}" already exists.`);
          }
        });
    })
    .catch((err) => {
      console.error('Error checking or creating the database:', err.message);
    })
    .finally(() => {
      return client.end().then(() => {
        console.log('Connection to default database closed.');
      });
    });
};

const pool = new Pool({ database, ...configs });
const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = { query, enusreDatabaseExists };
