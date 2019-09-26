import { Component, Input } from '@angular/core';  

@Component ({ 
   selector: 'home-address', 
   template: '<div> {{address}} , {{country}}</div>' 
}) 

export class HomeAddressComponent { 
   address = ''; 
   @Input() childCountry:string;
   @Input() childCitizen:string;
   
   ngOnInit() { 
      this.address = "NIIT Tech Ltd, sector 62, Noida" + this.childCountry + "<br> citizen is " + this.childCitizen; 
   } 
}