const greet = require('../greeting');
const colorfulMessage = require('../colorful-message');
const readFileContent = require('./read-file');



console.log(greet('b3bo3'));
console.log(colorfulMessage('Hello, colorful world!'));
readFileContent('file-data.txt');