// Whole-script strict mode syntax
"use strict";

const v = "Hi! I'm a strict mode script!";
console.log(v)

//testing 
/*
module.exports.first = () => {
    console.log("First Export");
}

module.exports.second = () => {
    console.log("Second Export");
}

console.log(module);
console.log(module.exports);

*/


//importing  file from export1.js
const  { first, second} =  require("./export1.js");

first();
second();


////importing  object  from export2.js
const { animals } = require("./export2.js");

console.log(animals);


//exporting the exports as a single variable?
const myAnimalExports = require("./export2.js");

console.log(myAnimalExports.animals);


//
const greeting =  require("./greeting.js");

const name = "Mohammed";

greeting(name);

//multiple export 

const person = require("./person.js");

console.log(person.name, person.car);

//
const hello = require("./hello.js");

hello()