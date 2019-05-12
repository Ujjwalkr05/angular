var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/send_cookie', function(req, res) { // http://127.0.0.1:8081/send_cookie
   res.cookie('cart', { items: [1,2,3] }, { maxAge: 9000000 });
   res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
   res.send('Hello World ');
});

app.get('/recieve_cookie', function(req, res) { // http://127.0.0.1:8081/recieve_cookie
   console.log("Cookies: ", req.cookies)
   res.send(req.cookies);
});

var server = app.listen(8081, function () {
  console.log("Listening on http://127.0.0.1:8081/");
});