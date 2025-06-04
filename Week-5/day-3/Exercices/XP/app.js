// DOM Elements
const fetchButton = document.getElementById('fetch-character');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const characterInfoDiv = document.getElementById('character-info');

// Function to show/hide elements
const toggleElement = (element, show) => {
    element.classList.toggle('hidden', !show);
};

// Function to get a random character ID (1 to 83)
const getRandomId = () => Math.floor(Math.random() * 83) + 1;

// Function to fetch character data from SWAPI
async function fetchCharacter() {
    const characterId = getRandomId();
    const url = `https://www.swapi.tech/api/people/${characterId}`;

    // Show loading message, hide others
    toggleElement(loadingDiv, true);
    toggleElement(errorDiv, false);
    toggleElement(characterInfoDiv, false);

    try {
        // Fetch character data
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch character data');
        }
        const data = await response.json();
        const character = data.result.properties;

        // Fetch homeworld data
        const homeworldResponse = await fetch(character.homeworld);
        if (!homeworldResponse.ok) {
            throw new Error('Failed to fetch homeworld data');
        }
        const homeworldData = await homeworldResponse.json();
        const homeworldName = homeworldData.result.properties.name;

        // Display character data
        characterInfoDiv.innerHTML = `
            <h2>${character.name}</h2>
            <p><strong>Height:</strong> ${character.height} cm</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Birth Year:</strong> ${character.birth_year}</p>
            <p><strong>Homeworld:</strong> ${homeworldName}</p>
        `;
        toggleElement(characterInfoDiv, true);
    } catch (error) {
        // Display error message
        errorDiv.textContent = `Error: ${error.message}`;
        toggleElement(errorDiv, true);
    } finally {
        // Hide loading message
        toggleElement(loadingDiv, false);
    }
}

// Event listener for the button
fetchButton.addEventListener('click', fetchCharacter);