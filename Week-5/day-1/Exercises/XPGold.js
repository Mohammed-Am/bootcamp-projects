const promise1 = Promise.resolve(3);
const promise2 = 42;
//Using setTimeout, we can execute code after the queue is empty
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});


    // Passing an array of promises
     Promise.all([promise1,promise2,promise3])
     //resolve value
    .then((values) =>{
        console.log(values)// Output: [3, 42, 'foo'] after 3 seconds
    })
    //catch an error if one of the is not true
    .catch((err)=>{
    console.log(err)
    });

//ex2
function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
  //output:   [2,4,6]