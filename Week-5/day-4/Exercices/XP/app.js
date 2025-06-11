import people from "./data.js";


function calculateAverageAge(){
      let allAge = 0;
     for( let age of people){
            allAge += age.age 
     }
     const average = allAge / 3
     return `Avrage is : ${average}`

}

console.log(calculateAverageAge())