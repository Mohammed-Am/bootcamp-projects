const fetchButton = document.getElementById('fetch-character');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const characterInfoDiv = document.getElementById('character-info');

const toggleElement = (element, show) => {
    element.classList.toggle('hidden', !show);
};

const getRandomId = () => Math.floor(Math.random() * 83) + 1;

async function fetchCharacter() {
    const characterId = getRandomId();
    const url = `https://www.swapi.tech/api/people/${characterId}`;

    toggleElement(loadingDiv, true);
    toggleElement(errorDiv, false);
    toggleElement(characterInfoDiv, false);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch character data');
        }
        const data = await response.json();
        const character = data.result.properties;

        const homeworldResponse = await fetch(character.homeworld);
        if (!homeworldResponse.ok) {
            throw new Error('Failed to fetch homeworld data');
        }
        const homeworldData = await homeworldResponse.json();
        const homeworldName = homeworldData.result.properties.name;

        characterInfoDiv.innerHTML = `
            <h2>${character.name}</h2>
            <p><strong>Height:</strong> ${character.height} cm</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Birth Year:</strong> ${character.birth_year}</p>
            <p><strong>Homeworld:</strong> ${homeworldName}</p>
        `;
        toggleElement(characterInfoDiv, true);
    } catch (error) {
        errorDiv.textContent = `Error: ${error.message}`;
        toggleElement(errorDiv, true);
    } finally {
        toggleElement(loadingDiv, false);
    }
}

fetchButton.addEventListener('click', fetchCharacter);