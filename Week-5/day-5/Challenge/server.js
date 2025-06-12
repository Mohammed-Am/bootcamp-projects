const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()); // Allow cross-origin requests
app.use(express.json());


const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🚗', name: 'Car' }
];

let leaderboard = [];

function getRandomElements(arr, n) {
    try {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    } catch (error) {
        console.error('Error in getRandomElements:', error.message);
        throw error;
    }
}

function scrambleString(str) {
    try {
        const arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    } catch (error) {
        console.error('Error in scrambleString:', error.message);
        throw error;
    }
}

app.get('/api/question', (req, res) => {
    try {
        const selectedEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        const incorrectOptions = getRandomElements(
            emojis.filter(e => e.name !== selectedEmoji.name),
            3
        ).map(e => e.name);
        const options = [...incorrectOptions, selectedEmoji.name].sort(() => 0.5 - Math.random());

        res.json({
            emoji: selectedEmoji.emoji,
            options,
            correctAnswer: selectedEmoji.name,
            hint: scrambleString(selectedEmoji.name)
        });
    } catch (error) {
        console.error('Error in /api/question:', error.message);
        res.status(500).json({ error: 'Failed to generate question' });
    }
});

app.post('/api/guess', (req, res) => {
    try {
        const { guess, correctAnswer, playerName } = req.body;

        if (!correctAnswer || !playerName) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const isCorrect = guess === correctAnswer;
        const points = isCorrect ? 10 : 0;

        if (playerName) {
            const player = leaderboard.find(p => p.name === playerName);
            if (player) {
                player.score += points;
            } else {
                leaderboard.push({ name: playerName, score: points });
            }
            leaderboard.sort((a, b) => b.score - a.score);
        }

        res.json({
            isCorrect,
            points,
            correctAnswer,
            leaderboard: leaderboard.slice(0, 5)
        });
    } catch (error) {
        console.error('Error in /api/guess:', error.message);
        res.status(500).json({ error: 'Failed to process guess' });
    }
});

app.get('/api/leaderboard', (req, res) => {
    try {
        res.json(leaderboard.slice(0, 5));
    } catch (error) {
        console.error('Error in /api/leaderboard:', error.message);
        res.status(500).json({ error: 'Failed to retrieve leaderboard' });
    }
});

app.use((err, req, res, next) => {
    console.error('Unexpected error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}).on('error', (err) => {
    console.error('Server failed to start:', err.message);
});