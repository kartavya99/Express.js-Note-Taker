
const express = require("express");

// Import our modular router for notes
const nRouter = require("./notesRouter");

const app = express();

app.use("/notes", nRouter);

module.exports = app;