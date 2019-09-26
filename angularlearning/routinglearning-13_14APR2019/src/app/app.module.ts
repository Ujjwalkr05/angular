import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RoutingComponent} from './Routing/routingcomponent';

import {UjjwalBiodata} from './Biodata/ujjwalbiodatacomponent';

import {loginComponent} from './Login/loginComponent';

import {FormsModule} from '@angular/forms';

import {aboutAngularComponent} from './aboutAngular/appcomponent';

import {GrdFilterPipe} from './AngularTableFilter/filterPipe';

import {CustomerComponent} from './AngularTableFilter/AngularTableFilterComponent';

import {Routes, RouterModule} from '@angular/router';

import {ErrorPageComponent} from './ErrorPage/ErrorComponent';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    UjjwalBiodata,
    loginComponent,
    aboutAngularComponent,
    GrdFilterPipe,
    CustomerComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'aboutAngularComponent', component: aboutAngularComponent },
      {path: 'UjjwalBiodata', component: UjjwalBiodata },
      {path: 'loginComponent', component: loginComponent },
      {path: 'CustomerComponent', component: CustomerComponent },
      {path: 'ErrorPage', component: ErrorPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [RoutingComponent]
})
export class AppModule { }
