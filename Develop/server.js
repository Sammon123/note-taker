// wire up express app
// require dependencies
const express = require('express');
const path = require('path')
// pull the contents from the db.json file into this file
const db = require('./db/db.json')
// set up express app
const app = express();
const PORT = 3000;
// handling the data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ROUTES
// create route so that when a person makes a get request to notes, they receive the notes page
app.get('/notes', ((req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'))
}))
// start server to begin listening
app.listen(PORT, () => {
    console.log(`App listening onto port ${PORT}`);

})