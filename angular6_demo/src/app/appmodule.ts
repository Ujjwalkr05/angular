import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//import { HttpLogInterceptor } from './http/HttpLogInterceptor';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

import { ngIfngForDemo }  from './directives/ngIfngForDemo';
import { LoginComponent } from './login/login.component';
import { UseOfHttp } from './http/useofhttp';
import { W3SchoolhttpComponent } from './http/W3SchoolhttpComponent';

import { ExpressionComponent } from './expression/ExpressionComponent'
import { MyDirComponent } from './directives/MyDirComponent'

import { TextRedCustomDirective } from './directives/TextRedCustomDirective'
import { ColorInputDirective } from './directives/ColorInputDirective'


import { RoutingComponent } from './routing/RoutingComponent'
import { AboutComponent } from './routing/about';
import { HomeComponent } from './routing/home';
import { SearchComponent } from './routing/SearchComponent';
import { PageNotFoundComponent } from './routing/PageNotFoundComponent';
import { PipesComponent } from './pipes/PipesComponent';
import { CustomMuliplierPipe } from './pipes/CustomMuliplierPipe';
import { FilterString } from './pipes/FilterString';
import { InjectComponent } from './dependency_injection/InjectComponent';
import { MainComponent } from './directives/MainComponent';
import { HomeAddressComponent } from './directives/HomeAddressComponent';
import { OfficeAddressComponent } from './directives/OfficeAddressComponent';
import {MyBiodataComponent} from './MyBiodataComponent';





var appRoutes: Routes = ([
  {path: '',       component: HomeComponent },
  {path: 'home',   component: HomeComponent },
  {path: 'about',  component: AboutComponent },
  {path: 'login',  component: LoginComponent },
  {path: 'expression',  component: ExpressionComponent },
  {path: 'search',  component: SearchComponent },
  {path: '**',    component: PageNotFoundComponent } 
])

@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule, 
                  FormsModule, 
                  RouterModule, 
                  RouterModule.forRoot(appRoutes)
                ],
  declarations: [ AppComponent,
                  MyBiodataComponent,
                  LoginComponent, 
                  ExpressionComponent, 
                  ngIfngForDemo, 
                  MyDirComponent, 
                  RoutingComponent, 
                  HomeComponent, 
                  AboutComponent, 
                  PageNotFoundComponent, 
                  UseOfHttp, 
                  W3SchoolhttpComponent, 
                  PipesComponent, 
                  CustomMuliplierPipe, 
                  FilterString, 
                  InjectComponent, 
                  TextRedCustomDirective, 
                  ColorInputDirective, 
                  SearchComponent, 
                  MainComponent,
                  HomeAddressComponent,
                  OfficeAddressComponent
                ],
  bootstrap:    [ MyBiodataComponent ],
  /*providers: [
    { 
        provide: HTTP_INTERCEPTORS, 
        useClass: HttpLogInterceptor, 
        multi: true 
    } 
  ],
  */
})
export class AppModule { }
