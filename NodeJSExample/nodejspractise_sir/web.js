var http = require('http')

var httpResponse = function(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/HTML'});
	
	var data = "<HTML> <HEAD> <TITLE> MY FIRST NODEJS HELLO WORLD PAGE> </TITLE> " + 
				"<BODY> <CENTER> Hi thanks for using nodejs..this is hello world..... </CENTER> </BODY></HTML>";
	
	response.write(data);
	response.end();
}

http.createServer(httpResponse).listen(7777);
	
console.log("server started");