const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.post('/', bookController.addBook);

module.exports = router;
