import { Component } from '@angular/core';
import { loginService } from './loginService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './loginComponent.html',
    providers: [loginService]
})
export class loginComponent {

    username: string = '';
    userpassword = '';
    isUserNameInvalid: boolean = false;
    isUserPasswordInvalid = false;
    isSuccessfulLogedin = false;
    // service:loginService;
    constructor(private service: loginService, private router: Router) {
        console.log('loginComponent');
        // this.service = service;
    }

    credentialVeriy() {
        this.login();
        this.reset();
        if (this.username == "ujjwal") {
            if (this.userpassword == "123") {
                this.isSuccessfulLogedin = true;
            }
            else
                this.isUserPasswordInvalid = true;
        } else {
            this.isUserNameInvalid = true;
        }
    }
    reset() {
        this.isUserNameInvalid = false;
        this.isUserPasswordInvalid = false;
        this.isSuccessfulLogedin = false;
    }
    clear() {
        this.reset();
        this.username = '';
        this.userpassword = '';
    }

    login(): void {
       // var abc: Boolean = new loginService().login('', '');
        var result: boolean = this.service.login(this.username, this.userpassword);
        if (result) {
          console.log('Login successful');
        }
        else
        {
          this.router.navigate(['/ErrorLoginPage']);
        }
    }
    //Question - var use


}
