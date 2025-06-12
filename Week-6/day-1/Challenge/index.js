const express = require('express');
const session = require('express-session');
const quizRouter = require('./routes/quiz');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'trivia-quiz-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.use('/quiz', quizRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Trivia Quiz Game! Navigate to /quiz to start.');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});