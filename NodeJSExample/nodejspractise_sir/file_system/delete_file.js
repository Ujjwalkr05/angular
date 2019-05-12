var fs = require('fs');


fs.unlink('111.txt', function (err) {
  if (err) {
    console.log("Some issue occurred while deleting file >>> " + err);
  }
  else {
    console.log('file deleted successfully....');
  }
  
});