const people = ["Greg", "Mary", "Devon", "James"];


//1
remove = people.shift()
console.log(remove)
console.log(people)



//2
console.log(people.splice(2,1,"Jason"))

//3 

console.log(people.push('Mohammed'))


//4

console.log("Index of Mary is "+people.indexOf("Mary"))

//5

//verification
console.log(people)

let copy_people = people.slice(1,3)
console.log(copy_people)


//6

console.log(people.indexOf("Foo"))
/* because the name of FOO dosn't exit in the list */


//7

let last = people[people.length - 1]
console.log(last)

/*: What is the relationship between the index of the last element in the array and the length of the array?*/
//indexOf start count array -> start with 0 , and lenght start count with 1


//8

console.log("For loop");
for (let name of people){
    console.log(name)
}

console.log("For loop with condition");



for (let name of people){
    console.log(name)
    if (name === "devon")
        break

   
}



//ex2

//1

let colors = ['green','whith','blue','red','black']
 function getOrdinal(n) {
            if (n === 1) return `${n}st`;
            if (n === 2) return `${n}nd`;
            if (n === 3) return `${n}rd`;
            return `${n}th`;
        }



for(let color of colors){

        for(let i = 1 ; i  <= colors.length  ; i++){
            console.log(`My ${getOrdinal(i)} choice is ${color} `)
        }

}


//EX3

let user_number = prompt('Enter a number: ')

let check = typeof(user_number)
console.log(check)

while(user_number < 10 ){
         prompt('Enter a new number:   ')
         break;
}

//Ex4
const building = 
    {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
         },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.thirdFloor)
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[1])

sum_sarah_david = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
dan_rent = building.numberOfRoomsAndRent.dan[1]

if(sum_sarah_david > dan_rent){
    console.log(sum_sarah_david + 1200)
}



// EX 5

let family = [name1 ="Amouzoun", name2 = "D" , name3 = "dofo"]

for(f in family) {
    console.log(f)
}
for(f in family) {
    console.log(family[f])
}


//6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = '';

for (let [key, value] of Object.entries(details)) {
  sentence += `${key} ${value} `;
}

console.log(sentence.trim());


//7
const names = ['Jack', 'Philip', 'Sarah', 'Amanda', 'Bernard', 'Kyle'];
let secretSociety = '';

for (let i = 0; i < names.length; i++) {
  secretSociety += names[i].charAt(0);
}

console.log(secretSociety.split('').sort().join('')); 



