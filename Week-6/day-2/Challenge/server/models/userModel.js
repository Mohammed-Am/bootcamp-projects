const db = require('../config/db');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const User = {
  // Create user with transaction
  create: (userData, callback) => {
    const { email, username, first_name, last_name, password } = userData;
    
    db.serialize(() => {
      db.run('BEGIN TRANSACTION');
      
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      
      db.run(
        'INSERT INTO users (email, username, first_name, last_name) VALUES (?, ?, ?, ?)',
        [email, username, first_name, last_name],
        function(err) {
          if (err) {
            db.run('ROLLBACK');
            return callback(err);
          }
          
          db.run(
            'INSERT INTO hashpwd (username, password) VALUES (?, ?)',
            [username, hashedPassword],
            function(err) {
              if (err) {
                db.run('ROLLBACK');
                return callback(err);
              }
              db.run('COMMIT');
              callback(null, { id: this.lastID, username });
            }
          );
        }
      );
    });
  },

  // Find user by username
  findByUsername: (username, callback) => {
    db.get(
      'SELECT u.*, h.password FROM users u JOIN hashpwd h ON u.username = h.username WHERE u.username = ?',
      [username],
      callback
    );
  },

  // Find user by ID
  findById: (id, callback) => {
    db.get('SELECT * FROM users WHERE id = ?', [id], callback);
  },

  // Get all users
  findAll: (callback) => {
    db.all('SELECT * FROM users', callback);
  },

  // Update user
  update: (id, userData, callback) => {
    const { email, first_name, last_name } = userData;
    db.run(
      'UPDATE users SET email = ?, first_name = ?, last_name = ? WHERE id = ?',
      [email, first_name, last_name, id],
      callback
    );
  }
};

module.exports = User;