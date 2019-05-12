var mysql = require('mysql');

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "test"
 });

con.connect(function(err) {
  if (err) 
	  throw err;
  
  console.log("Connected!");
   var sql = "update employee set address = 'Noida sec 19' where employee_id = 109";
   
   con.query(sql, function (err, result) {
    if (err) 
		throw err;
    
	console.log(result.affectedRows + " record(s) updated");

	process.exit();
  });
});
