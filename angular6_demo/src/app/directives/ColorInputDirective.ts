import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({ 
     selector: '[myColor]' 
})

export class ColorInputDirective implements AfterViewInit {
	
    @Input() myColor: string;

    constructor(private elementRef: ElementRef) { 

    }
    ngAfterViewInit(): void {
        this.elementRef.nativeElement.style.color = this.myColor;
        this.elementRef.nativeElement.style.backgroundColor = '#ccccff';
        this.elementRef.nativeElement.style.fontSize = '20px';
    }
}