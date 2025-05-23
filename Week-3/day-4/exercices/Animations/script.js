


function sayHi(){
    return alert("Hello World")
}

//1
setTimeout(sayHi , 2000)

//2

function addNewParagraph(){
    let div = document.getElementById('container');
    let newP = document.createElement('p');

    newP.textContent = 'Hello World'

    div.appendChild(newP)

}

setTimeout(addNewParagraph,2000)


//3 

function adding(){
    let div = document.getElementById('container');
    let newP = document.createElement('p');
    let btn = document.getElementById('clear')

    newP.textContent = 'Hello World'

    div.appendChild(newP)

    btn.addEventListener("click" , (e)=>{
        e.preventDefault()
        clearInterval(id)
    })


    if(div.querySelectorAll('p').length >= 5){
        clearInterval(id)
    }
}

let id = setInterval(adding,2000)