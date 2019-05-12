var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, dbs) {
  if (err) 
  {
	  throw err;
  }

  let db = dbs.db("nodedemo");
  db.createCollection("customers", function(err, res) {
    if (err) 
    {
      throw err;
    }
    console.log("Collection created!");
  });
});