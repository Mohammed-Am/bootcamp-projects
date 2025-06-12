const express = require('express')
const app = express()

app.get('/api/greetings', (req, res) => {
    res.json([
        { greeting: 'Hi',},
        { greeting: 'Hello'  },
        { greeting: 'How are you' }
    ])
});

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})