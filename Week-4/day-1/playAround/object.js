let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar.color); // undefined
console.log(myCar.make); // undefined


// four variables are created and assigned in a single go,
// separated by commas
let myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              
myObj['date created']  
myObj[str]             
myObj[obj]            
myObj['']               

console.log(myObj)




function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
console.log(user.name , user.age); // John

// The same as
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}




//

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


const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
} // name age

