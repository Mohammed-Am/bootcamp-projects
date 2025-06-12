const express = require('express');
const router = express.Router();

const books = [];
let idCounter = 1; 

router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', (req, res) => {
    const { title, author, year } = req.body;
    
    if (!title || !author || !year) {
        return res.status(400).json({ error: 'Title, author, and year are required' });
    }

    const book = {
        id: idCounter++,
        title,
        author,
        year
    };
    
    books.push(book);
    res.status(201).json(book);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, year } = req.body;
    
    const book = books.find(b => b.id === id);
    
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    if (title) book.title = title;
    if (author) book.author = author;
    if (year) book.year = year;
    
    res.json(book);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }

    books.splice(index, 1);
    res.status(204).send();
});

module.exports = router;