// EX1

let arr = [1,2,3,4,5,6,7,8,9,10]

let sum = arr.reduce((acc , next)=> acc + next)
console.log(sum)

//Ex2
let arrDuplicatesNum = [1,2,3,7,4,5,8,5,6,7,8,9,10];
   let uniqueArry = [...new Set(arrDuplicatesNum) ]
   console.log(uniqueArry)

//Ex3   

function cleanArr(arg){

    let newArr = []

    arg.forEach((num)=>{
            if(typeof num === "number" && !isNaN(num)){
                 newArr.push(num)
            }       
    })
     console.log(newArr) 
}


cleanArr( [NaN, 0, 15, false, -22, '',undefined, 47, null])


//ex4

function repeat(str,num){
           let result = ''
            for(let i = 0 ; i < num ; i++){  
                   result += str 
            }
   
          return result
}


console.log(repeat('Ha!',3));


//ex5

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

    console.log(startLine);
    turtle = turtle.padStart(9, ' ');
    rabbit = rabbit.padStart(9, ' ');
    console.log(turtle);
    console.log(rabbit);


    // when we run this code :
    //  turtle = turtle.trim().padEnd(9, '=')
    //   remove spaces in the end of string 