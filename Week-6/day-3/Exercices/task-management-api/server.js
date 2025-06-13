
const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Task Management API is running. Use the /tasks endpoint to manage tasks.');
});


app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
