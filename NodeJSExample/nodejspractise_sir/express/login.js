var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})

app.get('/success', function (req, res) {
   res.sendFile( __dirname + "/" + "success.html" );
})


var loginFunction = function (req, res) {
   // Prepare output in JSON format
   response = {
      userName:req.query.UserName,
      password:req.query.Password
   };

   
   console.log(response);
   //res.end(JSON.stringify(response));
   res.redirect("/success");
}

app.post('/login', loginFunction);
app.get('/login', loginFunction);

var server = app.listen(8081, function () {
  console.log("Listening on http://127.0.0.1:8081/");
});