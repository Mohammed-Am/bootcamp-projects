let object1 = {
    'FullName' : "Mohammed Amouzoun",
    'Mass' : "63",
    'Height' : "1.75",

     myfunction : function(){
         let bmi = parseFloat(this.Mass) / parseFloat(this.Height * 2)
          return bmi
     }


}

let object2 = {
    'FullName' : "Youness Amouzoun",
    'Mass' : "75",
    'Height' : "1.73",

    
     myfunction : function(){
         let bmi = parseFloat(this.Mass) / parseFloat(this.Height * 2)
          return bmi    
     }
}


function compares(){
    if(object1.myfunction() > object2.myfunction()){
        console.log(`${object1.FullName} has the largest BMI  : ${object1.myfunction().toFixed(2)} kg`)
    }else{
        console.log(`${object2.FullName} has the largest BMI : ${object2.myfunction().toFixed(2)} kg `)

    }
}


compares()