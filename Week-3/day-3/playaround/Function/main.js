function generateAge(myAge){
    let myAgeMum = myAge*2;
    let myAgeDad = myAgeMum * 1.2
    console.log(`my Mum age is ${myAge*2} , my dad Age is ${myAgeDad}`)
}

generateAge(25)


//ex2

function generateAge2(myAge){
    result = `my Mum age is ${myAge*2} `

    return result
}

generateAge2(2)

console.log(generateAge2(55))


let operator = ['+','-','/','*'];

let calculate = (a, b, opp) => {
  let calcul = eval(`${a} ${opp} ${b}`)
  return calcul;
};

result = calculate(10, 2 , operator[0]);

console.log(result)

let check = operator.includes('*') ? calculate(10, 2,'*') :  "Invalid operator";
console.log(check)
