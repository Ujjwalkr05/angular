var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/nodedemo";

/* GET users listing. */
router.get('/createemployee', function(req, res, next) {
	
	
	var name = req.query.name;
	
	mongoClient.connect(url, function(err, db) {
	  if (err) 
	  {
		  throw err;
	  }
	  
	  var customer = {name:name , address: "B-222, Sector-19, NOIDA", orderdata:"Arrow Shirt"};
	  
	  db.collection("customers").insertOne(customer, function(error, response) {
		 if (err) {
				throw err;
		 }
		 
		console.log("1 document inserted");
		db.close();
		 
		 
	  });
  
  
});
	
	
  res.send('respond with a resource');
});

router.get('/updateemployee', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/showemployee', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/deleteemployee', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
