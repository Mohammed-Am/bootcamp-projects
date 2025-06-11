const fs = require('fs');
const path = require('path');

const directoryPath = './'; 

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {
        console.log(file);
    });
});