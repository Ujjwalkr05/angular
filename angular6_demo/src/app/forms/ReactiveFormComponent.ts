import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { UserService } from './UserService';
import { User } from './User';

@Component({
   selector: 'my-app',
   templateUrl: 'app/forms/reactive-form-component.html',
   styleUrls: ['app/forms/styles.css'],
   providers: [UserService]
})
export class ReactiveFormComponent { 
	userForm:FormGroup = null;
	
	constructor(private userService: UserService) {
		this.userForm = new FormGroup({
		   uname: new FormControl('', [Validators.required, Validators.minLength(5)]),
		   gender: new FormControl('', Validators.required),
		   married: new FormControl(false),
		   tc: new FormControl('', Validators.required)
		});
		
		this.userForm.valueChanges.subscribe((value) => {
				value.uname = value.uname.toUpperCase();
				console.log(value.uname);
			}
		)
	}	
	
	isValidFormSubmitted: boolean = null;
	user = new User();
	


    onFormSubmit() {
	   this.isValidFormSubmitted = false;
	   if(this.userForm.invalid){
		return;	
	   } 	
	   this.isValidFormSubmitted = true;
	   
	   this.user.userName = this.userForm.get('uname').value;
	   this.user.gender = this.userForm.get('gender').value;
	   this.user.isMarried = this.userForm.get('married').value;
	   this.user.isTCAccepted = this.userForm.get('tc').value;
	   
	   this.userService.createUser(this.user);	 
	   this.reset();
	}
	reset() {
	   this.userForm.reset({
		    married: false
	   });	   
	}	
	setDefaultValues() {
	   this.userForm.patchValue({uname: 'Krishna', gender:'male', married:true});
	}	
} 