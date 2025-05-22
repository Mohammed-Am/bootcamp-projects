/*
for(let i = 0 ; i<=15 ; i++){
    if(i % 2 === 0 )
        console.log(`${i} is even`)
    else
       console.log(`${i} is odd`)
}



let person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
  console.log(x) //fname lname age
  console.log(person[x]) // John Doe 25
}


let n = 0;
while (n < 3) {
    n++;
    console.log(n)
}

let names= ["john", "sarah", 23, "Rudolf",34]

//switch - for - while -  do while


function hello(name) {
  let phrase = `Hello, ${name}!`;

  //debugger;  // <-- the debugger stops here

  say(phrase);
}

for(let i = 0 ; i < names.length ; i++)
    if(typeof names[i] !== "string" ){
        continue
        
    }
    else if(typeof names[i] === "string" && names[i] === names[i].toLowerCase()){
            console.log(names[i].toUpperCase())
        }
    
    */


        function hello(name) {
            let phrase = `Hello, ${name}!`;

            debugger;  // <-- the debugger stops here

            say(phrase);
        }