const express = require('express');
const { port } = require('./configs/config');
const { connectDB, getDB } = require('./database/mongoClient');
const bookRouter = require('./routes/bookRouter');
// const { initDatabaseCollection } = require('./services/bookService');
const app = express();

app.use(express.json());

app.use('/api/books', bookRouter);

connectDB().then(() => {
  app.listen(port, () => {
    // initDatabaseCollection(getDB());
    console.log(`Server runing at port: ${port}`);
  });
});
