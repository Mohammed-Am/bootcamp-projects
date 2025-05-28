const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}


//derna destractring l object person name  ou  nested obj location city ou coordinates ghaywliw 3ndhom new varbiale whithout nba9aw ndiro person.name ou la  person.location.coordinates[0]
// jma3 liya lmard f varibale wahd o 3yet lihom mli tb4ihom
const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude( -123.1207)


//EX 2

function displayStudentInfo(objUser){
    //destructuring
    //'Your full name is Elie Schoppik'

    let {first , last} = objUser
    console.log(`Your full name is ${first} ${last} `)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});



//EX3

const users = { user1: 18273, user2: 92833, user3: 90315 }

   let objToArray = Object.entries(users);
   console.log(objToArray)


    //value
   let objId = Object.values(users) 
   console.log(objId )


   // fromEntries bach t3tina key oou value li fl object 3ad kandiro map bach nhto dok l pair value fl new array bla nghyro flasal ou men ba3d kanjbdo dal lkey kanhtoh flarray ou kanjbdo lvalue  li howa ID o kandrboh  * 2
   let allObj = Object.entries(users).map(([key,value]) => [key , value * 2])
   

   console.log(allObj)





// Ex 4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//---> Object - hitax constructor 5da 'John' ou men ba3d this keyword htha f intial value dyal class Person , had class ma3tat walo ya3ni type dalo gha ykon object hitach l class men object type



//Ex 5

class Dog {
  constructor(name) {
    this.name = name;
  }
};
//--> this constructor will successfully extend the Dog class , super() gha ta5ad name constarctor li kayn fclass dyal dog
class Labrador extends Dog {
  constructor(name , size) {
    super(name);
    this.size = size;
  }
};


//Ex 6

/*
    [2] === [2]  // false
    {} === {}    // false
*/





//1

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)// 4  object.2 5dat men object 1 objet li fiha 5dat 5 o fl5ar bdlna l value l 4  
console.log(object3.number)// 4 object.3 5dat men object 2 objet li fiha li wla jdid li howa 4 
console.log(object4.number)// 5 object 4 kan 3ndha reffernce dyalha bohdha on ba3d derna change dyal value l 5



class Animal {
    constructor(type , color){
          this.type = type;
          this.color = color
    }


}

class Mammal extends Animal{
      constructor(name, type, color) {
              super(type, color); // super() must be called in the constructor
              this.name = name;
          }        
          sound(){
            console.log(`${this.name} I'm a ${this.type}, named ${this.name} and I'm ${this.color[0]} and ${this.color[1]}`);
        }
}


const farmerCow  = new Mammal('Moo' , 'cow' , ['brown' ,'white'])

farmerCow.sound(); 