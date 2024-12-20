const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');
const fs = require('node:fs');
require('dotenv').config();

// const envPath = path.join(__dirname, '.env');

// const PORT = fs.readFileSync(envPath, 'utf-8').split('=')[1];

const app = express();
const PORT = process.env.PORT;

let users = [];

app.use(bodyParser.json());

const middleware = (req, res, next) => {
  console.log('middleware starts...');
  console.log(req.url);
  next();
  console.log('middleware ends...');
};

const usernameValidator = (req, res, next) => {
  const { username, email, password, is_admin = false } = req.body;
  if (!username || username.length <= 2) {
    return res
      .status(400)
      .json({ message: 'Username length must be greater than 2' });
  }
  req.body = { username, email, password, is_admin: true };
  next();
};

const generateId = () => Math.random().toString(36).split('.')[1];

// app.use('/users', usernameValidator);

app.post('/users', usernameValidator, (req, res) => {
  const user = req.body;
  const id = generateId();
  users.push(user);
  const { password: _, ...withoutPassword } = user;
  console.log(withoutPassword);
  res.status(201).json(withoutPassword);
});

app.get('/users', (req, res) => {
  res.send(users);
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
