const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send('hi');
});

app.post('/api/world', (req, res) => {
  const { value } = req.body;
  console.log('Request body:', req.body);
  res.send(`this is what you sent to me: ${value}`);
});

app.listen(5000, () => console.log('Server running on port 5000'));