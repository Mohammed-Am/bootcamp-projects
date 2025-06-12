const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('Data successfully retrieved and sent');
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts' });
        console.error('Error retrieving data:', error.message);
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});