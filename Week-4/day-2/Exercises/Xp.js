const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((value, index)=>{
    console.log(`${index + 1}# choice is ${value}`)
})

    //Array Method
if(colors[colors.length - 1 ] === colors.includes('Violet')){
    console.log('Yeah')
}else
    console.log("No...")


//EX 2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, i) => {
  const n = i + 1;
  const suffix = (n >= 11 && n <= 13) ? "th" : ordinal[n] || "th";
  console.log(`${n}${suffix} choice is ${color}`);
});



//Ex3

//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);//['bread', "carrot", "potato", 'chicken', "apple", "orange"]

//------2------
const country = "USA";
console.log([...country]);//["U' , 'S' , 'A']

//------Bonus------
let newArray = [...[,,]];//[ undefined , undefined ]
console.log(newArray);
  


//EX 4

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

             //const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

   const welcomeStudents = users.map((name) =>{
             return `${name.firstName} ${name.lastName} `
   })
   console.log(welcomeStudents)

   let check = users.filter((user)=>{
                   if(user.role === 'Full Stack Resident'){
                      return user.role
                   }
   })
     console.log(check)     

     const lastName = check.map(user => `${user.lastName}`)
     console.log(lastName)



     //Ex5

 const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];  
 
 
   let combine =  epic.reduce((acc , next)=>{
            return `${acc} ${next}`
    })
    console.log(combine)



    //EX6


    const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];



        function isPassed(student){
                return student.isPassed === true
        }
        let passed = students.filter(isPassed);
        console.log(passed);


        let names = passed.map(student => student.name);
        console.log(names)

        names.forEach((name , key)=>{
                    console.log(`Good job ${name}, you passed the course in ${passed[key].course}`)
        })
