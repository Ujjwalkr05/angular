import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'my-app',
  templateUrl: 'app/jquery_bootstrap/jquery_form.html'
})
export class JQueryComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';

  public ngOnInit()
  {
    $(document).ready(function(){
        $("button").click(function(){
            var div = $("div");  
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '5em'}, "slow");
        });
    });
  }
}
