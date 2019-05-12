var http = require("http");
var mysql = require('mysql');
var NodeCache = require( "node-cache");

var nodeCache = new NodeCache();
var con = mysql.createConnection({
  host: "localhost",
 user: "root",
 password: "",
  database: "test"
});



 
var responseWriter = function (request, response) { 
    response.writeHead(200, {'Content-Type' : 'text/html'});
    var employeeInfo = "";

    nodeCache.get( "employeeInfo", function( err, employees ){

      console.log("fetching from cache")
        if( !err ){
          if(employees == undefined){
            employeeInfo =  "No employee found"; 
          }else{
            for(var i=0; i < employees.length;i++) {
              employeeInfo += "Employee id : " + employees[i].employee_id + '\t' + "Employee Name : " + employees[i].name + '<br>';
            }

          }
        }
      });

    response.end('Hello World !!!! <br>' + employeeInfo.toString());
}
 
var server = http.createServer(responseWriter).listen(8000);

server.on('listening', function() {
    console.log("server listening .....write code to perform initial loading");

    //employee = { id: "101", name: "Amit" };

    var employees = [{}];

    con.connect(function(err) {
      if (err) 
        throw err;
      
      console.log("Connected!");
        //var sql = "SELECT * FROM EMPLOYEE where employee_id = 101"; // retrieve operation
      //var sql = "SELECT * FROM EMPLOYEE "; // search operation
       //SELECT name, address FROM EMPLOYEE
       var sql = "SELECT * FROM EMPLOYEE ORDER BY employee_id";
       con.query(sql, function (err, result, fields) {
          if (err) {
            throw err;
          }
          console.log( "Connecting with DB..fetching from DB......load on server" );
          employees = result;

          nodeCache.set( "employeeInfo", employees, function( err, success ){
            if( !err && success ) {
              console.log( success );
            }
          });
      });
    });

    


    
});


server.on('connection', function() {
    console.log("connection established");
});
 
console.log("server started: http://localhost:8000");