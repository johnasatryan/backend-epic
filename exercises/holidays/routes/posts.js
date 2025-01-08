const express = require('express');
const router = express.Router();
const verifyUser = require('../middlewares');

const { readJSONFile, writeJSONFile } = require('../utils');

let posts = readJSONFile('posts.json');

router.post('/posts', verifyUser, (req, res) => {
  const { title, content } = req.body;
  posts = readJSONFile('posts.json');

  posts.push({ id: posts.length + 1, userId: req.userId, title, content });
  writeJSONFile('posts.json', posts);
  res.status(201).json({ message: 'Post created' });
});

module.exports = router;
