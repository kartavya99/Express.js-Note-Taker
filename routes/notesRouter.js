// The following API routes should be created:
// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

const nRouter = require("express").Router();
const { readAndAppend, readFromFile, writeTOFile } = require("../helpers/fsUtils");
const notes = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');
const { json } = require("express/lib/response");

// Get Route for retreving all the notes
nRouter.get('/', (req, res) => { 
    console.info(`${req.method} request received for notes`);

    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))     
});

// GET Method - api/notes should read the db.json file and return all save notes as JSON.
nRouter.get("/api/notes", (req, res) => {
   // console.log("Receiving notes");
    const notes = req.params.notes;
    readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    res.json(notes);
})

// POST method - api/notes should receive a new note to save on the request body(payload), add it to the db.json file, and then return the new note to the client.







// Delete - api/notes/:id  should receive a query parameter containing the id of a note to delete. Need to set up each note a unique id when it is saved.
// In order to delete a note, need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

nRouter.delete("/:note_id", (req, res) => {
    const noteId = req.params.note_id;
    readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
        //make a new array of all the notes except the one with the ID provided in the URL
        const result = json.filter((note) => note.note_id !== noteId);

        //save that array to the filesystem
        writeTOFile("./db/db.json", result);

        //Respond to the Delete request
        res.json(`Note ${noteId} had been deleted 🗑️`);
    });
});





module.exports =nRouter;