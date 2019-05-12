var fs = require('fs');

var fun = function (err) {
  if (err) throw err;
  console.log('written in the file!!!!!');
}

fs.writeFile('newFile.txt', '22222222222222222222', fun);