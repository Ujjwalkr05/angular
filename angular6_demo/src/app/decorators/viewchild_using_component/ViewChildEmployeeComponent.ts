import { Component, ViewChild } from '@angular/core';
import { ViewChildAddressComponent } from './ViewChildAddressComponent';

@Component({
  selector: 'my-app',
  templateUrl: 'app/decorators/viewchild_using_component/employee_details.html'
})

export class ViewChildEmployeeComponent {
    @ViewChild(ViewChildAddressComponent)
    private addressComponent: ViewChildAddressComponent;
	
	empName:string = "";
    
	showEmployeeDetails() {
	   this.empName = "Amit Kumar"
	   this.addressComponent.showAddress();
	}
} 