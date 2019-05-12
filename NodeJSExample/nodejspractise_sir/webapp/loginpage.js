var http = require("http");
var url = require("url");

// this is callback function

var responseWriter = function (request, response) {
	
	response.writeHead(200, {'Content-Type' : 'text/html'});
	
	var loginpage = "<HTML><head> <title>Login Page </title></head> <body> <center> Enter Your Username <input type='text' name='username'>"
				+ " <br> Enter Password <input type='password' name='password'> "
				+ " <br> <input type='submit' name='login' value='Login'> "
				+ "</body></HTML>";

	var registrationpage = "<HTML><head> <title>registation Page </title></head> <body>registation page"
				+ "</body></HTML>";

	var pathname = url.parse(request.url).pathname;
	var pageName = pathname.substr(1);
	if(pageName == "login") {
		response.end(loginpage);
	}
	else if(pageName == "registration") {
		response.end(registrationpage);
	}

	response.end("home page....");
	
}

http.createServer(responseWriter).listen(2222);
console.log("server started : http://localhost:2222");
