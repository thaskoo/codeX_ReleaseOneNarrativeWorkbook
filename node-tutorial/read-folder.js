var fs = require('fs');

exports.linesInFiles = function(folderName){

    var allLines = [];
    var files = fs.readdirSync(folderName);

    files.forEach(function(file){

        var content = fs.readFileSync(folderName + '/' + file, 'utf8');

        var lines = content.split("\n");

        lines.forEach(function(line){
            allLines.push(line);
        });

    });

    return allLines;

};

exports.linesInFilesAsync = function(folderName, cb){

    var allLines = [];
    var files = fs.readdirSync(folderName);

    files.forEach(function(file){

        var content = fs.readFileSync(folderName + '/' + file, 'utf8');

        var lines = content.split("\n");

        lines.forEach(function(line){
            allLines.push(line);
        });

    });

    cb(null, allLines);
    
};

