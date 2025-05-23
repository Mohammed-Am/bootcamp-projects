let form = document.getElementById('libform')

let adj = document.getElementById('adjective')

let person = document.getElementById('person')

let verb = document.getElementById('verb')

let place = document.getElementById('place')

let btn = document.getElementById('lib-button')

let uiError = document.getElementById('error')

let genratedStory = document.getElementById('story')

let  error = ""



btn.addEventListener("click" , (e)=>{
    e.preventDefault()

    const adjName = adj.value.trim();
    const personName = person.value.trim();
    const verbName = verb.value.trim();
    const placeName = place.value.trim();

    let story = `The ${adjName} ${personName} decided to ${verbName} at the ${placeName}`


   
        genratedStory.textContent = story; 
       

    console.log(adjName,personName,verbName,placeName)

    if(!adjName || !personName || !verbName || !placeName){
         error = "pleas fill the All input !!!"
         uiError.style.color = 'red'
         uiError.textContent = error
         
    }

    

    form.reset();
    
})
