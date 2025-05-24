let grades = [
    ['Mohammed', 100], ['Morad', 78], ['Maryam', 98],
    ['Hind', 52], ['Omar', 88], ['Ossama', 78],
    ['Hicham', 78], ['Imad', 78], ['Mouad', 64],
    ['Khalid', 78], ['Salam', 72], ['Oumaima', 98],
    ['Haitem', 83], ['Salama', 71], ['Abedallah', 68]
];

    function findAvg(gradesList){
         let sum = 0;

         for(let i = 0 ; i < gradesList.length ; i++ ){
            sum += gradesList[i][1] // i try to have accses to secend value in array
         }

         let avg =  gradesList.length > 0 ? sum / gradesList.length : 0
         console.log(avg.toFixed(2))
         return avg;
    }
             
          
    findAvg(grades)

    function isPassed(){
            grades.forEach(([name,grade])=>{
                    if( grade > 65 ){
                            console.log(`${name} you passed`)
                    }else{
                        console.log(`${name} you failed and must repeat the course!`)
                    }
            })
    }
    

    isPassed()

 