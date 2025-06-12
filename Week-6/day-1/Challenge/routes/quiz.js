const express = require('express');

const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

router.get('/', (req, res) => {
  if (!req.session.quizState) {
    req.session.quizState = {
      currentQuestionIndex: 0,
      score: 0,
    };
  }

  const { currentQuestionIndex } = req.session.quizState;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  res.send(`
    <h1>Trivia Quiz Game</h1>
    <h3>Question ${currentQuestionIndex + 1}</h3>
    <p>${currentQuestion.question}</p>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" placeholder="Your answer" required />
      <button type="submit">Submit Answer</button>
    </form>
  `);
});

router.post('/', (req, res) => {
  const { answer } = req.body;
  const { currentQuestionIndex, score } = req.session.quizState;

  if (!req.session.quizState || currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];
  const isCorrect = answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase();

  if (isCorrect) {
    req.session.quizState.score += 1;
  }

  req.session.quizState.currentQuestionIndex += 1;

  const feedback = isCorrect
    ? `Correct! The answer is ${currentQuestion.answer}.`
    : `Incorrect. The correct answer is ${currentQuestion.answer}.`;

  if (req.session.quizState.currentQuestionIndex >= triviaQuestions.length) {
    res.send(`
      <h1>Trivia Quiz Game</h1>
      <p>${feedback}</p>
      <p>Quiz complete! <a href="/quiz/score">View your score</a>.</p>
    `);
  } else {
    res.send(`
      <h1>Trivia Quiz Game</h1>
      <p>${feedback}</p>
      <p><a href="/quiz">Next Question</a></p>
    `);
  }
});

router.get('/score', (req, res) => {
  const { score } = req.session.quizState || { score: 0 };
  const totalQuestions = triviaQuestions.length;

  req.session.quizState = null;

  res.send(`
    <h1>Trivia Quiz Game - Final Score</h1>
    <p>Your score: ${score} out of ${totalQuestions}</p>
    <p><a href="/quiz">Play Again</a></p>
  `);
});

module.exports = router;