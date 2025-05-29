function allTruthy(...arg){
  
    
   let check = arg.every(value => value === true)

     console.log(check)
    

}


allTruthy(true, true, true) 

allTruthy(true, false, true) 

allTruthy(5, 4, 3, 2, 1, 0)