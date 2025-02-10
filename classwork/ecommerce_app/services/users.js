const { User } = require('../models');
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const [user, created] = await User.findOrCreate({
    where: { email: userData.email },
    defaults: { ...userData, password: hashedPassword },
  });

  if (!created) {
    throw { status: 400, message: 'Email already exists' };
  }
  const userResponse = user.toJSON();
  delete userResponse.password;
  return userResponse;
};

const getAllUsers = async () => {
  return await User.findAll({ attributes: { exclude: ['password'] } });
};

const getUserById = async (id) => {
  return await User.findByPk(id, { attributes: { exclude: ['password'] } });
};

const updateUser = async (id, updateData) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw { status: 404, message: 'User not found' };
  }

  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }

  await user.update(updateData);
  return { message: 'User updated successfully' };
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw { status: 404, message: 'User not found' };
  }

  await user.destroy();
  return { message: 'User deleted successfully' };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
