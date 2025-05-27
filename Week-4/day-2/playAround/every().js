function isPositive(element) {
  return element >= 0;
}

let arr = [1, 8, 82, 45, 6]
console.log(arr.every(isPositive)); 






// lambda function
let arr1 = [11, 12, 13, 14, 15]
console.log(arr1.every(element => element > 10)); 




function isCanine(element, index, arr) {
  console.log("Checking if " + arr[index] + " is a canine.")
  return (element == "dog" || element == "doggo" )
}

let ar3r = ["dog", "cat", "doggo"]
console.log(ar3r.every(isCanine)); 