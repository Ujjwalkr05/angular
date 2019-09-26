import { Component} from '@angular/core';

import { CustomMuliplierPipe } from './CustomMuliplierPipe';
import { FilterString } from './FilterString';

@Component ( {
	selector: "my-app",
	templateUrl: 'app/pipes/pipes.html',
	providers: [CustomMuliplierPipe]
})


export class PipesComponent {

     city = "Noida"; 
	 
	 text: string = "Today is Saturday and date is 6 January 2018.";
	 
	 todayDate = new Date();
	 
	 languagesNames = [
				'java',
				'j2EE',
				'net',
				'php',
				'nodejs',
				'javascript',
				'angularjs'
			];

}