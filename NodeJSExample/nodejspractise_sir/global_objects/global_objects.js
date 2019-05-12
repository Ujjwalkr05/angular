console.log("It prints the file name with absolute path : " +  __filename ); // The __filename represents the filename of the code being executed.

console.log("It prints the directory name with absolute path : " +  __dirname );

//setTimeout example
var i = 1;
function printHello(){
   console.log( "\n Hello, World! " + i);
   i++;

   if(i == 10) {
       process.exit();
   }
}
// Now call above function after 5 seconds
//setTimeout(printHello, 5000);


// Now call above function after 2 seconds
setInterval(printHello, 2000);
