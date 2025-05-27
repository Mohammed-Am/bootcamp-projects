let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4); //  => _ __ ___ ____ after each count ++ the resulet add a _ to result
 mountain(4);//  => first result give new assign which is ____/  and then add ' each 4 counter that's mean ____/'''' and than result r-assigen to new value again result will be ____/''''\\     
 flat(4) //  =>  the flat now find new strg in result that's work on and repeat same steps but this time will br ____/'''\\____

 return result; //  =>   ____/''''\\____
}

console.log(landscape())
//  =>     ____/''''\\____



//EX 2

const addTo = x => y => x + y;
const addToTen = addTo(10);// now give the arg 10 to x and return function 
addToTen(3); // get the function and add 3 to y and return 10 + 3
//13


console.log(addToTen(3))


//Ex4

const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
console.log(add5(12))

// ==> 17

//EX5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add4 = (num) => num + 4;
console.log(compose(add1, add4)(10))


// add1 ->  10 + 1 =11
// add4 =>  11 + 4 = 15 
//g(a) = add4(10)
//add1(g(a)) = add1(14)
// ==>    15  


