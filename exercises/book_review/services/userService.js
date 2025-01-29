const UserModel = require('../models/seqUserModel');

const UserService = {
  createUser: (name, email, password, bio) => {
    return UserModel.create({ name, email, password, bio });
  },

  getAllUsers: () => {
    return UserModel.findAll();
  },

  getUserById: (id) => {
    if (!id) {
      return Promise.reject(new Error('User ID is required'));
    }
    return UserModel.findById(id);
  },

  deleteUser: (id) => {
    if (!id) {
      return Promise.reject(new Error('User ID is required'));
    }
    return UserModel.deleteById(id);
  },
};

module.exports = UserService;
