import {Injectable} from '@angular/core';

@Injectable()  //i.e we are not creating the object angular will create for us.
export class loginService {
    
    login(username:string,password:string):boolean {

        console.log('service called');

        if(username == "ujjwal" &&  password == "123")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}