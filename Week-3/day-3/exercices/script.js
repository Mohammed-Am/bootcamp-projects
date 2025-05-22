
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
    
}