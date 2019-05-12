var fs = require('fs');

fs.writeFile('myfile123.txt','this is my file',function(err)
{
    if(err)
    {
        throw err;
    }
    console.log('write in the file');
})

fs.readFile('myfile123.txt', function (err, data) {
    if (err) throw err;

console.log(data.toString());
});