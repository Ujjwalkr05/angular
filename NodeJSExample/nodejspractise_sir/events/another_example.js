// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var extractHandler = function connected() {
   console.log('connection succesful.');
   // Fire the data_received event 
   eventEmitter.emit('transform');
}

var transformHandler = function(){
    console.log('transform done succesfully.');
    eventEmitter.on("load");
 }

 var loadHandler = function(){
    console.log('load done succesfully.');
 }

// Bind the connection event with the handler
eventEmitter.on('extract', extractHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('transform', transformHandler);
eventEmitter.on('load', loadHandler);

// Fire the connection event 
eventEmitter.emit('extract');

console.log("Program Ended.");
