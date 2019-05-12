var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, dbs) {
  if (err) 
  {
	  throw err;
  }
  
  let db = dbs.db("nodedemo");
  
  var customers = [
    {name:"Rakesh Kumar" , address: "B-222, Sector-12, NOIDA", orderdata:"TV"},
	  {name:"Amit Kumar" , address: "C-222, Sector-22, NOIDA", orderdata:"Sofa set"},
	  {name:"Kamesh Kumar" , address: "D-222, Sector-32, NOIDA", orderdata:"Dinig table"},
	  {name:"Deleep Kumar" , address: "E-222, Sector-42, NOIDA", orderdata:"jeans"}
  ];
  
  
		
  
  db.collection("customers").insertMany(customers, function(error, response) {
    if (error) {
        throw error;
    }
    
    console.log("Number of documents inserted: " + response.insertedCount);
  });
  
  
});