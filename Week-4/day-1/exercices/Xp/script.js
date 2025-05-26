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


/*function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // give value of 'hello'
funcFive() // allert `inside the funcFive function Hello`
*/
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



//Ex 3

isString = (arg)=>{
    if(typeof arg === "string"){
        return true
    }else{
        return false
    }
}

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


//Ex4
let sum = (a,b)=> a+b
console.log(sum(5,5))

//Ex5

// -> function declaration
// function declaration we should defiend function keyword first and then cell function name
 
function convortToGrams(wightKiligrams){
      let calcule = wightKiligrams * 1000

      return calcule
}
console.log(`${convortToGrams(1)} grams `)

// -> function expression
// we declare function inside varibal name and than invoke the name varible and give it a paramiter 
let calcul = function convort(w){
     return w * 1000;
}
console.log(`${calcul(1)} grams `);

// arrow function
let calculWight = (num) => num * 1000;
console.log(calculWight(10));



// Exercise 6
//IIFE
(function(numberChildren,partnerNmae,geographic,jobTitle){
    let body = document.body;
     let p = document.createElement('p');
     p.innerHTML = `You will be a ${jobTitle} in ${geographic}, and married to ${partnerNmae} with ${numberChildren} kids.`;
     body.appendChild(p);

}('2' , '!!S' , '!!!G' , 'fullStack developer'));


//Ex7: Welcome

(function(nameUser){
    let nav = document.querySelector('nav');
    let div = document.createElement('div');
    div.innerHTML = `
                    <h3> Welcome ${nameUser}</h3>
                    <img src= 'https://mohammed-amouzoun-portfolio.pages.dev/assets/images/ME.png'width="50" height="60"> 
                    `;
    nav.appendChild(div);


}('Mohammed'));


//Ex 8 - Juice Bar

//Part 1
function  makeJuice(size){
       let  ingredients = [];





   function addIngredients(firstIngredient , secondIngredient , thirdIngredient){
        let divIngridiant = document.getElementById('ingradient');
        let ul = document.createElement('ul')
        ul.innerHTML = `<li>The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}</li>`
        divIngridiant.appendChild(ul)

        ingredients.push(firstIngredient,secondIngredient,thirdIngredient)

         console.log(ingredients)


        }
 //Part 2
    function displayJuice(){
            addIngredients('Lbanan' , 'tfa7' , 'limon')
            addIngredients('L5o5' , 'kiwi' , 'limon')

    }     

    displayJuice()



}

makeJuice('medium')




