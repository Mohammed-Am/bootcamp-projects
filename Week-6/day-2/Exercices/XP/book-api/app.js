const express = require('express');
const app = express();

app.use(express.json());

const bookRoutes = require('./server/routes/bookRoutes');

app.use('/api/books', bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});