async function randomTask() {
  const response = await fetch('https://apis.scrimba.com/bored/api/activity');
  const data = await response.json()

      let h1 = document.createElement('h1')

      h1.textContent = `${data.activity}`

      document.getElementById('root').appendChild(h1)
  
}

randomTask()


  