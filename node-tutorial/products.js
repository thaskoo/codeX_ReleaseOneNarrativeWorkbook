var fs = require('fs'); //calling the modules


	 module.exports = function (filepath) { // module.exports it returned as a result of a require call
				this.productNames = function(callback){
 	 		var filesInFolder = fs.readFileSync(filepath, 'utf8');

 	 	// split the content of the file into rows
 	 	var rows = filesInFolder.split('\n');

 	 	console.log("===> " + rows.length);

 	 	//now use each row and split it up to find each product

 	 	  var listOfProducts = [];
 	 	  var productMap = {}; 


 	 	  rows.forEach(function(row){

 	 	  	var productName = row.split(',')[1];
		if(productMap[productName] === undefined) {
			listOfProducts.push(productName);
 	 				productMap[productName] = 0;
 	}
 });
   // now we create the unique list,
   callback(null, listOfProducts);
};


 this.productsSold = function(callback) {
 	var filesInFolder = fs.readFileSync(filepath, 'utf8'); //<-- reading the file which contains product
 	var rowsInFile = filesInFolder.split('\n');

 	console.log(rowsInFile.length);

 	var productQuantity = []; //--> an empty array because we will have the quantity

 	var quantityMap = {};

 	rowsInFile.forEach(function(row) {

 		var fields = row.split(','); // we want our rows to be in a fiels

 		var currentProduct = fields[1];
 		var productQuantity = fields[2];

 		console.log( " fields : " + JSON.stringify(fields));
 			if(quantityMap[currentProduct] === undefined) {
 	 				quantityMap[currentProduct] = 0;
 	 			}
 	 			quantityMap[currentProduct] = quantityMap[currentProduct] + Number(productQuantity);
 	 		});
 	console.log( "-----> " + JSON.stringify(quantityMap));
 	callback(null, quantityMap);
 };

};


 	
 	

 		