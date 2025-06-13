// server/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Read all books
router.get('/', bookController.getAllBooks);

// Read a single book by ID
router.get('/:bookId', bookController.getBookById);

// Create a new book
router.post('/', bookController.createBook);

module.exports = router;