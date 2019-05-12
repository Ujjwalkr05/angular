var http = require("http");
var fs = require('fs');

http.createServer( function (request, response) {  

	fs.readFile("index.html", function (err, data) {
		if (err) {
			console.log(err);
			response.writeHead(404, {'Content-Type': 'text/html'});
			response.write("Page not found... please try again...");
		}
		else {	
			response.writeHead(200, {'Content-Type': 'text/html'});	
			response.write(data.toString());		
		}
		// Send the response body 
		response.end();
	})
	
}).listen(8000);

console.log("server started : http://localhost:8000");
