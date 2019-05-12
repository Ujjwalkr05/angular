exports.myDateTime = function () {
    return Date();
  };

  exports.helloWorld = function (yourname, abcdef) {
    abcdef();
    console.log('Hi ' + yourname);
  };

  exports.login = function (username,pass) {
    if(username == 'ujjwal' && pass == '123')
    {
      return true;
     // console.log('successful login');
    }
    return false;
  };


