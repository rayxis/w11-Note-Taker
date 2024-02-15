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

// Serve notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')))

	// Get the notes from the database JSON file, and return them.
   .get('/api/notes', (req, res) => {
	   console.log('GET /api/notes');

	   // Read the file and return a JSON string to the user.
	   fs.readFile('./db/db.json', 'utf8').then(data => res.json(JSON.parse(data)));
   })

	// Get a specific note based off of the ID.
   .get('/api/notes/:id', (req, res) => {

	   // Read the file and return a JSON string to the user.
	   fs.readFile('./db/db.json').then(data => {
		   console.log('GET /api/notes/' + req.params.id);

		   // Read the file and return a JSON string to the user.
		   res.json(JSON.parse(data).find(note => note.id === req.params.id));
	   });
   })
	// Default to serving index.html
   .get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))

	// Handle note deletions.
   .delete('/api/notes/:id', (req, res) => {
	   fs.readFile('./db/db.json')
	     .then(data => {
		     console.log('DELETE /api/notes/' + req.params.id);

		     // Parse the notes, and remove the selected item from the resulting array.
		     let notes = JSON.parse(data).filter(note => +note.id !== +req.params.id);

		     // Convert the array back into a string and save it to the database file.
		     fs.writeFile('./db/db.json', JSON.stringify(notes))
		       .then(() => res.sendStatus(200))
		       .catch(err => console.log(err));
	     })
	     .catch(err => console.log(err));
   })

	// Handle incoming POST data
   .post('/api/notes', (req, res) => {
	   console.log('POST /api/notes');

	   // Get the notes from the database JSON file.
	   fs.readFile('./db/db.json')
	     .then(data => {
		     const notes   = JSON.parse(data);
		     const newNote = req.body;


		     // Add the new note to the notes, then reindex the notes to tidy up.
		     notes.push(newNote);
		     notes.forEach((note, index) => note.id = index + 1);

		     // Update the database JSON file, and return the JSON object to the user.
		     fs.writeFile('./db/db.json', JSON.stringify(notes))
		       .then(() => res.json(newNote))
		       .catch(err => console.log(err));
	     })
	     .catch(err => console.log(err));
   });

// Open the port and listen
app.listen(PORT, () => console.log(`Server is running at https://localhost:${PORT}`));