const express = require('express');
const app = express();
const port = 3000;

// Import JSON file
const narutoData = require('./naruto.json');

// API Endpoint to fetch characters
app.get('/api/characters', (req, res) => {
  res.json(narutoData);
});

// Start the server
app.listen(port, () => {
  console.log(`Naruto API is running at http://localhost:${port}`);
});
