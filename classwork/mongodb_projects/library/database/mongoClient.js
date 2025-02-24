const { MongoClient } = require('mongodb');
const { dbName, mongoUri } = require('../configs/config');
const mongoose = require('mongoose');
let db = null;

const client = new MongoClient(mongoUri);

// const connectDB = async () => {
//   try {
//     await client.connect();
//     db = client.db(dbName);
//     console.log(`Connected to MongoDB: ${dbName}`);
//   } catch (err) {
//     console.error(`MongoDB connection failed: ${dbName}`);
//     process.exit(1);
//   }
// };

const getDB = () => {
  if (!db) throw new Error('Database not connected');
  return db;
};

const connectDB = async () => {
  try {
    await mongoose.connect(`${mongoUri}/${dbName}`);
    console.log(`Connected to MongoDB: ${dbName}`);
  } catch (err) {
    console.error(`MongoDB connection failed: ${dbName}`, err);
    process.exit(1);
  }
};

module.exports = { connectDB, getDB };
