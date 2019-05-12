var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a GET request for the /list_user page.
app.get('/login', function (req, res) {
   console.log("Got a GET request for /login");
   //res.send('<html><body> <form action=loginuser method=GET> Username <input type=text name=username><br> Password <input type=password name=password> <br> <input type=submit name=submit value=Login></form></body></html>');
   res.sendFile( __dirname + "/" + "login.html" );
})

app.get('/loginuser', function (req, res) {
  console.log("Got a GET request for /login");
  var username = req.query.username;
  var password = req.query.password;

  


  console.log(username);
  if(username == "admin" && password == "admin") {
    res.send('<html><body> thanks for login..successful.</body></html>');
  }
  else {
    res.send('<html><body> username/password incorrect...please login again.</body></html>');
  }
  
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(2222, function () {
  console.log("Listening on http://127.0.0.1:2222/");
})