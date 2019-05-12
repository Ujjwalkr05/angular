var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, dbs) {
  if (err) 
  {
	  throw err;
  }
  
  let db = dbs.db("nodedemo");

  /*
  
  var oldvalues = { address: "B-222, Sector-12, NOIDA" };
  var newvalues = { name: "Mickey", address: "B-44444444, Sector-12, NOIDA" };
  db.collection("customers").updateOne(oldvalues, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.n + " document updated");
    db.close();
  });
  */
  // Update Many Documents
  
  
  
  var myquery = { address: /C-222/ };
  var newvalues = {$set: {name: "Mukesh"} };
  db.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
  
  
});