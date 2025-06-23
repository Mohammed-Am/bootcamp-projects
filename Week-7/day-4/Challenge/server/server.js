const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// GET request for /api/hello
app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

// POST request for /api/world
app.post('/api/world', (req, res) => {
  const { value } = req.body;
  console.log('Request body:', req.body); // Log the request body
  res.send(`I received your POST request. This is what you sent me: ${value}`);
});

app.listen(5000, () => console.log('Server running on port 5000'));