const express = require('express');
const cors = require('cors'); // Optional, for CORS issues
const app = express();
const port = process.env.PORT || 3000; // Use dynamic port for Render

app.use(cors()); // Enable CORS

// Import JSON data
const narutoData = require('./naruto.json');

// Define route
app.get('/api/characters', (req, res) => {
    res.json(narutoData);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
