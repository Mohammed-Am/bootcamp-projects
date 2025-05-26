// Declaration and Invocation
(function greeting(){
    console.log('Hiya!')
})()



// Invocation
greeting();
//display 'Hiya'

function greeting(){
    console.log('Hiya!')
}


(function() {
  var privateVar = "I'm private";
  console.log(privateVar); 
})();

console.log(typeof privateVar); // privateVar not accessible outside


//IIFE  : invoked immditly function exprission

//invoked function 
//suggested by Douglas Crockford
// :   - Keeps variables private, avoiding global namespace pollution.
//    - Runs setup code once, like initializing an app or library.


//suggested by Douglas Crockford
(function(greeting){
    console.log(greeting);
}('hey'));   // limadartch semicolon; ma4at5damch invoked function 2

(function(salam){
    console.log(salam);
}('salam'));


(function() {
  var secret = "Hidden";
  console.log(secret); 
})();


(() => {
     console.log("IIFE");
})();

((a) => {
     console.log(a); // prints 10
})(10)