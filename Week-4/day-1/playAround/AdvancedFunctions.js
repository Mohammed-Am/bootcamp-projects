
//IIFE

(function (name) {
    console.log("Hello " + name);
})("Moo")


// Nested Function

function verify (name) {            // outer function  
    function isJohn() {             // inner function
        return name === "mo";     // full access to argument        
    }
    if (isJohn()) {
        console.log("Yep, this is John");
    }else{
         console.log("No, this is not  John");
    }
}
verify("John");



function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

a = addSquares(2, 3); // 4 + 9 = 13
b = addSquares(3, 4); // 9 + 16 = 25
c = addSquares(4, 5); // 16 + 25 = 41



const hummus = function(factor) {
    //parameter celled bindings
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas"); // 2 cans chickpeas
    ingredient(0.25, "cup", "tahini"); // 0.5 cap tahini
    ingredient(0.25, "cup", "lemon juice"); // 0.5 cup lemon juice
    ingredient(1, "clove", "garlic"); // 2  cloves garlic
    ingredient(2, "tablespoon", "olive oil"); // 4  tablespoons  olive oil  
    ingredient(0.5, "teaspoon", "cumin"); // 0.5  teaspoon  cumin
};

hummus(2)



function add() {
  let counter = 0;
  function plus() {
      counter += 1;
      console.log(counter) ;
  }
  plus();  
}

add() // 1




// Closures 


function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

let fnInside = outside(3);
console.log(fnInside) 
// function inside(y) {
//    return x + y;
//  }
console.dir(fnInside) 
// Closure (outside) x: 3

let result = fnInside(5); // The same as calling outside(3)(5)
console.log(result) // returns 8





let adding = ( function () {
  let counter = 0;
  function calculus() {
      counter += 1; 
      return counter
  }
  return calculus
})();

console.log(adding());//1
console.log(adding());//2
console.log(adding());//3



const adde = a => b => c =>  a + b + c;
const resulte = adde(72)(3)(7)
console.log(resulte)


// multiple arguments one at a time.

const multiply = (n, m) => (n * m)
multiply(3, 4) === 12 // true

const curryedMultiply = (n) => (m) => multiply(n, m)
let triple = curryedMultiply(3)
triple(4) === 12 // true


const g = n => n + 1;
const f = n => n * 2;

const h = x => f(g(x));

console.log(h(20)) //=>42

// we first calculate g(x) => 20 + 1 = 21
// and then claculate f(x) => 21 * 2 = 42
// the final result is 42
