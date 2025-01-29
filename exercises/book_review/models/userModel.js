const db = require('../configs/database');

const UserModel = {
  create: (name, email, password) => {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    return db.query(query, [name, email, password]);
  },

  findAll: () => {
    return db.query('SELECT * FROM users');
  },

  findById: (id) => {
    return db.query('SELECT * FROM users WHERE id = $1', [id]);
  },

  deleteById: (id) => {
    return db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  },
};

module.exports = UserModel;
