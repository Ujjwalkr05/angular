import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './ErrorComponent.html'
})
export class ErrorPageComponent {
  title = 'Login Failed! Please try again..';
  constructor()
    {
        console.log('ErrorPageComponent');
    }
}