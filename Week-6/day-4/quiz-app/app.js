const express = require('express');
const path = require('path');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
const quizRoutes = require('./routes/quiz');
const adminRoutes = require('./routes/admin');

app.get('/', async (req, res) => {
  try {
    // Fetch categories and quizzes
    const categoriesResult = await pool.query('SELECT * FROM categories');
    const quizzesResult = await pool.query('SELECT * FROM quizzes');
    res.render('index', {
      categories: categoriesResult.rows,
      quizzes: quizzesResult.rows
    });
  } catch (err) {
    res.status(500).send('Database error');
  }
});

app.use('/quiz', quizRoutes);
app.use('/admin', adminRoutes);

app.get('/result', (req, res) => {
  res.render('result');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 