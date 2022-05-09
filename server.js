// Add dependecies express and path 

const express = require("express");
const path = require("path");

const api = require("./routes/index.js");
const notes = require('./routes/notesRouter');



// set up express function with app variable 
// set up Port variable on 3001
const app = express();

// changin port variable into enviroment variable for Heroku to listen
const PORT = process.env.PORT || 3001;

// Setting up Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api);

app.use(express.static('public'));

//Get routes for notes page 
app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, "../public/notes.html"))
)

//get routes for notes page which is also wildcare Route
app.get("*", (req, res) => 
    res.sendFile(path.join(__dirname, "../public/index.html"))
);



// write app.listen () to starts server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
