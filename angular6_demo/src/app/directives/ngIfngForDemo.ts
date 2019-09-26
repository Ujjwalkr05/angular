import { Component} from '@angular/core';

@Component({
   selector: 'my-app',
   templateUrl: 'app/directives/ngIfngForDemo.html'
})

export class ngIfngForDemo {

   appTitle: string = 'Welcome';
   appStatus: boolean = false;
   empList: any[] = [ 
        {
            "ID": "1",
            "Name" : "Amit Gupta",
        },

        {
            "ID": "2",
            "Name" : "Shivansh"
        },
        {
            "ID": "3",
            "Name" : "Shyamji"
        } 
    ];

	enableEmployeeInfo(): void {
		console.log("inside enableEmployeeInfo --------------> ")
		this.appStatus = !(this.appStatus);
	}
}