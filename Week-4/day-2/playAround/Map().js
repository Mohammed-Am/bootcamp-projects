//creating an array
var my_array = [1, 3, 5, 2, 4];

//map calls a function which has "item" passed as parameter
//map will pass each element of my_array as "item" in this function
//the function will double each element passed to it and return it
result = my_array.map(function(item) {
  return item*2;
});

//prints new list containing the doubled values
console.log(my_array); 
console.log(result); 


var my_array = [1,3,5,2,4];

my_array.map(function(item,index,arr) {
  console.log("item: " + item + " at index: " + index + " in the array: " + arr);
});

// 1 ,  0 ,  may_array ....