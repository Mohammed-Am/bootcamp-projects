// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console: ==> 'inside the funcOne function 3 '
funcOne()
// #1.2 What will happen if the variable is declared 
// ==>  will worked bcs var we can assing variable multiple time
// with const instead of let ?
//=> not work bsc const we can't assign varable multiple times

//#2
let b = 0;
function funcTwo() {
    b = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${b}`);
}

// #2.1 - run in the console: 
funcThree() //inside the funcThree function 0
funcTwo()// change b from 0 to 5
funcThree()  // //inside the funcThree function 5
// #2.2 What will happen if the variable is declared 
// => nothing the code will work agim bsc var we can redclare varibale in all function scop
// with const instead of let ? not work give us error bcs we can't assing the b agin


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // give value of 'hello'
funcFive() // allert `inside the funcFive function Hello`

//#4
let c= 1;
function funcSix() {
    let c = "test";
    alert(`inside the funcSix function ${c}`);
}


// #4.1 - run in the console:
funcSix() // inside the funcSix function test
// #4.2 What will happen if the variable is declared  
// with const instead of let ?

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console 
// in the if block 5
//`outside of the if block 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ?



//Ex 2

//Arrow function
winBattle = () => true;


let experiencePoints = winBattle ? 10 : 1

console.log(experiencePoints)