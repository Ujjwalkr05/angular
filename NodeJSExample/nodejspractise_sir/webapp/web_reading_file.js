var http = require('http');
var fs = require('fs');

var url = require('url');

// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   console.log("Request for url " + url + " received.");
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for pathname " + pathname + " received.");
   
   // Read the requested file content from file system
   
   var fileName = pathname.substr(1);
   
   console.log("Request for fileName " + fileName + " received.");
   
   if((fileName == null) || (fileName == "")) {
	   fileName = "index.html";
   }
   console.log("Request for " + fileName + " received.");
   
   fs.readFile(fileName, function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {'Content-Type': 'text/html'});
		 response.write("Page not found... please try again...");
      }else {	
         response.writeHead(200, {'Content-Type': 'text/html'});	
         response.write(data.toString());		
      }
      // Send the response body 
      response.end();
   });   
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/index.html');