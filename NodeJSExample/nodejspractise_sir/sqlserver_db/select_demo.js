var express = require('express');
var app = express();
//var sql = require("mssql/msnodesqlv8");
var sql = require("mssql");
var config = {
	user: 'sa',
	password: 'sa',
	server: 'localhost\\sqlexpress', 
	database: 'QMS',
	port: "1433",
	debug: true,
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
};
app.get('/', function (req, res) {
   
		//
		

    // config for your database
    
		

	/*	var config = {
			driver: "msnodesqlv8",
			server: "localhost",
			database: "QMS",
			options: {
				trustedConnection: true,
				useUTC: true
			}
		
		}
		*/
		console.log("111111111111111111111111");
    // connect to your database
    sql.connect(config, function (err) {
			console.log("111111111111111111111111");
        if (err) {
					console.log(err);
					throw err;
				}
				console.log("22222222222222222222222222");
        // create Request object
        //var request = new sql.Request();
				console.log("22222222222222222222222222 " + request);
		// query to the database and get the records
		
			var request = new sql.Request();
			// query to the database and get the records
			request.query('select * from t_users', function (err, recordset) {
				if (err) console.log(err)
				// send records as a response
				res.end(recordset);
			});
        
		});
		sql.close()
		res.end("ok..........")
});

var server = app.listen(5000, function () {
    console.log('Server is running.. http://localhost:5000');
});