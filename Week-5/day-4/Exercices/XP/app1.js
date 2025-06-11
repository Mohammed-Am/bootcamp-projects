const { readFile, writeFile } = require('./fileManager');

const fs = require('fs');

fs.writeFileSync('HelloWorld.txt', 'Hello World !! ');

fs.writeFileSync('ByeWorld.txt', 'Bye World !! ');

readFile('HelloWorld.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Content of Hello World.txt:', data);
    
    writeFile('ByeWorld.txt', 'Writing to the file', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Successfully wrote to Bye World.txt');
        
        readFile('Bye World.txt', (err, newData) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('New content of Bye World.txt:', newData);
        });
    });
});