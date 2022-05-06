// Add dependecies express and path 

const express = require("express");
const path = require("path");


// set up express function with app variable 
// set up Port variable on 3001
const app = express();
const PORT = 3001;



// write app.listen () to starts server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
