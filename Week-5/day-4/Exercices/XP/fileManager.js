const fs = require('fs');

module.exports = {
    readFile: function(filePath, callback) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return callback(err);
            }
            callback(null, data);
        });
    },
    
    writeFile: function(filePath, content, callback) {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    }
};