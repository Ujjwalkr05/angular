var express = require('express');
var app = express();


var mysql = require('mysql');
const localAuth = require('../auth/local');

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "test"
 });
 
 app.get('/login',function(req,res){
	 
	//http://localhost:8081/login?username=ranjeet&password=ranjeet

    userName = req.query.username;
	password = req.query.password;

	console.log("Username is:" + userName + " "+ "User password is :" + password);
	var con = mysqlDbConnection.dbConnection();
	con.connect(function(err){
		if(err){
			throw err;
		}
		console.log("Connection with mysql is successful.");
		var sql = "SELECT * FROM users where username ='" + userName + "' &&  password ='" + password + "' ;"
		//console.log(sql);
		con.query(sql,function(err,result,fields){
			//console.log(result);
			if(err){
				throw err;
			}
			console.log("Query Executed successfully.!");
			console.log(result);
			if(result.length == 1){
				console.log("Hey your login is successfull.!");
				
				user = {
					username : result[0].username,
					password : result[0].password
				}
				
				var token = localAuth.encodeToken(user);
				res.status(200).json({
				  status: 'success',
				  token: token
				});
			
			}else{
				res.status(200).json({
				  status: 'failed',
				  token: ""
				});
			});

		});
	});
});
 
 
 
 

app.get('/listUsers', function (req, res) {
   
})


app.get('/addProduct', function (req, res) {
	
  //http://localhost:8081/addProduct?id=1&name=laptop&brand=dell&price=55000
	
  con.connect(function(err) {
	  if (err) {
		 throw err; 
	  }
		  
	  
	  console.log("Connected!");
	  var id = req.query.id;
	  var name = req.query.name;
	  var brand = req.query.brand;
	  var price = req.query.price;
	  
	  var sql = "INSERT INTO product (id, name, brand, price) VALUES ( " + id + ", '" + name + "', '" + brand + "', " + price + ")";
	  console.log(sql)
	   
	   con.query(sql, function (err, result) {
		if (err) 
			throw err;
		
		console.log("record inserted " + result.affectedRows);
		
		var message = {
		   "result" : {
			  "insert" : "true",
			  "affectedRows" : result.affectedRows
		   }
		}
		res.end( JSON.stringify(message));
	  });
	})
})

app.get('/getProduct', function (req, res) {
	
	//http://localhost:8081/getProduct?id=1
	
  con.connect(function(err) {
	  if (err) {
		 throw err; 
	  }
	  var id = req.query.id;
	  var sql = "SELECT * FROM product where id = " + id; 
	  console.log(sql)
	   
	   con.query(sql, function (err, result, fields) {
			if (err) {
				throw err;
			}
				
			//the result object is an array containing each row as an object.
			
			if (result.length == 0) {
				console.log("No records found....");
			}
			
			var product;
			for(var i=0; i<result.length;i++) {
				product = "product : { id : " + result[i].id + ", name : " + result[i].name + ", brand : " + result[i].brand + ", price : " + result[i].price + "}";
			}
			console.log("prodcut >>>>>> " + product)
			res.end( JSON.stringify(product));
			
		 });
   
	})
})

app.delete('/deleteProduct', function (req, res) {

   
})

var server = app.listen(8081, function () {

  var host = "localhost";
  console.log("host >>> " + host);
  
  var port = server.address().port;
  console.log("port >>> " + port);

  console.log("Example app listening at http://%s:%s", host, port)

})