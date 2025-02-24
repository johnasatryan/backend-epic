const bookService = require('../services/bookService');

const addBook = async (req, res) => {
  try {
    const book = req.body;
    if (!book.title || !book.isbn) {
      return res.status(400).json({ message: 'Title and ISBN are required' });
    }
    const id = await bookService.addBook(book);
    res.status(201).json({ message: 'Book added', id });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error adding book', error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching books', error: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(id);
    res.status(200).json(book);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching book', error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await bookService.updateBook(id, updatedData);
    console.log(result);

    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error updating book', error: err.message });
  }
};
module.exports = { addBook, getAllBooks, getBookById, updateBook };
