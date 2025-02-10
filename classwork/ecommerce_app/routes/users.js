const express = require('express');
const { usersController } = require('../controllers');
const { authenticateUser, isAdmin } = require('../middlewares/users');
const { check } = require('express-validator');

const router = express.Router();

router.post(
  '/',
  [
    check('username').optional().notEmpty(),
    check('email').optional().isEmail().normalizeEmail(),
    check('password').optional().isLength({ min: 6 }),
  ],
  usersController.createUser
);

// Get all users (Admin only)
router.get('/', isAdmin, usersController.getAllUsers);

// Get a single user by ID
router.get('/:id', authenticateUser, usersController.getUserById);

// Update user profile
router.put(
  '/:id',
  [
    check('username').optional().notEmpty(),
    check('email').optional().isEmail().normalizeEmail(),
    check('password').optional().isLength({ min: 6 }),
  ],
  usersController.updateUser
);

// Delete a user (Admin only)
router.delete('/:id', usersController.deleteUser);

module.exports = router;
