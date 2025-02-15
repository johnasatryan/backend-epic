const { Product } = require('../models');

const getAllProducts = async () => {
  return Product.findAll();
};

const getProductById = async (id) => {
  return await Product.findByPk(id);
};

const createProduct = async (userId, productData) => {
  return await Product.create({ ...productData, userId });
};

module.exports = { getAllProducts, getProductById, createProduct };
