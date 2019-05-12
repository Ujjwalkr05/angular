var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('111.txt', 'Now i want to add some more data', function (err) {
  if (err) throw err;
  console.log('contens append successfully!');
});