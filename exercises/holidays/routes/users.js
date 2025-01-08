const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { readJSONFile, writeJSONFile } = require('../utils');

let users = readJSONFile('users.json');

router.post('/users/register', (req, res) => {
  const { username, password, email, bio } = req.body;
  users = readJSONFile('users.json');
  const existedUser = users.find(
    (user) => user.email === email || user.username === username
  );

  if (existedUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword,
    bio,
  };
  users.push(newUser);
  writeJSONFile('users.json', users);
  res.status(201).json({
    message: 'User created successful',
    id: newUser.id,
    username: newUser.username,
    bio: newUser.bio,
  });
});

router.post('/users/login', (req, res) => {
  const { username, password } = req.body;

  const existedUser = users.find((user) => user.username);
  if (!existedUser) {
    return res.status(400).json({ message: 'User not found' });
  }
  if (bcrypt.compareSync(password, existedUser.password)) {
    const token = jwt.sign({ id: existedUser.id }, Config.secret_key, {
      expiresIn: Config.expiresIn,
    });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
