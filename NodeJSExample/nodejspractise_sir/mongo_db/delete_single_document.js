var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db) {
  if (err) 
  {
	  throw err;
  }
  let db = dbs.db("nodedemo");

  var deleteQuery = { name: 'Amit Kumar' };
  db.collection("customers").deleteOne(deleteQuery, function(err, response) {
    if (err) throw err;
    console.log(response.result.n + " document deleted");
    db.close();
  });
  
  
});