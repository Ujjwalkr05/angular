import { Component, ViewChild } from '@angular/core';
import { ColorDirective } from './ColorDirective';

@Component({
  selector: 'my-app',
  templateUrl: 'app/decorators/viewchild_using_custom_directive/color_parent_component.html'
})

export class ColorParentComponent {

    @ViewChild(ColorDirective)
    private colorDirective: ColorDirective;

    changeColor(color: string) {
        this.colorDirective.change(color);
    }

} 