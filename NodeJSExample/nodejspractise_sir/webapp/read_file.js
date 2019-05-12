var http = require('http');
var fs = require('fs');


// Create a server
http.createServer(function(request, response) {  
   
   var fileName = "login.html";
   
   fs.readFile(fileName, function (error, data) {
      response.writeHead(200, {'Content-Type': 'text/html'});	
      response.write(data.toString());		
      response.end();
   });   
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/index.html');