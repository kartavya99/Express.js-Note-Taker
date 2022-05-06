const fs = require("fs");
const util = require("util");

//Promise version of fs.readFIle
const readFromFile = util.promisify(fs.readFile);

//Function to write data to the JSON file given a destination and some content
const writeTOFile = (destination, content) => { 
    fs.writeFile(destination, JSON.stringify(content, null, 4)), (error) => error ? console.error(error) : console.info(`\nData writeen to ${destination}`)
};


// Function to read data from a give file and append some content
const readAndAppend = (content, file) => {
    fs.readFIle(file, "utf8", (error ,data) => { 
        if (error) {
            console.error(error); 
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeTOFile(file, parsedData);
        }
    });
};

module.exports = { readFromFile, readAndAppend};