//Exercise1

let test = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
}); // [2,4,6]
console.log(test)


//Exercise2
let sum = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
console.log(sum)// [1,2,0,1,2,3]

//Exercise3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    //alert(num);  // num = 29
    return num * 2; // [2 , 4 , 8 , 10 , 16 , 18]
})
// i = first index => 0 until 

console.log(newArray)


//Exercise 4 
const array = [[1],[2],[3],[[[4]]],[[[5]]]]


let flit = array.flat(2)
console.log(flit)


//2

 const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

 let modify = greeting.flat("1")
 console.log(modify)

 const convort = greeting.join(" ")
console.log(convort)