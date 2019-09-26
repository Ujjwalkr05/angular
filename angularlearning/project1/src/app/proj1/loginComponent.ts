import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './loginComponent.html',
    styleUrls: ['./loginComponent.css']
})
export class loginComponent {
    username: string = '';
    userpassword = '';
    isUserNameInvalid: boolean = false;
    isUserPasswordInvalid = false;
    isSuccessfulLogedin = false;
    credentialVeriy() {

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
    reset()
    {
        this.isUserNameInvalid = false;
        this.isUserPasswordInvalid = false;
        this.isSuccessfulLogedin = false;
    }
    clear() {
        this.reset();
        this.username = '';
        this.userpassword = '';
    }
}
