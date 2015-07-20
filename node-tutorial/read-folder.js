 	
 	var fs = require('fs');

 	// find files in a folder //
 		var findFiles = function (folder){ 
 			var files = fs.readdirSync(folder);
 		var productList = [];
 		//empty array to having the items inline //

	files.forEach(function (fileName) {

 	 		var fileContent = fs.readFileSync(folder + "/" + fileName, 'utf8');
 	 			// read the contents in a folder //
 	 		var products = fileContent.split("\n");

 	 		//for(var product in products){

 	 			//var productName = products[product];
 	 			//ProductList.push(productName);

 	 			products.forEach(function(product){
 	 				console.log(product);
 	 				productList.push(product);
 	 		});

 	 	});

 	 	return productList;

 	 }

 	 //expose 2 methods using sync & Async method//

 	 exports.linesInFiles = function (folderName) {

 	 	var productList = findFiles(folderName);

 	 	return productList;
 	 };

 	 exports.linesInFilesAsync = function(folderName, callback){
 	 		var productList = findFiles (folderName);
 	 		// calling back the productLists //
 	 			callback(null, productList);
  			};  

//  	 		var ProductList = [];


//  	 		linesInFilesAsync.forEach(function(fileName) {

//  	 		var fileContent = fs.readFileAsync(folderName + "/" + fileName, 'utf8');

//  	 		var products = fileContent.split("\n");

//  	 		for(var product in products){

//  	 			var productName = products[product];
//  	 			ProductList.push(productName);
//  	 		}

//  	 	});
// 	return ProductList;

// };