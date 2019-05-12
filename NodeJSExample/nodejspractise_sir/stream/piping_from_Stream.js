var fs = require("fs");
var assert = require("assert");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

writerStream.on('pipe', function() {
  console.error('Reading started by readerStream and written into writerStream');
});

writerStream.on('unpipe', function(src) {
  console.error('writing done. no need to have pipe between them.');
  assert.equal(src, readerStream);
});

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);




