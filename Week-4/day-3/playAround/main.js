let numbers = new Array(1, 2, 3, 4); // Using Array constructor
console.log(numbers)

/*
    push()
    pop()
    unshift()
    shift()
    splice()
    concat()
    
*/

//Higher-Order Array Methods (Functional Programming)
/*
     map()
     filter()
     reduce()
     find()
     findIndex()
     some() 
     every()
     sort()
     flat()
     flatMap()
     Set() to remove deplicate value
*/     

let uniqueNumbers = [...new Set([1, 2, 2, 3, 4, 4])];
console.log(uniqueNumbers); // [1, 2, 3, 4]

const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 25)); // Output: { name: "Alice", age: 25 }

console.log('-------------------------------------------------------------------------')

var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into our variables
var { firstname, lastname, dateofbirth } = employee;
console.log( firstname, lastname, dateofbirth);


console.log('-------------------------------------------------------------------------')

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'Morocco' } = employee;
console.log("\n After setting defult values")
console.log( firstname, lastname, country);





console.log('--------------------------------- Object ----------------------------------------')

let user = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax
console.log(user)
console.log(user2)


let myCar = new Object();
/*
//Method 1
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
*/
//Methode 2
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;


console.log(myCar.make)



// four variables are created and assigned in a single go,
// separated by commas
let myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj)



console.log('----------- Looping through an object (For .. In) -------------')


function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}


console.log(showProps(myCar, "myCar"))

//Exercise

const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}

//  name  , age


console.log('---------------------Methods of the Object constructor-------------------------------')


//Object.keys()

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));


//Object.values()
const object2 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object2));

//Object.entries()
const object3 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.entries(object3));


for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}


//Object.fromEntries()

const shopping = [
  ["apple", "$2"],
  ["pear", "$1"],
  ["banana", "$0.77"],
];

const shoppingObject = Object.fromEntries(shopping);
console.log(shoppingObject);


//Ex
let myObj5 = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

  let countKeys = Object.keys(myObj5).length 
   let countValues = Object.values(myObj5).length
   console.log(`The x# key is : ${countKeys} `)
   console.log(`The x# value  is : ${countValues} `)




   //Object Destructuring
   const address = {
    street: 'Evergreen Terrace',
    number: '742',
    city: 'Springfield',
    state: 'NT',
    zip: '49007',
    };

    const { street: s, city: c } = address;
    console.log(s) //Evergreen Terrace
    console.log(c) //Springfield


   
    const { street, city } = address;
    console.log(street) //Evergreen Terrace
    console.log(city) //Springfield

    //Other Example
    let {e, f} = { e: 10, f: 20 };
    console.log('e: ',e); // e: 10
    console.log('f: ',f); // f: 20


   
//Nestedd Object Destructuring

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};


const student1 = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// We define 3 local variables: name, maths, science
// Default value to the variable science, in case the key doesn't exist in the object student
const { name, scores: {maths, science = 50} } = student1;

console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.

const student3 = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

// Without Destructuring
/*function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}*/

// With Destructuring
function displaySummary({name, scores: { maths = 0, english = 0, science = 0 }}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary(student3);




//Spreadin

let newObj9 = {...'abc'}
console.log(newObj9) //{ '0': 'a', '1': 'b', '2': 'c' }

let newObj10 = {...['a', 'b']}
console.log(newObj10) //{ '0': 'a', '1': 'b' }


const userInfo = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...userInfo };
console.log(admin); //  { admin: true , name: 'Lydia', age: 21  }


console.log('---------------------')
let myCarm = {
  color : 'blue',
  details : {
    plateNumber: 123,
    name : "Ford"
  }
}

let myNewCar = {...myCarm}
console.log("myNewCar : ", myNewCar)


console.log(`-------------------- Obj  Methods  / this keyword`)


let personInfo= {
    firstName : "Sarah",
    eyeColor: "blue",
    eat : function () {
        console.log("My name is" + this.firstName + "I love chocolate")
    }
}

personInfo.eat()



console.log('----------Object and Classes-----------------')

class Rectangle {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
    
}

//instance of the class Rectangle
const square = new Rectangle(10, 10);

//calling the method
console.log(square.calcArea()); // 100

console.log(square)




//Ex
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

        killerRabbit.speak('i kill you')
        blackRabbit.speak('Hi')


 class Animal { 
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}


//extends 

class Dog extends Animal {
  constructor(name,noise) {
    super(name); // call the super class constructor and pass in the name parameter
    // Add a new property
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} barks.It says ${this.noise}`);
  }
}

let d = new Dog('Mitzie', "Wouaf");
console.log(d.name) // Mitzie
d.speak(); // Mitzie barks.It says Wouaf
console.log(d)       


