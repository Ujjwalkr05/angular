import { Component, Input } from '@angular/core';

@Component({
  selector: 'city',
  template: ''
})
export class ViewContentCityComponent {

    @Input() cityId: string;	
    @Input() cityName: string;
} 