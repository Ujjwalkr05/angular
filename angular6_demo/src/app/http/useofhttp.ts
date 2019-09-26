import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employeeservice';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
   selector: 'my-app',
   template: '<div>Hello <br> <button (click)="getAllEmployees()">Get All Employees</button> <br> <button (click)="addEmployee()">Add New Employee</button>  </div>',
   providers: [EmployeeService]
})

export class UseOfHttp {
	
   employees: Employee[];

   constructor(private employeeService: EmployeeService) {
   }
   
   ngOnInit() : void {
      this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
   }

   getAllEmployees():void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
   }

   addEmployee():void {
    
    var response : any= "";

    var newEmployee = {
        "employeetID": "103",
        "employeeName" : "Anuj",
        "url": "app/Images/two.jpg"
     } 

    this.employeeService.addEmployees(newEmployee).subscribe(response => console.log(response));
    
   }
}