const { usersService } = require('../services');

const createUser = async (req, res) => {
  try {
    const user = await usersService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || 'Failed to create user' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await usersService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const response = await usersService.updateUser(req.params.id, req.body);
    res.status(200).json(response);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || 'Failed to update user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const response = await usersService.deleteUser(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || 'Failed to delete user' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
