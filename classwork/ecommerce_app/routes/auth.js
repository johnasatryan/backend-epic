const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/auth');

router.post(
  '/register',
  [
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 }),
    check('name').notEmpty(),
  ],
  authController.register
);

router.post(
  '/login',
  [check('email').isEmail().normalizeEmail(), check('password').exists()],
  authController.login
);

router.post('/logout', authController.logout);

module.exports = router;
