var http = require('http');
//var uc = require('upper-case');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
   // res.write(uc("Hello World!"));
    res.write('Hello World!'); //write a response to the client
    res.write('<br><b>Ujjwal</b>');
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

console.log('Server running at http://127.0.0.1:8080/');