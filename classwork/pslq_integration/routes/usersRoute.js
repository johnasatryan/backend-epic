const express = require('express');
const router = express.Router();
const {
  init_users_table,
  create_user,
  get_all_users,
} = require('../models/userModels');

init_users_table()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.stack);
    return;
  });

router.post('/', (req, res) => {
  const user = req.body;
  create_user(user)
    .then((result) => {
      console.log(result);
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(400).json({ message: 'Something went wrong' });
    });
});

router.get('/', (req, res) => {
  get_all_users().then((result) => {
    res.status(200).json(result);
  });
});
module.exports = router;
