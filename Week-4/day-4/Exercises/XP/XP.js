//EX1
// --> when we send data in method GET the info will be appear in the urlas query parameters

//Ex2
// -->when we send data in method POST the info will be appear in request body , mkaybanech f URL


//EX3

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

let toJsonObject = JSON.stringify(marioGame,null,3)
console.log(toJsonObject)
//nasted objects gha ybano 3adi walakin value gha thwal l String

 