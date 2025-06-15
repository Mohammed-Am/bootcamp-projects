const express = require('express');
const router = express.Router();
const pool = require('../db');

// Quiz home (list or start quiz)
router.get('/', (req, res) => {
  res.render('quiz');
});

// Show quiz by ID
router.get('/:id', async (req, res) => {
  const quizId = req.params.id;
  try {
    const quizResult = await pool.query('SELECT * FROM quizzes WHERE id = $1', [quizId]);
    const questionsResult = await pool.query('SELECT * FROM questions WHERE quiz_id = $1', [quizId]);
    if (quizResult.rows.length === 0) {
      return res.status(404).send('Quiz not found');
    }
    res.render('quiz', {
      quiz: quizResult.rows[0],
      questions: questionsResult.rows
    });
  } catch (err) {
    res.status(500).send('Database error');
  }
});

// submit 

router.post('/:id/submit', async (req, res) => {
  const quizId = req.params.id;
  try {
    // Get all questions for this quiz
    const questionsResult = await pool.query('SELECT * FROM questions WHERE quiz_id = $1', [quizId]);
    const questions = questionsResult.rows;

    // Calculate score
    let score = 0;
    questions.forEach(q => {
      const userAnswer = req.body[`q${q.id}`];
      if (userAnswer && userAnswer === q.correct_option) {
        score++;
      }
    });

    // Render result page with score
    res.render('result', { score, total: questions.length });
  } catch (err) {
    res.status(500).send('Database error');
  }
});

module.exports = router; 