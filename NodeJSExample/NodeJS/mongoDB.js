var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/nodedemo";

mongoClient.connect(url, function(err, db) {
  if (err) 
  {
	  throw err;
  }
  else
  console.log("Database created!");
  db.close();
});