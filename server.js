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
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))

   // Serve notes
   .get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')))

	// Get the notes from the database JSON file, and return them.
   .get('/api/notes', (req, res) => {
	   console.log('GET /api/notes');
	   // Read the file and return a JSON string to the user.
	   fs.readFile('./db/db.json').then(data => res.json(noteData));
   })

	// Get a specific note based off of the ID.
   .get('/api/notes/:id', (req, res) => {
	   fs.readFile('./db/db.json').then(data => {
		   console.log('GET /api/notes/' + req.params.id);
		   // Read the file and return a JSON string to the user.
		   res.json(JSON.parse(data)[req.params.id]);
	   });
   });

// Open the port and listen
app.listen(PORT, () => console.log(`Server is running at https://localhost:${PORT}`));