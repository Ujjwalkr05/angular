import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './PowerBoost.html'
})
export class PowerBoostCalculatorComponent {
  
  power:number = 5;
  factor = 1;
  constructor(){
    console.log("1111111111111111111111")
  }
}