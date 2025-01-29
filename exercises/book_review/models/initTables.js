const db = require('../configs/database');
const sequelize = require('../configs/sequelize_database');
// const createBooksTable = () => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS books (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(100) NOT NULL,
//     author VARCHAR(100) NOT NULL,
//     published_data DATE,
//     added_by_user_id INT REFERENCES users(id) ON DELETE CASCADE
//     );
//   `;
//   return db
//     .query(query)
//     .then(() => console.log('Books table ensured to exist'))
//     .catch((err) => {
//       console.error('Error creating books table:', err.message);
//     });
// };

// const createUsersTable = () => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(100) UNIQUE NOT NULL,
//     password TEXT NOT NULL,
//     bio TEXT
//     );
//   `;
//   return db
//     .query(query)
//     .then(() => console.log('Users table ensured to exist'))
//     .catch((err) => {
//       console.error('Error creating books table:', err.message);
//     });
// };

// const createReviewTable = () => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS reviews (
//     id SERIAL PRIMARY KEY,
//     book_id INT REFERENCES books(id) ON DELETE CASCADE,
//     user_id INT REFERENCES users(id) ON DELETE CASCADE,
//     review TEXT NOT NULL,
//     rating INT CHECK (rating BETWEEN 1 AND 5),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )
//   `;

//   return db
//     .query(query)
//     .then(() => console.log('Reviews table ensured to exist'))
//     .catch((err) => {
//       console.error('Error creating books table:', err.message);
//     });
// };

// const initializeTables = () => {
//   createUsersTable()
//     .then(createBooksTable)
//     .then(createReviewTable)
//     .then(() => {
//       console.log('All tables ensured to exist');
//     })
//     .catch((err) => console.error('Error initializing tables:', err.message));
// };

const initializeTables = () => {
  sequelize
    .sync()
    .then(() => {
      'Databse & tables are ready to use';
    })
    .catch((err) => {
      console.error('Database sync error', err.message);
    });
};
module.exports = { initializeTables };
