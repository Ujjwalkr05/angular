var http = require("http");
const NodeCache = require( "node-cache");

const nodeCache = new NodeCache();



 
var responseWriter = function (request, response) { 
    response.writeHead(200, {'Content-Type' : 'text/html'});
    var employeeInfo;

    nodeCache.get( "employeeInfo", function( err, value ){
        if( !err ){
          if(value == undefined){
            employeeInfo =  "key not found"; 
          }else{
            console.log( value );
            employeeInfo = value
          }
        }
      });

    response.end('Hello World !!!! <br>' + "Employee id : " + employeeInfo.id + '<br>' + "Employee Name : " + employeeInfo.name);
}
 
var server = http.createServer(responseWriter).listen(8000);

server.on('listening', function() {
    console.log("server listening .....write code to perform initial loading");

    employee = { id: "101", name: "Amit" };


    nodeCache.set( "employeeInfo", employee, function( err, success ){
        if( !err && success ){
          console.log( success );
        }
      });
});


server.on('connection', function() {
    console.log("connection established");
});
 
console.log("server started: http://localhost:8000");