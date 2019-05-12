var buffer = new Buffer(20);

//Writing from Buffers
var length = buffer.write("Simply Easy Learning");
console.log("bytes written : "+  length);


//Reading from Buffers
console.log("All characters : " +  buffer);       // outputs: abcdefghijklmnopqrstuvwxyz
console.log("selected characters : " +   buffer.toString("ascii", 7, 11));


//Concatenate Buffers

var buffer1 = new Buffer('NodeJS learning.');
var buffer2 = new Buffer('Simply Easy Learning');

var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content: " + buffer3.toString());

//Compare Buffers

var buffer1 = new Buffer('BCA');
var buffer2 = new Buffer('ABC');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}


//Copy Buffer

var buffer1 = new Buffer('Welcome to ');

//copy a buffer
var buffer2 = new Buffer("NODEJS");
buffer1.copy(buffer2);
console.log("buffer2 content After copy : " + buffer2.toString());

//Slice Buffer

var buffer3 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer3.slice(0,9);
console.log("buffer2 content After slicing: " + buffer2.toString());
