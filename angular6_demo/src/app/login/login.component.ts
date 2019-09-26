import { Component} from '@angular/core';

@Component ( {
	selector: "my-app",
	templateUrl: 'app/login/login.html'
	//styles: [require('../stylesheet/productmgmt.css')],
})


export class LoginComponent {

	userName:string = "Enter username here";
	password:string = "Enter Password here";
	loginFailed:string = "";
	
	login():boolean {
		this.loginFailed = "11111111111111111111111111111111111111111111111111"
		console.log("Inside login method");
		return true;
	}

}