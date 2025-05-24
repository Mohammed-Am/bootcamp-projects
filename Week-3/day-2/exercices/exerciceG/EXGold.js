console.log("Exercise 1 ")
console.log(" Divisible by three :")

let numbers = [123, 8409, 100053, 333333333, 7]

for(let i = 0 ; i< numbers.length ; i++){
    if(numbers[i] % 3 === 0){
        console.log(true)
    }else{
        console.log(false)
    }
}


console.log("Exercise 2")
console.log("Attendance by three")

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let name = prompt("Enter your name : ")

/*
!!!!!!!!!!!!!!!!!!!     forEach we not using in object   !!!!!!!!!!!!!!!!!!
    guestList.array.forEach((key , value) => {
        if(name = guestList[key]){
            console.log(`Hi! I'm ${name}, and I'm from ${country}.`)
        }else{
            console.log("Hi! I'm a guest.")
        }
    });
*/

// ( in ) kat9alb lina 3la name(key) wack kayna

if( name in guestList){
            console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`)
}else {
  console.log("Hi! I'm a guest.");
}



console.log('Exercise 3 : Playing with numbers')

let age = [20,5,12,43,98,55];
let sum = 0;
let bigNumber = 0
for(let i = 0 ; i < age.length ; i++){
        sum += age[i]

        if(age[i] > bigNumber ){
            bigNumber = age[i];
        }
}

console.log(`Sum : ${sum}`)
console.log(`Big Number : ${bigNumber}`)