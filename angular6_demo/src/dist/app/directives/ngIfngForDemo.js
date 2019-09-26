"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ngIfngForDemo = (function () {
    function ngIfngForDemo() {
        this.appTitle = 'Welcome';
        this.appStatus = false;
        this.empList = [
            {
                "ID": "1",
                "Name": "Amit Gupta",
            },
            {
                "ID": "2",
                "Name": "Shivansh"
            },
            {
                "ID": "3",
                "Name": "Shyamji"
            }
        ];
    }
    ngIfngForDemo.prototype.enableEmployeeInfo = function () {
        console.log("inside enableEmployeeInfo --------------> ");
        this.appStatus = !(this.appStatus);
    };
    return ngIfngForDemo;
}());
ngIfngForDemo = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/directives/ngIfngForDemo.html'
    })
], ngIfngForDemo);
exports.ngIfngForDemo = ngIfngForDemo;
