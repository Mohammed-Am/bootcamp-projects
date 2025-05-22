
function displayNumbersDivisible(divisor){
    let outcome = []

     for(let i = 0 ; i < 500 ; i++){
        if(i% divisor ===  0){
           outcome.push(i)  
           
        }
    }

    console.log(`Outcome : ${outcome}`)
    total = outcome.reduce((acc, current) => acc + current, 0)
    console.log(`Total : ${total}`)
}


displayNumbersDivisible(54)





// eX2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 



let shoppingList = [ 'banana' , 'orange' , 'apple' ]


function myBill(){
  let  total = 0;
  let desc
   for (let item of shoppingList) {
    if (item in stock) {
          total +=  prices[item];
          stock[item]--;        
          desc = stock[item];
         
        }
    }
    console.log(`total price is ${total}`)

    console.log(desc)
}

myBill()


//my wallet

function changeEnough(itemPrice, amountOfChange){
    let coins = [0.25, 0.10, 0.05, 0.01]
    let total = 0;

    for(let i = 0 ; i < coins.length ; i++){
            if(amountOfChange.length !== coins.length)
                return false
            total += coins[i] * amountOfChange[i] 
            //console.log(total) 

    }


    
    let  result = total >= itemPrice

    console.log(result)
   

}

changeEnough(4.25, [25, 20, 5, 0])
changeEnough(14.11, [2,100,0,0])
changeEnough(0.75, [0,0,20,5])



//ex 4  Vacations Costs

function hotelCost(){
    let answer_user = prompt('What is number of nights you would like to stay in the hotel?')

        //validation dyal  user type
        while(isNaN(parseFloat(answer_user))){
            answer_user = prompt('Please enter a valid number of nights you would like to stay in the hotel :')
        }
        

      answer_user  = parseFloat(answer_user);
      let hotelPrice =  140 ;
      let hotelCost = hotelPrice * answer_user
     return hotelCost    
}

 function planRideCost(){
    let destination = prompt('What is your destination : ');

     while(isNaN(destination)){
            destination = prompt('Please enter valid text of What is your destination : ')
        }

      if(destination === 'London'){
        const londonPrice = 140;
        return  londonPrice
      }
      else if(destination === 'Paris'){
        const ParisPrice = 140;
        return  ParisPrice
      }else{
        const alldestination = 300
        return alldestination
      }

 }

 function rentalCarCost(){
    let numberDayRentCar = prompt('how many days you like to rent the car?')
    
      while(isNaN(parseFloat(numberDayRentCar))){
        numberDayRentCar = prompt(' Please enter a valid number OF how many days you like to rent the car?')
        }

    let totalPrice = numberDayRentCar * 40;

    if(totalPrice > 10){
       totalPrice =  totalPrice / 0.5;
    }

    return totalPrice
 }

function totalVacationCost(){
    let totalCost = `The car cost: ${rentalCarCost()}, the hotel cost: ${hotelCost()}, the plane tickets cost: ${planRideCost()}.`;
    return totalCost
}

console.log(totalVacationCost())


//5 