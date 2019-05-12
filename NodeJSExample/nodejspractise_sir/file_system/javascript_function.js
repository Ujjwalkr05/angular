
function display() {
	
	console.log("111111111111111 " + display1());	
	var aaa = display1;
	aaa();
	console.log("111111111111111 " + aaa);	
	
	var bbbb = display1;
	console.log("111111111111111 " + bbbb);
	
	// this would be equal to 
	// var bbbb
	// display1();
	
	
}
	
function display1() {
	console.log("2222222222222");
}

display();
