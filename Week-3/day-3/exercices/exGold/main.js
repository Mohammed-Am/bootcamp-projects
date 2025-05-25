
function isBlank(para){
      if(!para){
         return true;
       
      }else{
        return false
    
      }
}

console.log(isBlank('')); 
console.log(isBlank('abc'));


console.log('Abbrev_name : ')

function abbrevName(name){
    //split kathwal string l array of letters
    abbrev =  name.split(" ")
    
    getAbbrev = ` ${abbrev[0]}  ${abbrev[1][0]}. `

    return getAbbrev


}

console.log(abbrevName("Mohammed Amouzoun")); 


console.log('SwapCase')

function swapCase(inputUser){
            convortToCharacter = inputUser.split('')
            convortToCharacter  = convortToCharacter.map(caracter => {
                 if(caracter === caracter.toLowerCase()){
                    return caracter.toUpperCase()
                 }else{
                    return caracter.toLowerCase()
                 }
            });

            return  convortToCharacter.join('')
}

console.log(swapCase("Js HeRbaNa , wa MIiiiiIIIIii CHaaaaaD Ched   ")); 


//  Omnipresent value  





//Red table