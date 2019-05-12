var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/niit';
var str = "";

app.route('/').get(function(req, res) {
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('employee');
       var cursor = collection.find({});
	   var html = "<HTML> <BODY> <center> <TABLE> <TR> <TH> Employee id </TH> <TH> Employee Name </TH> <TH> Employee Salary </TH></TR>"
       str = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "<tr> <td> " +  item._id + "</<td> <td> " +  item.name + "</<td> <td> " +  item.salary + "</<td> </tr>";
           }
       }, function(err) {
		   html = html + str + "</TABLE> </center> </BODY> </HTML> ";
           res.send(html);
           
		   db.close();
          }
       );
   });
});
var server = app.listen(8081, function() {
	console.log("Listening on http://127.0.0.1:8081/");
	
});