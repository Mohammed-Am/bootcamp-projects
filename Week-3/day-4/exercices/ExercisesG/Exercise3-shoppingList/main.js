let shoppingList = []


let drt = document.getElementById('root')

 let f = document.createElement('form')

    f.innerHTML = `
                  <input type="text" >
                  <input type="submit" value="Add Item">
                  <input type="submit" value="clear All">
              `

    drt.appendChild(f)

    function  adIthem(){
         let stor = f[0].value
        shoppingList += stor
        console.log(shoppingList)


        let createIthem = document.createElement("li")

        createIthem.textContent = shoppingList

        drt.appendChild(createIthem)
    }

    function clearIthem(){
        shoppingList = []
    }

    f[1].addEventListener('click' , (e)=>{
        e.preventDefault()
       
        adIthem()
        clearIthem()
    })



