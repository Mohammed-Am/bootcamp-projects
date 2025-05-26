/*function autoexecute() {
    let x = 1;
};
console.log(x);*/
//Uncaught ReferenceError: x is not defined

/*
function doSomething(){
  //console.log(x); //undefined
  var x = 1;
  console.log("x: ", x); //x: 1
}
doSomething();
*/


/*
function doSomething(){
  console.log(x);
  let x = 1;
}
doSomething();
//Uncaught ReferenceError: x is not defined

*/


function doSomething(){
  var x = 1
  var x = 2;
  console.log("x: ",x); //x: 2
}
doSomething();


//ex
var num = 8;
var num = 10;

console.log(num); // output 10 because var we can redeclear it 


//block Scope

let x = 1;
{
  let x = 2;
}
console.log("x : ", x); 

var a = 1;
{
  var a = 2;
}
console.log("x: ", a); //x: 2



//ex2

function checkAge(age) {
  if (age < 18) {
    //const message = "Sorry, you're too young.";
  } else {
    //const message = "Yay! You're old enough!";
  }

  return //message;
}

console.log(checkAge(21));
// i thogh this function return the message "Yay! You're old enough!" but i relize thier not , because the msg is not defiend / let and const is a block scope we can not redclair it or use it outside the block  



//ex4
function numbers() {
  for (/*let or const */ i = 0; i < 5; i += 1) {
    console.log(i);
  }
    console.log(i);
}
numbers(); // 



// CONDITION TRNORY OPERATOR
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"
// because Boolean(1) is true



//Ex1

function userYear(year){
    let check = year < 2000 ? "You are in the 21st century" :  "You live in the Middle Age"
    return check

}

console.log(userYear(2000))



//Multi-Line String

console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"

console.log('Mohammed Amouzoun\n'+'from Morocco\n'+'has a bachlor dagree in computer science')
console.log(`Mohammed Amouzoun
from Morocco
has a bachlor dagree in computer science`)


