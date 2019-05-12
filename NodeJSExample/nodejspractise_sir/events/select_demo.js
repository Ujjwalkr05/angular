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
    //var sql = "SELECT * FROM EMPLOYEE where employee_id = 101"; // retrieve operation
	//var sql = "SELECT * FROM EMPLOYEE "; // search operation
   //SELECT name, address FROM EMPLOYEE
   var sql = "SELECT * FROM EMPLOYEE ORDER BY employee_id";
   //SELECT * FROM EMPLOYEE LIMIT 5
   //SELECT * FROM EMPLOYEE LIMIT 5 OFFSET 2 - If you want to return five records, starting from the third record, you can use the "OFFSET" keyword:
   // same as above SELECT * FROM EMPLOYEE LIMIT 2, 5
   
   con.query(sql, function (err, result, fields) {
    if (err) 
		throw err;
	//the result object is an array containing each row as an object.
	
	if (result.length == 0) {
		console.log("No records found....");
	}
	
	
	for(var i=0; i<result.length;i++) {
		console.log(result[i].employee_id + ', '+ result[i].name+ ', '+ result[i].address+ ', '+ result[i].salary);
	}
	
	
	// The Fields Object
	// The third parameter of the callback function is an array containing information about each field in the result.
	for(var i=0; i<fields.length;i++) {
		console.log(fields[i].name);
	}
	process.exit();
  });
});
