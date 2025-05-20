
//Divisible by three

let numbers = [123, 8409, 100053, 333333333, 7]

for(let i = 0 ; i< numbers.length ; i++){
        if(numbers[i] %  3 === 0 ){
            console.log(true)
        }else{
            console.log(false)
        }
}

//Attendance
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}


  let name = prompt("Enter your name: ");




for(key in guestList){
    for(key in guestList){
        console.log(`my name is ${key} , and my country is ${guestList[key]}`)
    }

   
}


