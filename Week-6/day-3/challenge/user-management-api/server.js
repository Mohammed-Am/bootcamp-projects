const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper: Read users from file
function readUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper: Write users to file
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// POST /register
router.post('/register', (req, res) => {
  const { name, lastname, email, username, password } = req.body;
  if (!name || !lastname || !email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  const users = readUsers();
  if (users.find(u => u.username === username || u.email === email)) {
    return res.status(400).json({ message: 'username alrady exits' });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: Date.now().toString(),
    name,
    lastname,
    email,
    username,
    password: hashedPassword
  };
  users.push(newUser);
  try {
    writeUsers(users);
    res.json({ message: 'register' });
  } catch (err) {
    res.status(500).json({ message: 'Error writing user data.' });
  }
});

// POST /login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required.' });
  }
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'User not registered.' });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ message: 'Incorrect credentials.' });
  }
  res.json({ message: `Hi ${username} welcome back again!`  });
});

// GET /users
router.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users.map(u => {
    const { password, ...rest } = u;
    return rest;
  }));
});

// GET /users/:id
router.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found.' });
  const { password, ...rest } = user;
  res.json(rest);
});

// PUT /users/:id
router.put('/users/:id', (req, res) => {
  const users = readUsers();
  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'User not found.' });

  const { name, lastname, email, username, password } = req.body;
  if (name) users[idx].name = name;
  if (lastname) users[idx].lastname = lastname;
  if (email) users[idx].email = email;
  if (username) users[idx].username = username;
  if (password) users[idx].password = bcrypt.hashSync(password, 10);

  try {
    writeUsers(users);
    const { password, ...rest } = users[idx];
    res.json(rest);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user.' });
  }
});

app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});