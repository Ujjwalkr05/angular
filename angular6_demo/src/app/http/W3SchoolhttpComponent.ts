import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Customer } from './customer';
import { EmployeeService } from './employeeservice';



@Component ({
   selector: 'my-app',
   templateUrl: 'app/http/W3Schoolhttp.html',
   providers: [EmployeeService]
})

export class W3SchoolhttpComponent {
	
   constructor(private employeeService: EmployeeService){}
   customers: Customer[];
   
   getCustomerInfo() : void {
    this.employeeService.getCustomers().subscribe(customers => this.customers = customers);
	  console.log("111111111111111 >>>>>>>>>>>>" + this.customers)

   }
}