//Ex
function fetchHilariousGifs() {
  fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log("Exercise 1 Output:", data))
    .catch(error => console.error("Exercise 1 Error:", error));
}

//  Ex2
function fetchSunGifs() {
  fetch("https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log("Exercise 2 Output:", data))
    .catch(error => console.error("Exercise 2 Error:", error));
}

// Ex 3
async function fetchStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Exercise 3 Output:", data.result);
  } catch (error) {
    console.error("Exercise 3 Error:", error);
  }
}

//Ex4: 
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log("Exercise 4 Output: calling");
  let result = await resolveAfter2Seconds();
  console.log("Exercise 4 Output:", result);
}


console.log("Starting Exercises...");
fetchHilariousGifs(); 
fetchSunGifs(); 
fetchStarship(); 
asyncCall(); 