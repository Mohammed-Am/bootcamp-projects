/*const myArray = [2, 3, 4, 5, 6]; 

//1st example with arrow function
myArray.forEach((number, index) => { 
    console.log("number: ", number) // logs each element of the array
    console.log("index: ", index) // logs each index of the array
}); 

//2nd example with arrow function
myArray.forEach((number, i, arr) => { 
    arr[i] = arr[i] * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]

//2nd example with function expression
myArray.forEach(function(number, i, arr) { 
    arr[i] = number * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]
*/
//Ex
const numbers = [10,11,12,15,20];

numbers.forEach(number => console.log(number))



//3rd example
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

function isEven(x) {
  console.log('------>' + x)
  return (x % 2 == 0);
}

let result = myArr.some((value) => isEven(value));
console.log('isEven'+ result)


// ex 
const words = ["wow","hey","bye"];

function foundLetter(x){
    return x.includes('h')
}


let r = words.some( (name) =>  foundLetter(name) )

console.log(r)


//EX

const mywords = ["hello","hey","hola" ];

let ch = mywords.every( msg => msg = msg.startsWith('h'))
console.log(`the msg stert with litter 'h' ${ch}`)

