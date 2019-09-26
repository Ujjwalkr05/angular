import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './expressionComponent.html',
    //styleUrls: ['./ujjwal.css']
  })
  //var messageText = "111111";
export class expressionComponent {
    //title = 'tranning123';
    name:string = "Croma campus";
    //name = 10;
    messageText = "123"; //
    //messageText = 10;
    age:Number = 10;
    //age = 20;

    onClickMe(yourName:string){
        //this.name = "";
        this.messageText = "Hi Reader! " + yourName;
    }
  }