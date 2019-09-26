import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Employee } from './employee';
import { Customer } from './customer';

@Injectable()
export class EmployeeService {
   private employeeurl='data/employees.json';
   
   constructor(private http: Http){}
   
   getEmployees(): Observable<Employee[]> {
      return this.http.get(this.employeeurl)
      .map((response: Response) => <Employee[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
   
   getCustomers(): Observable<Customer[]> {
      return this.http.get("https://www.w3schools.com/angular/customers.php")
      .map((response: Response) => <Customer[]> response.json().records)
      .do(data => console.log(JSON.stringify(data)));
   }

   addEmployees(newEmployee:any ): Observable<any> {
        let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        return this.http.post(this.employeeurl, newEmployee, options).map(this.extractData);
   }

   private extractData(res: Response) {
        let result = {"result" : "success"};
        return result;
    }

    private handleError(error: Response | any) {
		console.error(error.message || error);
	}

}