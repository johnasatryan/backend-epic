const { Client } = require('pg');
const settings = require('../config');

const { APP_PORT, targetDB, ...configs } = settings;

// const client = new Client(configs);

// client
//   .connect()
//   .then(() => {
//     console.log('Connected to database...');
//     return client
//       .query('SELECT NOW()')
//       .then((result) => {
//         console.log(result.rows[0]);
//       })
//       .catch((err) => {
//         console.log(err.stack);
//       });
//   })
//   .catch((err) => {
//     console.log(err.stack);
//   })
//   .finally(() => {
//     client
//       .end()
//       .then(() => {
//         console.log('Connection closed...');
//       })
//       .catch((err) => {
//         console.log(err.stack);
//       });
//   });

const checkIfDatabaseExists = (config, dbName) => {
  const client = new Client(config);

  client
    .connect()
    .then(() => {
      console.log(
        `Connected to ${config.database}. Checking if ${dbName} exists...`
      );
      return client
        .query(`SELECT 1 FROM pg_database WHERE datname=$1`, [dbName])
        .then((row) => {
          if (row.rowCount === 0) {
            return client
              .query(`CREATE DATABASE ${targetDB}`)
              .then(() => {
                console.log(`"${targetDB}" created successfully`);
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

checkIfDatabaseExists(configs, targetDB);
