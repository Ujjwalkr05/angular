"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
//import { HttpLogInterceptor } from './http/HttpLogInterceptor';
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var ngIfngForDemo_1 = require("./directives/ngIfngForDemo");
var login_component_1 = require("./login/login.component");
var useofhttp_1 = require("./http/useofhttp");
var W3SchoolhttpComponent_1 = require("./http/W3SchoolhttpComponent");
var ExpressionComponent_1 = require("./expression/ExpressionComponent");
var MyDirComponent_1 = require("./directives/MyDirComponent");
var TextRedCustomDirective_1 = require("./directives/TextRedCustomDirective");
var ColorInputDirective_1 = require("./directives/ColorInputDirective");
var RoutingComponent_1 = require("./routing/RoutingComponent");
var about_1 = require("./routing/about");
var home_1 = require("./routing/home");
var SearchComponent_1 = require("./routing/SearchComponent");
var PageNotFoundComponent_1 = require("./routing/PageNotFoundComponent");
var PipesComponent_1 = require("./pipes/PipesComponent");
var CustomMuliplierPipe_1 = require("./pipes/CustomMuliplierPipe");
var FilterString_1 = require("./pipes/FilterString");
var InjectComponent_1 = require("./dependency_injection/InjectComponent");
var MainComponent_1 = require("./directives/MainComponent");
var HomeAddressComponent_1 = require("./directives/HomeAddressComponent");
var OfficeAddressComponent_1 = require("./directives/OfficeAddressComponent");
var MyBiodataComponent_1 = require("./MyBiodataComponent");
var appRoutes = ([
    { path: '', component: home_1.HomeComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'about', component: about_1.AboutComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'expression', component: ExpressionComponent_1.ExpressionComponent },
    { path: 'search', component: SearchComponent_1.SearchComponent },
    { path: '**', component: PageNotFoundComponent_1.PageNotFoundComponent }
]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [app_component_1.AppComponent,
            MyBiodataComponent_1.MyBiodataComponent,
            login_component_1.LoginComponent,
            ExpressionComponent_1.ExpressionComponent,
            ngIfngForDemo_1.ngIfngForDemo,
            MyDirComponent_1.MyDirComponent,
            RoutingComponent_1.RoutingComponent,
            home_1.HomeComponent,
            about_1.AboutComponent,
            PageNotFoundComponent_1.PageNotFoundComponent,
            useofhttp_1.UseOfHttp,
            W3SchoolhttpComponent_1.W3SchoolhttpComponent,
            PipesComponent_1.PipesComponent,
            CustomMuliplierPipe_1.CustomMuliplierPipe,
            FilterString_1.FilterString,
            InjectComponent_1.InjectComponent,
            TextRedCustomDirective_1.TextRedCustomDirective,
            ColorInputDirective_1.ColorInputDirective,
            SearchComponent_1.SearchComponent,
            MainComponent_1.MainComponent,
            HomeAddressComponent_1.HomeAddressComponent,
            OfficeAddressComponent_1.OfficeAddressComponent
        ],
        bootstrap: [MyBiodataComponent_1.MyBiodataComponent],
    })
], AppModule);
exports.AppModule = AppModule;
