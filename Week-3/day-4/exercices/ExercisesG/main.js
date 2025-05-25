let genres = document.getElementById("genres");

let option = document.createElement('option')

option.textContent = 'classic'
option.value = 'value'
option.selected = true
genres.appendChild(option)

let slected = genres.value;

console.log(slected)

console.log(genres)



//2

let selectColor = document.getElementById('colorSelect')
let options =  document.querySelectorAll("option")
let input = document.querySelector("input")

function removecolor(){
      let selectIndex = selectColor.selectedIndex
      console.log(selectIndex)


      //ilakan index makaysAWIX -1 GHA MESH MOO
      if(selectIndex !== -1){
        selectColor.remove(selectIndex)
      }
        
         
}

input.addEventListener("click", removecolor)



