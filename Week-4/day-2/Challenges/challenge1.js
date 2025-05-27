const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

let userName = []
let contain = gameInfo.forEach((name)=>{
    return userName.push(name.username + '!') 
})

console.log(userName)


const winners = []
gameInfo.forEach((name)=>{
      if(name.score>5){
          return winners.push(name.username)
      }
})
console.log(winners)

let total = gameInfo.reduce((acc , next) => {
      return acc + next.score
},0)

console.log(total)