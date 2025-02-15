const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || 'Failed to retrieve products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productsService.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || 'Failed to retrieve products' });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productsService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || 'Failed to retrieve products' });
  }
};
const updateProduct = (req, res) => {};
const deleteProduct = (req, res) => {};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
