const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    
    if (!email || !username || !password) {
      return res.status(400).json({ error: 'Email, username, and password are required' });
    }

    User.create({ email, username, first_name, last_name, password }, (err, user) => {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          return res.status(400).json({ error: 'Username or email already exists' });
        }
        return res.status(500).json({ error: 'Server error' });
      }
      res.status(201).json({ message: 'User registered successfully', user });
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    User.findByUsername(username, async (err, user) => {
      if (err || !user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      res.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllUsers = async (req, res) => {
  User.findAll((err, users) => {
    if (err) {
      return res.status(500).json({ error: 'Server error' });
    }
    res.json(users);
  });
};

exports.getUserById = async (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  });
};

exports.updateUser = async (req, res) => {
  const { email, first_name, last_name } = req.body;
  
  User.update(req.params.id, { email, first_name, last_name }, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Server error' });
    }
    res.json({ message: 'User updated successfully' });
  });
};