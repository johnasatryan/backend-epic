const { getDB } = require('../database/mongoClient');
const { ObjectId } = require('mongodb');
// const collection = () => getDB().collection('books');
const Book = require('../models/bookModel');
let books = null;

const initDatabaseCollection = (existentDb) => {
  books = existentDb.collection('books');
};
const addBook = async (bookData) => {
  // const result = await collection().insertOne(bookData);
  // console.log(bookData);
  // const result = await books.insertOne(bookData);
  // return result.insertedId;

  const book = new Book(bookData);
  return await book.save();
};

const getAllBooks = async () => {
  // return await books.find().toArray();
  return await Book.find();
};

const getBookById = async (id) => {
  const objectId = ObjectId.createFromHexString(id);
  // console.log(objectId);
  // return await books.findOne(objectId);

  return await Book.findOne(objectId);
};

const updateBook = async (id, updatedData) => {
  const objectId = ObjectId.createFromHexString(id);

  // const result = await books.updateOne(id, { $set: updatedBook });
  // return result.modifiedCount;

  const result = await Book.findOneAndUpdate(
    objectId,
    { $set: updatedData },
    { new: true, runValidators: true }
  );
  return result;
};

const deleteBook = async (id) => {
  const result = await books.deleteOne(id);
  return result.deletedCount;
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  initDatabaseCollection,
};
