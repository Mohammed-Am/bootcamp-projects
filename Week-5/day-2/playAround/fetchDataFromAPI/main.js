
async function randomImage(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json()
    const imageElement = document.createElement('img');

          imageElement.src = data.message
          imageElement.alt = 'random dog image'
         document.getElementById('random-images').appendChild(imageElement)
}
randomImage()


  
          
 