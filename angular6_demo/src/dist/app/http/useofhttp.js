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
var employeeservice_1 = require("./employeeservice");
require("rxjs/add/operator/map");
var UseOfHttp = (function () {
    function UseOfHttp(employeeService) {
        this.employeeService = employeeService;
    }
    UseOfHttp.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; });
    };
    UseOfHttp.prototype.getAllEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (employees) { return _this.employees = employees; });
    };
    UseOfHttp.prototype.addEmployee = function () {
        var response = "";
        var newEmployee = {
            "employeetID": "103",
            "employeeName": "Anuj",
            "url": "app/Images/two.jpg"
        };
        this.employeeService.addEmployees(newEmployee).subscribe(function (response) { return console.log(response); });
    };
    return UseOfHttp;
}());
UseOfHttp = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<div>Hello <br> <button (click)="getAllEmployees()">Get All Employees</button> <br> <button (click)="addEmployee()">Add New Employee</button>  </div>',
        providers: [employeeservice_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employeeservice_1.EmployeeService])
], UseOfHttp);
exports.UseOfHttp = UseOfHttp;
