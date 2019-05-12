var express = require('express');
var app = express();

app.get('/demo', function (req, res) {
	
   // request object
   req.accepts('text/html');
   var nameValue = req.param('name'); // ?name=tobi // this is depricated
   
   if (nameValue === undefined) {
	 nameValue = "";   
   }
   
   var class1 = req.param('class'); // ?name=nodejs2222&class=111
   if (class1 === undefined) {
	 class1 = "";   
   }
   
   console.log("req.query.name >>> " + req.query.name);
   console.log("req.query.class >>> " + req.query.class);
   console.log("req.protocol >>> " + req.protocol);
   console.log("req.path >>> " + req.path);
   console.log("req.hostname >>> " + req.hostname);
   
   
   
   res.send('Hello World ' + nameValue + " " + class1);
   
})

var server = app.listen(8081, function () {
  console.log("Listening on http://127.0.0.1:8081/");
});