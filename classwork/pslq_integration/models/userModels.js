const db = require('../database/database');

const init_users_table = () => {
  return db(`CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT CHECK(age > 0),
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);`).then((result) => {
    return result;
  });
};

const create_user = (user) => {
  return db(
    ` INSERT INTO users(name, email, password, age)
    VALUES($1, $2, $3, $4)
    `,
    [...Object.values(user)]
  )
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
};

const get_all_users = () => {
  return db(`SELECT * FROM users;`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.stack);
    });
};

module.exports = {
  init_users_table,
  create_user,
  get_all_users,
};
