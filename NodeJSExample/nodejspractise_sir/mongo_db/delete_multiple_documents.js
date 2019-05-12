var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, dbs) {
  if (err) 
  {
	  throw err;
  }
  
  let db = dbs.db("nodedemo");

  
  var deleteQuery = { address: /222/ };
  db.collection("customers").deleteMany(deleteQuery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
  
  
});