const db = require('../config/database');

const ReviewModel = {
  create: (bookId, userId, review, rating) => {
    const query = `
      INSERT INTO reviews (book_id, user_id, review, rating)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    return db.query(query, [bookId, userId, review, rating]);
  },

  findAllByBookId: (bookId) => {
    return db.query('SELECT * FROM reviews WHERE book_id = $1', [bookId]);
  },

  deleteById: (id) => {
    return db.query('DELETE FROM reviews WHERE id = $1 RETURNING *', [id]);
  },

  updateById: (id, review, rating) => {
    const query = `
      UPDATE reviews
      SET review = $1, rating = $2
      WHERE id = $3 RETURNING *;
    `;
    return db.query(query, [review, rating, id]);
  },
};

module.exports = ReviewModel;
