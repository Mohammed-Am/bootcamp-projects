const fs = require('fs');
const path = require('path');

function readFileContent() {
    try {
        const filePath = path.join('c:', 'Users', 'cambotr', 'Desktop', 'bootcamp-coding', 'week-5', 'day-4', 'Challenge', 'daily-challenge', 'files', 'file-data.txt');
        const content = fs.readFileSync(filePath, 'utf8');
        console.log('File content:', content);
    } catch (err) {
        console.error('Error reading file:', err.message);
    }
}

module.exports = readFileContent;