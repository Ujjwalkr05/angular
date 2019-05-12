var fs = require("fs");

var buffer = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   buffer += chunk;
});

readerStream.on('end', function() {
   console.log(buffer);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});