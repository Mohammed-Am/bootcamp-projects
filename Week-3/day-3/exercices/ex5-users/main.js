
let elem = document.querySelector("div")
console.log(elem)

let le = document.querySelector("ul li:nth-child(1)");
le.textContent = "Richad";
console.log(le)



console.log(document.querySelectorAll("ul li")[1])


let li = document.querySelector("ul.list1 li:nth-child(2)")
li.remove();

console.log(li)

//change name based on first ul element !!!!!!!
/*

const uls = document.querySelectorAll('ul.list');
    for(let i = 0 ; uls.length ; i++ ){
    let firstLi = uls[i].querySelector('li:first-child');
        
            firstLi.textContent = 'Mohammed';

}*/

document.getElementById("container").style.backgroundColor = 'lightBlue'


document.getElementById("container").style.padding = '25px'


//not display list
//let ele = document.querySelector("ul.list1 li:nth-child(3)");

//ele.style.display = 'none';


document.querySelector("ul.list li:nth-child(1)").style.border = "solid 25px black"

document.body.style.fontSize = "50px"


let back = document.getElementsByClassName('container').style.backgroundColor
if( back = "lightBlue"){
    alert(`Hello x and  y`)
}












