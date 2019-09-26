import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './pipesComponent.html',
   // styleUrls: ['./loginComponent.css']
})
export class pipesComponent {
    cityList: string[] = ["Noida","Delhi","GrNoida"];

    text:string = "Today is Sunday and date is 7 April 2019.";

    todayDate = new Date();

    number1:number = 10;
}
