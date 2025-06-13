const bookModel = require('../models/bookModel');

const getAllBooks = (req, res) => {
  const books = bookModel.getBooks();
  res.status(200).json(books);
};

const getBookById = (req, res) => {
  const book = bookModel.getBookById(req.params.bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Title, author, and publishedYear are required' });
  }
  const newBook = bookModel.addBook({ title, author, publishedYear });
  res.status(201).json(newBook);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook
};