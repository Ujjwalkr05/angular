"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FilterString = (function () {
    function FilterString() {
    }
    FilterString.prototype.transform = function (languagesNames, reqLanguage) {
        var filterLanguageNames = [];
        for (var i = 0; i < languagesNames.length; i++) {
            if (languagesNames[i] == reqLanguage) {
                filterLanguageNames.push(languagesNames[i]);
            }
        }
        return filterLanguageNames;
    };
    return FilterString;
}());
FilterString = __decorate([
    core_1.Pipe({
        name: 'filterString'
    })
], FilterString);
exports.FilterString = FilterString;
