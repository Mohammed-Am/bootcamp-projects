function compareToTen(num){
      return new Promise((resolve,reject) => {
       
          if(num <= 10){
            resolve(`Number ${num} is less than or equal to 10`)
          }else {
            reject(`Number ${num} is greater than 10`)
          }       
      })
}
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  //ex2

  let promise =  new Promise((resolve)=>{
       setTimeout(()=>{
              
             resolve('success')
       },4000)
  })

   promise
      .then((value) => {
          console.log(value)
      })
     

  //ex3


    const promise1 = Promise.resolve(3)
    promise1.then((value) =>{
        console.log(value)
    })

    
    const promise2 = Promise.reject('Boo!')
    promise2.catch((err) =>{
        console.log(err)
    })
        