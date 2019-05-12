var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, dbs) {
  if (err) 
  {
	  throw err;
  }
  
  let db = dbs.db("nodedemo");

  
  // findOne	
	  // The findOne() method returns the first occurrence in the selection.
	  // The first parameter of the findOne() method is a query object. In this example we use an empty query object, which selects all documents in a collection (but returns only the first document).
	  
		/*
			db.collection("customers").findOne({}, function(err, result) {
			if (err) throw err;
			console.log(result.name + ", " + result.address + ", " + result.orderdata);
		}); 
		*/
	
  // Find All
	// The find() method returns all occurrences in the selection.
	// The first parameter of the find() method is a query object. In this example we use an empty query object, which selects all documents in the collection.
	// No parameters in the find() method gives you the same result as SELECT * in MySQL.
	
	/*
	 db.collection("customers").find({}).toArray(function(err, customers) {
		if (err) throw err;
		
		customers.forEach(
			function(customer) {
                   console.log(customer.name + ", " + customer.address + ", " + customer.orderdata);
		   }, 
		   function(err) {
				console.log("Error occurred : " + err);
		   }
    );
		 
		console.log("\n\n*********************************************************\n");
	   
	   for(i = 0; i < customers.length; i++) {
		   var customer = customers[i];
		   console.log(customer.name + ", " + customer.address + ", " + customer.orderdata);
	   }
		
		//console.log(result);
	});  
	*/
	
  // Find Some fields
	// The second parameter of the find() method is an object describing which fields to include in the result.
	// This parameter is optional, and if omitted, all fields will be included in the result.
	/*
	 db.collection("customers").find({}, { _id: false, name: true, address: true }).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
    });
*/
	
  // Filter the Result
    // When finding documents in a collection, you can filter the result by using a query object.
    // The first argument of the find() method is a query object, and is used to limit the search.
	
	 var query = { address: "B-222, Sector-12, NOIDA" };
	db.collection("customers").find(query).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
	});  
	
  // Filter With Regular Expressions
    // You can write regular expressions to find exactly what you are searching for.
	// Regular expressions can only be used to query strings.
	/* var query = { name: /^Amit/ };
	 db.collection("customers").find(query).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	 }); */
	 
  // Sort the Result
	// Use the sort() method to sort the result in ascending or descending order.
    // The sort() method takes one parameter, an object defining the sorting order.
	// { name: 1 } // ascending
    // { name: -1 } // descending
	
	/* var mysort = { name: 1 };
	db.collection("customers").find().sort(mysort).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	}); */
	
  // Limit the Result
  /*
  db.collection("customers").find().limit(3).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  */
  
});