-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- Create quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES categories(id),
  title VARCHAR(200) NOT NULL
);

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  quiz_id INTEGER REFERENCES quizzes(id),
  question_text TEXT NOT NULL,
  option_a VARCHAR(200) NOT NULL,
  option_b VARCHAR(200) NOT NULL,
  option_c VARCHAR(200) NOT NULL,
  option_d VARCHAR(200) NOT NULL,
  correct_option CHAR(1) NOT NULL
);

-- Seed data
INSERT INTO categories (name) VALUES ('Geography');
INSERT INTO quizzes (category_id, title) VALUES (1, 'Capital Cities');
INSERT INTO questions (quiz_id, question_text, option_a, option_b, option_c, option_d, correct_option) VALUES
(1, 'What is the capital of France?', 'Paris', 'London', 'Berlin', 'Madrid', 'A'),
(1, 'What is the capital of Japan?', 'Seoul', 'Tokyo', 'Beijing', 'Bangkok', 'B'),
(1, 'What is the capital of Canada?', 'Toronto', 'Vancouver', 'Ottawa', 'Montreal', 'C');
