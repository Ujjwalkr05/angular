var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	
   res.send('Hello World ');
   
})

var server = app.listen(8081, function () {
  console.log("Listening on http://127.0.0.1:8081/");
});