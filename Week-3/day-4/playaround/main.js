function insertRow(){
    let tb = document.getElementById("sampleTable");

    let tr = document.createElement('tr')
    tr.textContent = 'Row1 cell3'


    tb.appendChild(tr)

    
}



let dod = document.getElementById('jsstyle')

dod.addEventListener("click" , clicked)
dod.addEventListener("mouseout" , mouseOut)
dod.addEventListener("mouseover" , mouseOver)


function clicked(){
                console.log("button clicked")
}
function mouseOver(){
                console.log("mouse over")
}
function mouseOut(){
                console.log("mouse out")
}




let get = document.getElementById("jsstyle2")

get.addEventListener("click",change ,false)

function change(){
    document.getElementById("jsstyle2").style.backgroundColor = "red"
}