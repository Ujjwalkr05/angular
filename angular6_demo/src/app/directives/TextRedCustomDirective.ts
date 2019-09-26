import { Directive, ElementRef } from '@angular/core';

@Directive({ 
     selector: '[textRed]' 
})
export class TextRedCustomDirective {

    constructor(elementRef: ElementRef) {
       elementRef.nativeElement.style.color = 'red';
	   elementRef.nativeElement.style.backgroundColor = '#ccccff';
       elementRef.nativeElement.style.fontSize = '20px';
    }
} 