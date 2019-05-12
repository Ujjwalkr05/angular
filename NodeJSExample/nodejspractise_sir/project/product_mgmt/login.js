var mysql = require('mysql');
var express = require('express');

var session = require('express-session');

var mysqldbconnection = require('./mysqldbconnection');



var app = express();

app.use(express.static('public'));
app.use(session({
    key: 'sid',
    secret: "test.kr",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: 60000, domain: '.test.kr'}
}))

var userSession;


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})

app.get('/success', function (req, res) {
   res.sendFile( __dirname + "/" + "success.html" );
})

app.get('/login', function (req, res) {
	
   userSession = req.session;
   var userNameReq = req.query.UserName;
   var passwordReq = req.query.Password;
   
   var dbUserName = "";
   var dbPassword = "";
	
   
		
	var con = mysqldbconnection.dbConnection();
	  con.connect(function(err) {
	  if (err) 
		  throw err;
	  
	  console.log("Connected!");
	   var sql = "SELECT username, password FROM users";
	   
	   con.query(sql, function (err, result, fields) {
		if (err) 
			throw err;
		console.log("result.length...." + result.length);
		if (result.length == 0) {
			console.log("No records found....");
		}
		
		var isLoginMatch = false;
		for(var i=0; i<result.length;i++) {
			dbUserName = result[i].username;
			dbPassword = result[i].password;
			console.log("result[i].username...." + dbUserName);
			console.log("result[i].password...." + dbPassword);
			if((userNameReq == dbUserName) && (passwordReq == dbPassword)) {
				isLoginMatch = true;
				break;
			}
			
		}
		
		console.log("dbUserName...." + dbUserName);
		console.log("dbPassword...." + dbPassword);
		if(isLoginMatch) {
			console.log("Login successful.........");
			userSession.username = dbUserName;
			userSession.password = dbPassword;

			res.redirect("/addproductform");
		}
		else {
			console.log("Login FAiled.........");
			res.redirect("/");
		}
	  });
});
   
    
	
})

/****************************** end of login code ************************************/

app.get('/addproductform', function (req, res) {
	userSession = req.session;
	if(userSession.username) {
		var response = '<h1>Hello 111111111' + userSession.username + '</h1> '
						+ '<form action = "/logout" method = "GET">'
						+ '<input type = "submit" value = "Logout">'
						+ '</form>';
		res.write(response);
	}

   //res.sendFile( __dirname + "/" + "addproduct.html" );
})

app.get('/logout', function(req,res){
	req.session.destroy(function(err) {
	  if(err) {
		console.log(err);
	  } else {
		res.redirect('/');
	  }
	});

});
;




var server = app.listen(8081, function () {
  console.log("Listening on http://127.0.0.1:8081/");
});