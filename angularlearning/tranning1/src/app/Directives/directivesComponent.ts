import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './directivesComponent.html',
    //styleUrls: ['./ujjwal.css']
  })
  //var messageText = "111111";
export class directivesComponent {

    appTitle:string = 'Welcome';
    appStatus:boolean = true;

    employeeList: any[] = [
        {
            "ID":"1",
            "Name": "Ujjwal"
        },
        {
            "ID":"2",
            "Name": "kumar"
        }
    ]
    enableEmployeeInfo():void{
        console.log("inside enableEmployeeInfo ----------------->");
        this.appStatus = !(this.appStatus);
    }
  }