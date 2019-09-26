import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/login/login.html'
})


export class LoginComponent implements OnInit  {

	userName:string = "";
	password:string = "";
	data: any;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
	}
	
	ngOnInit() {
  
		this.data = this.activatedRoute.snapshot.data;
		console.log("****************** " + this.data.message);
	}
	
	login():boolean {
		
		this.data = this.activatedRoute.snapshot.data;
		console.log("****************** " + this.data.message);
		
		if(true) {
			this.router.navigate([ "/dashboard" ]);
		}
	}

}