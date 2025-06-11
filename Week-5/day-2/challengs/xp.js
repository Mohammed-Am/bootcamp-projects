const form  =  document.getElementById('gifForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';




async function fetchRandomGif(category) {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${encodeURIComponent(category)}`
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.data.length === 0) {
            throw new Error('No GIFs found for this category');
        }
        return data.data.images.original.url; 
    } catch (error) {
        console.error('Error fetching GIF:', error);
        alert('Failed to fetch GIF. Please try again.');
        return null;
    }
}

function appendGif(gifUrl) {
    if (!gifUrl) return;

    const gifItem = document.createElement('div');
    gifItem.className = 'gif-item';

    const img = document.createElement('img');
    img.src = gifUrl;
    img.alt = 'Random GIF';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        gifItem.remove(); 
    });

    gifItem.appendChild(img);
    gifItem.appendChild(deleteBtn);
    gifContainer.appendChild(gifItem);
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const category = searchInput.value.trim();
    if (!category) {
        alert('Please enter a category.');
        return;
    }
    const gifUrl = await fetchRandomGif(category);
    appendGif(gifUrl);
    searchInput.value = ''; 
});

deleteAllBtn.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});