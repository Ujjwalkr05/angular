import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from './UserService';
import { User } from './User';

@Component({
   selector: 'my-app',
   templateUrl: 'app/forms/template-driven-form-component.html',
   styleUrls: ['app/forms/styles.css'],
   providers: [UserService]
})

export class TemplateDrivenFormComponent { 
    isValidFormSubmitted:boolean = false;
	
	user = new User();
	
	constructor(private userService: UserService) {	}
	
	onFormSubmit(userForm: NgForm) {
	   this.isValidFormSubmitted = false;
	   if(userForm.invalid){
		  return;	
	   } 	
	   this.isValidFormSubmitted = true;
	   this.user.userName = userForm.controls['uname'].value;
	   this.user.gender = userForm.controls['gender'].value;
	   this.user.isMarried = userForm.controls['married'].value;
	   this.user.isTCAccepted = userForm.controls['tc'].value;
	   
	   this.userService.createUser(this.user);
	   this.resetForm(userForm);
	}
	
	resetForm(form: NgForm) {
	   form.resetForm({
		   married: false
	   }); 
	}
	setDefaultValues() {
	   this.user.userName = 'Krishna';
	   this.user.gender = 'male';
	   this.user.isMarried = true;
	   this.user.isTCAccepted = false;
	}
} 