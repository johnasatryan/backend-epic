const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    authors: { type: [String], required: true },
    isbn: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
