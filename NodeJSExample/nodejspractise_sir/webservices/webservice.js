var express = require('express');
var app = express();

app.get('/addProduct', function (httpRequest, httpResponse) {
	console.log("inside add product.....")

	var message = {
		"result" : {
		   "insert" : "true"
		}
	 }

	 httpResponse.end( JSON.stringify(message));
	
})

app.get('/listProducts', function (httpRequest, httpResponse) {
	console.log("inside add product.....")

	var message = {
		"result" : [{
		   "id" : "111",
		   "name" : "laptop",
		   "brand" : "dell",
		   "price" : "45000",
		},
		{
			"id" : "112",
			"name" : "shoes",
			"brand" : "adidas",
			"price" : "1200",
		 }
	]}

	 httpResponse.end( JSON.stringify(message));
	
})


var server = app.listen(8081, function () {
	console.log("server started at http://localhost:8081")

})