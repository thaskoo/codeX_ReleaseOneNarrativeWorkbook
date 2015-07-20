// syncronously method//
var findLines = function(folderName){
	var fs = require('fs');
	var filesInFolder = fs.readdirSync(folderName);
	//fs is reading the Directory synchronously//

 	var linesInFiles = [];
 	// it declare the linesInFiles as an Array//
	filesInFolder.forEach(function(fileName){ 
		//get files in the folder//
		var fileContent = fs.readFileSync('./files/week1/' + fileName, "utf8");
		// read the content of the file//

		var lines = fileContent.split('\n');
		//it split the new line//

		lines.forEach(function(line){
			linesInFiles.push(line);
		});
	});
	
	console.log(linesInFiles);

	return linesInFiles;
}
//Exports 2 methods of LinesInFiles with parameters//
	// find lines in a file and calling back the lines in files using Asynchronous//
exports.linesInFilesAsync = function(folderName, callback) {

	var linesInFiles = findLines(folderName);
	callback(null, linesInFiles);

};
exports.linesInFiles = function(folderName){

	var linesInFiles = findLines(folderName);
	return linesInFiles;

}; 
