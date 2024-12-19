const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Import JSON data
const narutoData = require('./naruto.json');

// API route for characters
app.get('/api/characters', (req, res) => {
  res.json(narutoData);
});

// Default route for root
app.get('/', (req, res) => {
  res.send("Welcome to the Naruto Shippuden API! Access /api/characters to get character details.");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
