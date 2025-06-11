const chalk = require('chalk');

function colorful(message) {
  return chalk.blue(message)  + chalk.red('!');
}

module.exports = colorful;

