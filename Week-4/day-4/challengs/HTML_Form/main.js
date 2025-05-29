
let firstname = document.getElementById('name');
let lastName = document.getElementById('lastname')
let btn = document.getElementById('btn')
  

function addInfo(){
      let add = {}
      Object.assign(add, {name: firstname.value , lastName : lastName.value});

      let objJson = JSON.stringify(add)

      let newdiv = document.createElement('div')
      newdiv.textContent = objJson

      document.body.appendChild(newdiv)
}

 btn.addEventListener('click', (e) => {
     e.preventDefault()
     addInfo()
 })