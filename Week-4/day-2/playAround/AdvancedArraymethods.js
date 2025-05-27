//Arrays coppied by referance
const burgers = ['🍔','🍔','🍔']
const fakeBurgers = burgers 

fakeBurgers.push('🥑')
console.log(burgers)

burgers.push('😂')
console.log(fakeBurgers)




const firstArr = [1, 4, 9, 16];

const secondArr = firstArr.map((value, index, arr) => {
    console.log(value); // each element
    console.log(index); // each index
    console.log(arr); // the firstArr (logged 4 times)
    return value * index;
});

console.log(secondArr);


myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});

console.log(newArr)
//value: 10
//index:0
//value: 20
//index:1
//value: 30
//index:2
//value: 40
//index:3

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
// array passed : words
// test passed : word.length > 6

console.log(result);
// expected output: ["exuberant", "destruction", "present"]



const arr = [1, 4, 9, 16];

let sum = arr.reduce((acc, val) => {
  console.log(`acc: ${acc}`)
  console.log(`val: ${val}`)
  console.log(`acc + val: ${acc + val}`);
  return acc + val;
});

console.log(sum)


//
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let sum1 = array1.reduce(reducer); // 10

let sum2 = array1.reduce(reducer, 51); // 61
console.log(sum1)
console.log(sum2)


let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

let sumCalories = party.reduce((acc , val)=>{
    if(val.desert !== 'Apple Pie'){
        return acc + val.calories
    }
    return acc
},0)
console.log(sumCalories)






let prices = [12, 20, 18];
let newPriceArray = [...prices];
console.log(newPriceArray);// [12 , 20, 18]


let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets); // ["A", "B","C", "D", "E"]