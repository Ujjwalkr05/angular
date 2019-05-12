var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'D:/' + files.filetoupload.name;
      fs.readFile(oldpath, function (err, data) {
          if (err) throw err;
          console.log('File read!');

          // Write the file
          fs.writeFile(newpath, data, function (err) {
              if (err) throw err;
              res.write('File uploaded and moved!');
              res.end();
              console.log('File written!');
          });

          // Delete the file
          fs.unlink(oldpath, function (err) {
              if (err) throw err;
              console.log('File deleted!');
          });
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload" ><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(7777);

console.log('Server running at http://127.0.0.1:7777/');