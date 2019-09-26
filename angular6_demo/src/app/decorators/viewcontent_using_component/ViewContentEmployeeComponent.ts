import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   templateUrl: 'app/decorators/viewcontent_using_component/viewcontent_employee_details.html'
})

export class ViewContentEmployeeComponent {

	homeTown : boolean = true;
	
	empAddress = 'Address';

}