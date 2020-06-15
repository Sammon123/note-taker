// wire up express app
// require dependencies
const express = require('express');
const path = require('path')
const router = express.Router();
const db = require('./db/db.json')

const app = express();
// handling the data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// ROUTES
// create route so that when a person makes a get request to notes, they receive the notes page
router.get('/', (req, res) => {
    res.json(db);
})

router.post('/', (req, res) => {
    const newText = {
        title: req.body.name,
        text: req.body.email,
    }
    if (!newMember.title || !newMember.text) {
        return res.status(400).json({ msg: 'Please include a title and some text' })
    }
})

const PORT = process.env.PORT || 3000;
// start server to begin listening
app.listen(PORT, () => {
    console.log(`App listening onto port ${PORT}`);

})