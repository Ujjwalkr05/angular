"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ColorInputDirective = (function () {
    function ColorInputDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ColorInputDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.color = this.myColor;
        this.elementRef.nativeElement.style.backgroundColor = '#ccccff';
        this.elementRef.nativeElement.style.fontSize = '20px';
    };
    return ColorInputDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColorInputDirective.prototype, "myColor", void 0);
ColorInputDirective = __decorate([
    core_1.Directive({
        selector: '[myColor]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ColorInputDirective);
exports.ColorInputDirective = ColorInputDirective;
