// Include modules
const express = require('express');
const fs      = require('fs').promises;
const path    = require('path');
const app     = express();

// Port
const PORT = 3000;

// Setup Express to handle JSON, encoded URL data, and serve static pages.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Serve index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// Open the port and listen
app.listen(PORT, () => console.log(`Server is running at https://localhost:${PORT}`));