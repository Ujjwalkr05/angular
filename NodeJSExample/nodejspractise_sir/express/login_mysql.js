var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/success', function (req, res) {
   res.sendFile( __dirname + "/" + "success.html" );
})

app.get('/login', function (req, res) {
   // Prepare output in JSON format
   
   var userName = req.query.UserName;
   var password = req.query.Password;
   var loginFailed = req.query.loginFailed;
   //user coming first time
   if((userName == null || userName == undefined) || (password == null || password == undefined)) {
	   res.sendFile( __dirname + "/" + "login.html" );
   } else {
	    var dbUserName = "admin";
		var dbPassword = "admin";
		
		if((userName == dbUserName) && (password == dbPassword)) {
			console.log("Login successful.........");
			//res.end(JSON.stringify(response));
			res.redirect("/success");
		}
		else {
			res.redirect("/login?loginFailed=true");
		}
		
   }
   
   
   
})

var server = app.listen(8081, function () {
  console.log("Listening on http://localhost:8081/");
});