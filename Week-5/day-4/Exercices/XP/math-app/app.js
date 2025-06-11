const _ = require('lodash');
const math = require('./math');

// Example usage
const numbers = [1, 2, 3, 4, 5];

const sum = math.add(numbers[0], numbers[1]);
console.log('Sum:', sum);

const squaredNumbers = _.map(numbers, (num) => math.multiply(num, num));
console.log('Squared Numbers:', squaredNumbers);



