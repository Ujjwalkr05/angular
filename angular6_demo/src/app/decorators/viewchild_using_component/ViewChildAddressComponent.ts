import { Component } from '@angular/core';

@Component({
  selector: 'emp-address',
  template: '<b>{{address}}</b>'
})

export class ViewChildAddressComponent {
	address:string = "";
	
	showAddress() {
	   this.address = "C 76, Sector 15, Noida"
	}
}