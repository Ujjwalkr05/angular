var mysql = require('mysql');



var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "test"
 });

con.connect(function(err) {
  if (err) {
	 throw err; 
  }
	  
  
  console.log("Connected!");
  
  var selectSql = "SELECT * FROM EMPLOYEE order by employee_id desc";
  
  employeeId = 0;
  con.query(selectSql, function (err, result, fields) {
	
	employeeId = result[0].employee_id + 1;
	
	console.log("last employee id in db  = " + employeeId);
  });
  
  
  var sql = "INSERT INTO employee (employee_id, name, address, salary) VALUES ( " + employeeId + ", 'Ayush', 'Noida 74', 88888)";
   
   con.query(sql, function (err, result) {
    if (err) 
		throw err;
    
	console.log("record inserted " + result.affectedRows);
	process.exit();
  });
});
