import { Component } from '@angular/core'; 

import { HomeAddressComponent } from './HomeAddressComponent'; 
import { OfficeAddressComponent } from './OfficeAddressComponent';

@Component ({ 
   selector: 'my-app', 
   templateUrl: 'app/directives/maincomponent.html'
}) 

export class MainComponent { 

    parentCountry:string = 'USA';
    parentCitizen:string = 'USA';
}