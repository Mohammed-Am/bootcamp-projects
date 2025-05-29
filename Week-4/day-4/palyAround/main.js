let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let jsonStudent = JSON.stringify(student);

console.log(typeof jsonStudent); // string

console.log(jsonStudent);


let jsonStudent1 = JSON.stringify(student, null, 5);
console.log(jsonStudent1)



let user = {
  sayHi() { // ignored
    alert("Hello");
  },

  [Symbol("id")]: 123, // ignored

  key: undefined // ignored
};

console.log( JSON.stringify(user) ); 


//Nasted Object 
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["John", "Ann"]
  }
};

console.log(JSON.stringify(meetup,null,2));


//ToJSON Method
const event = new Date('May 21, 2020 12:15:30 UTC');

const jsonDate = event.toJSON();

console.log(jsonDate);



//--
let meetup1 = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room : 208
};

console.log(JSON.stringify(meetup1));


//

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers); //[0, 1, 2, 3]
console.log(numbers[1]); // 1



let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user2 = JSON.parse(userData);

console.log(user2);
// { name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }

console.log(user2.friends[1] ); // 1










//Exceptions

const func = () => {
    try {
        console.log("starting the try block")
        //Unexisting variable
          hello
        //not accessed if there is an error with the above code
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(err)
    } finally {
        console.log("Function done")
    }
}

func()


//
const func1 = () => {
    try {
        console.log("starting the try block")
        hello
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(`
        Error Name : ${err.name}, 
        Error Msg : ${err.message},
        Error Stack : ${err.stack}`)
    } finally {
        console.log("Function done")
    }
  }  

func1()

//
const func2 = () => {
    try {
        console.log("starting the try block")
        hello
        console.log("finishing the try block")
    } catch (err) {
        //Check the type of error
        if (err instanceof ReferenceError) {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message},
                Error Stack : ${err.stack}`)
        } else {
            console.log("Other Error")
        }
    } finally {
        console.log("Function done")
    }
}

func2()

///
const func3 = (a, b) => {
    let result;
    try {
        result = a / b
        if (b == 0) {
            throw new Error('Cannot divide by Zero');
        }
    } catch (err) {
        if (err instanceof ReferenceError) {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        } else {
            console.log("Other Error")
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        }
    } finally {
        console.log("Function done")
    }
}

func3(3, 0)



//RegEx
let str = "Happy BirthDay";
let patt = /birthday/i;
let result = str.match(patt);
console.log(result); //returns true

if (result){
    console.log('Yes')
} else{
    console.log('No');
}



let regex = /^.+@.+\..+$/;
console.log(regex.test('johndoe@gmail.com'))