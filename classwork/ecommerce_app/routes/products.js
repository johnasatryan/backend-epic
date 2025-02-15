const express = require('express');

const { productsController } = require('../controllers');
const { authenticateUser, isAdmin } = require('../middlewares/users');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductById);

router.post('/', productsController.createProduct);

router.put('/', authenticateUser, isAdmin, productsController.updateProduct);

router.delete('/', authenticateUser, isAdmin, productsController.deleteProduct);

module.exports = router;
