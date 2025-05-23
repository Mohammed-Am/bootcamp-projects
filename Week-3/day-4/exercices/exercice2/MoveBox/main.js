let div = document.getElementById("container");
let animatDiv = document.getElementById("animate");
let btn = document.querySelector('button')
let count = 0;

function myMove() {
   btn.addEventListener('click', (e)=>{
        e.preventDefault()
         count += 5; // increase position f kola interval
         animatDiv.style.marginLeft = count + "px"; 
   })
}

setInterval(myMove, 100); 
