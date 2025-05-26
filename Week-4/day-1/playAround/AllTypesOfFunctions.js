const foo = Symbol()
const foo2 = Symbol()
console.log(foo == foo2)

//Function expression

const funcName = function (moo) {
  // statement to execute
  console.log(moo)
}
funcName('Mohammed');



//normal Function
function myFunc (x, y) {
  return x + y;
}

console.log(myFunc(2,9));


//Arrow function
const myFunc1 = (x, y) => {
  return x + y;
}

console.log(myFunc1(6,7))



const show = (name, age) => {
    console.log(name, age);
}
show("Mohammed",25) 



const showm = (x) => x*2;
showm(3) // 6

//same as
const showme = x => x*2
showme(3) // 6


let username = "mohammed";
const changeUsername = () => username.toUpperCase(); 
changeUsername() 




//calcul //Method 1 using Arrow function
let operator = '-'
let calculator = (a,b) =>{
               switch(operator){
                  case '*' : return a * b;
                  case '+' : return a + b;
                  case '-' : return a - b;
                  case '/' : return a / b;
                  case '%' : return a % b;
               }

}
console.log(`calculator : ${calculator(5,2)}`)


//Method 2 using conditional (ternary) operator
let operator2 = '-'
let calculatore = (a,b) => {
   return     operator2 == '+' ? a + b :
              operator2 == '-' ? a - b : 
              operator2 == '*' ? a * b :
              operator2 == '/' ? a / b :
              operator2 == '%' ? a % b :
             "Invalid operator"   
}

console.log(`calculator : ${calculatore(1,8)}`)









