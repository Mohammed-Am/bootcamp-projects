let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


displayGroceries = () => {
       groceries.fruits.forEach(fruit =>{
             console.log(fruit)
       })
}

displayGroceries()

cloneGroceries = () => {
  let user = client
  client = "Betty"
  
  console.log(user)
  console.log(client)

  let  shopping  = groceries 
  groceries.totalPrice = '35$'


  groceries.other.paid = false;




  
}

console.log(cloneGroceries()) 