import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ 
     selector: '[cpColor]' 
})

export class ColorDirective implements AfterViewInit {
    constructor(private elRef: ElementRef) {
    }
	
	ngAfterViewInit() {
		console.log(" >>>>>>>>>>>>>>>>>>>>>>>>> ")
	   this.elRef.nativeElement.style.color = 'red';
    }

    change(changedColor: String) {
	   this.elRef.nativeElement.style.color = changedColor;
    }
}