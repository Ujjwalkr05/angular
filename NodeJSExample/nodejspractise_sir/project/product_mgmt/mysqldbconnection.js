var mysql = require('mysql');

exports.dbConnection = function () {
   var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "test"
 });
 return con;
};

exports.loginQuery = function(userNameReq, passwordReq) {
	
		var dbUserName = "";
		var dbPassword = "";
		
		var con = dbConnection();
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
			
			
			for(var i=0; i<result.length;i++) {
				dbUserName = result[i].username;
				dbPassword = result[i].password;
				console.log("result[i].username...." + dbUserName);
				console.log("result[i].password...." + dbPassword);
			
			
				console.log("dbUserName...." + dbUserName);
				console.log("dbPassword...." + dbPassword);
				if((userNameReq == dbUserName) && (passwordReq == dbPassword)) {
					return true;
				}
				else {
					return false;
				}
			}
		  });
	});
}
