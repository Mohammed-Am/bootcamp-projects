const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const listPlanets = document.querySelector('.listPlanets');

planetNames.forEach((name, index) => {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    planet.textContent = name;

    const colors = ['gray', 'orange', 'blue', 'red', 'brown', 'goldenrod', 'lightblue', 'darkblue'];
    planet.style.backgroundColor = colors[index % colors.length];

    

    // Add a moon to Earth and Jupiter as examples
    if (name === 'Earth' || name === 'Jupiter') {
        const moon = document.createElement('div');
        moon.classList.add('moon');
        moon.style.top = '10px';
        moon.style.left = '70px';
        planet.appendChild(moon);
    }

    listPlanets.appendChild(planet);
});
