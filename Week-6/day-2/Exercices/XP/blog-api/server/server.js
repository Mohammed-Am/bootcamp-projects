// server/server.js
const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
 res.json({ message: 'Welcome to the Blog API. Use /posts for blog operations.' });
});

// Routes
app.use('/posts', postRoutes);

// Error handling for invalid routes
app.use((req, res, next) => {
 res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});