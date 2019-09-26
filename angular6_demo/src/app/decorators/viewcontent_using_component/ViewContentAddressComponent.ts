import { Component, ContentChild } from '@angular/core';
import { ViewContentCityComponent } from './ViewContentCityComponent';

@Component({
  selector: 'address',
  template: 'City: {{cityComponent.cityId}} - {{cityComponent.cityName}}	'
})

export class ViewContentAddressComponent {
	@ContentChild(ViewContentCityComponent) 
	private cityComponent: ViewContentCityComponent;
}