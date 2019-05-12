var events = require('events');

var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

 

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

 // Bind the 93.5 event with the listner1 function
eventEmitter.addListener('93.5', listner1);
// Bind the 93.5 event with the listner2 function
eventEmitter.on('93.5', listner2);

 

var totalNumberOfeventListeners = require('events').EventEmitter.listenerCount(eventEmitter, '93.5');

console.log(totalNumberOfeventListeners + " Listner(s) listening to 93.5 event");

 // Fire the 93.5 event

eventEmitter.emit('93.5');

// Remove the binding of listner1 function

eventEmitter.removeListener('93.5', listner1);
console.log("Listner1 will not listen now.");

// Fire the 93.5 event
eventEmitter.emit('93.5');

totalNumberOfeventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'93.5');
console.log(totalNumberOfeventListeners + " Listner(s) listening to 93.5 event");

console.log("Program Ended.");