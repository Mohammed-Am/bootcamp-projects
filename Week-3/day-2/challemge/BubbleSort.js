const numbers = [5,0,9,1,7,4,2,6,3,9];

let convert = numbers.toString()
console.log(convert)

let join1 = numbers.join("+")
let join2 = numbers.join(" ")
let join3 = numbers.join("")

console.log(join1)
console.log(join2)
console.log(join3)


// thinking how to use bubble sort to solve this task

// declare new array to order the number in side it 
let newNumbers = []
for(let i = 0 ; i < numbers.length  ; i++){
    for(let j =0 ; j < numbers.length ; j++){
        if(numbers[i] = numbers[j]){
            newNumbers += numbers[j]
        }
    }
}

console.log(newNumbers)



