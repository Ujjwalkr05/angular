import { Component, OnInit} from '@angular/core';
import { InjectService } from './InjectService'
import { EmployeeDB } from './EmployeeDB';

@Component ( {
	selector: "my-app",
	templateUrl: 'app/dependency_injection/inject.html',
	providers: [InjectService, EmployeeDB]
})


export class InjectComponent {
	
	message:string = "";
	
	
	constructor(private injectService: InjectService) { 
		console.log("service injected successfully");
	}

	callService():void {
		this.message = this.injectService.getHelloMessage();
	}
}