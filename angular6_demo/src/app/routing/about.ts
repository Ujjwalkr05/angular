import { Component} from '@angular/core';

@Component ( {
	selector:"my-app",
	template: "about"
})


export class AboutComponent {
	
	constructor() {
		console.log("AboutComponent.................");
	}
}