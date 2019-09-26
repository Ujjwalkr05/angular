"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CustomMuliplierPipe_1 = require("./CustomMuliplierPipe");
var PipesComponent = (function () {
    function PipesComponent() {
        this.city = "Noida";
        this.text = "Today is Saturday and date is 6 January 2018.";
        this.todayDate = new Date();
        this.languagesNames = [
            'java',
            'j2EE',
            'net',
            'php',
            'nodejs',
            'javascript',
            'angularjs'
        ];
    }
    return PipesComponent;
}());
PipesComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: 'app/pipes/pipes.html',
        providers: [CustomMuliplierPipe_1.CustomMuliplierPipe]
    })
], PipesComponent);
exports.PipesComponent = PipesComponent;
