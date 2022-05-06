// The following API routes should be created:
// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

const nRouter = require("express").Router();
const { readAndAppend, readFromFile, writeTOFile } = require("../helpers/fsUtils");
const notes = require("../db/db.json");

// Get Route for retreving all the notes
nRouter.get('/', (req, res) =>
   // console.info(`${req.method} request received for notes`);
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);