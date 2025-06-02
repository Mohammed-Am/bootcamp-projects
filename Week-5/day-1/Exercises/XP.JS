function compareToTen(num){
      return new Promise((resolve,rejects) => {
        let check = num <= 10;
          if(check){
            resolve('true')
          }else {
            rejects('false')
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
     

  //ex


    const promise1 = Promise.resolve(3)
    promise1.then((value) =>{
        console.log(value)
    })

    
    const promise2 = Promise.reject('Boo!')
    promise2.catch((err) =>{
        console.log(err)
    })