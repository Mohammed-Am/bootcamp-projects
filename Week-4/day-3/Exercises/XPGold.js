function printFullName(obj){
    let fullName = ` ${obj.first} ${obj.last}  `
     console.log(`Your full name is ${fullName}`)
}

printFullName({first: 'Mohammed ', last:'Amouzoun'}) 


//Ex2

function keysAndValues(obj){
          let turnArray = [ Object.keys(obj),Object.values(obj)]
          console.log(turnArray)
}


keysAndValues({ a: 1, b: 2, c: 3 })
keysAndValues({ key1: true, key2: false, key3: undefined })


//Ex3


class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();//1
counterOne.increment();//2

const counterTwo = counterOne;
counterTwo.increment(); //3

console.log(counterOne.count); //3
