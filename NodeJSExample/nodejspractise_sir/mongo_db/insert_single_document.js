var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, dbs) {
  if (err) 
  {
	  throw err;
  }
  
  let db = dbs.db("nodedemo");

  var customer = {name:"Santosh Kumar" , address: "B-222, Sector-19, NOIDA", orderdata:"Arrow Shirt"};
  
    db.collection("customers").insertOne(customer, function(error, response) {
	    if (error) {
		    throw error;
        }
     

	console.log("document inserted " + response.result.n);
    
	});
});