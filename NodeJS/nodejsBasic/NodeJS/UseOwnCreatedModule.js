var ownModule = require('./CreateOwnModule');

console.log(ownModule.myDateTime());

console.log(ownModule.helloWorld('ujjwal', function () {
    console.log('ujjwal')
})
);

var abc = ownModule.login('ujjwal', '12');
console.log('Login >>' + abc);


//stream API Node


