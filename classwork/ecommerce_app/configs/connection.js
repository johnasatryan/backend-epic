const { Client } = require('pg');
const settings = require('./config');

const checkIfDatabaseExists = () => {
  const client = new Client({
    port: settings.DB.PORT,
    host: settings.DB.HOST,
    user: settings.DB.USER,
    password: settings.DB.PASSWORD,
    database: settings.DEFAULT_DB,
  });

  client
    .connect()
    .then(() => {
      console.log(
        `Connected to ${settings.DEFAULT_DB}. Checking if ${settings.DB.NAME} exists...`
      );
      return client
        .query(`SELECT 1 FROM pg_database WHERE datname=$1`, [settings.DB.NAME])
        .then((row) => {
          if (row.rowCount === 0) {
            return client
              .query(`CREATE DATABASE ${settings.DB.NAME}`)
              .then(() => {
                console.log(`"${settings.DB.NAME}" created successfully`);
              })
              .catch((err) => {
                console.log(err.stack);
              });
          } else {
            console.log('Database already exists');
          }
        });
    })
    .catch((err) => {
      console.log(err.stack);
    })
    .finally(() => {
      client
        .end()
        .then(() => {
          console.log('Connection closed');
        })
        .catch((err) => {
          console.log(err.stack);
        });
    });
};

checkIfDatabaseExists();
