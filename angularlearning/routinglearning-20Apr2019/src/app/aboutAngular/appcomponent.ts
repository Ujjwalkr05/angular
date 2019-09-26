import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './appcomponent.html'
 // styleUrls: ['./app.component.css']
})
export class aboutAngularComponent {

  title = 'Angular Routing Demo';
  constructor(){
    console.log('aboutAngularComponent');
  }
}
