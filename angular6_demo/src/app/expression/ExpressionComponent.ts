import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '/app/expression/expression.html'
})

export class ExpressionComponent { 
    name:string = "rahul 1111111111111";
  
    messageText = '';  
    
	  onClickMe(yourName:string) {  
      this.messageText = "Hi Reader! " + yourName;  
    } 
}
