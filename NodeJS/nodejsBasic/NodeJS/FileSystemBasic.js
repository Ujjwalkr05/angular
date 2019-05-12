var fs = require('fs'); //use fs module

fs.writeFile('myfile.txt','this is my file',function(err) // create this file each time.
{
    if(err)
    {
        throw err;
    }
    console.log('write in the file');
})

fs.appendFile('myfile.txt', '\nThis is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

fs.readFile('myfile.txt', function (err, data) {
    if (err) throw err;

console.log('Reading >>'+data.toString());
});

fs.rename('myfile.txt', 'myfile1.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });

// fs.unlink('myfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });