const db = require('../config/database');

const BookModel = {
  create: (title, author, publishedDate, addedByUserId) => {
    const query = `
      INSERT INTO books (title, author, published_date, added_by_user_id)
      VALUES (${title}, ${author}, ${publishedDate}, ${addedByUserId}) RETURNING *`;
    return db.query(query, [title, author, publishedDate, addedByUserId]);
  },

  findAll: () => {
    const query = `SELECT * FROM books`;
    return db.query(query);
  },

  findById: (id) => {
    const query = `SELECT * FROM books WHERE id = $1`;
    return db.query(query, [id]);
  },

  deleteById: (id) => {
    const query = `DELETE FROM books WHERE id = $1 RETURNING *`;
    return db.query(query, [id]);
  },

  updateById: (id, title, author, publishedDate) => {
    const query = `
      UPDATE books
      SET title = $1, author = $2, published_date = $3
      WHERE id = $4 RETURNING *`;
    return db.query(query, [title, author, publishedDate, id]);
  },
};

module.exports = BookModel;
