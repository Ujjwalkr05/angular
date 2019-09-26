import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RoutingComponent } from './Routing/routingcomponent';

import { UjjwalBiodata } from './Biodata/ujjwalbiodatacomponent';

import { loginComponent } from './Login/loginComponent';

import { FormsModule } from '@angular/forms';

import { aboutAngularComponent } from './aboutAngular/appcomponent';

import { GrdFilterPipe } from './AngularTableFilter/filterPipe';

import { CustomerComponent } from './AngularTableFilter/AngularTableFilterComponent';

import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './ErrorLoginPage/ErrorComponent';

import { error } from './ErrorPage/Error';

import { AuthGuard } from './Login/AuthGuard';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// const myRoots: Routes = [
//   { path: '', component: loginComponent },
//   { path: 'aboutAngularComponent', component: aboutAngularComponent },
//   { path: 'UjjwalBiodata', component: UjjwalBiodata },
//   { path: 'loginComponent', component: loginComponent },
//   { path: 'CustomerComponent', component: CustomerComponent },
//   { path: 'ErrorLoginPage', component: ErrorPageComponent },
//   { path: '**', component: error }
// ];

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    UjjwalBiodata,
    loginComponent,
    aboutAngularComponent,
    GrdFilterPipe,
    CustomerComponent,
    ErrorPageComponent,
    error
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: loginComponent },
      { path: 'aboutAngularComponent', component: aboutAngularComponent },
      { path: 'UjjwalBiodata', component: UjjwalBiodata },
      { path: 'loginComponent', component: loginComponent},
      { path: 'CustomerComponent', component: CustomerComponent },
      { path: 'ErrorLoginPage', component: ErrorPageComponent },
      { path: '**', component: error }
    ],{ enableTracing: true })
  ],
  providers: [],
  bootstrap: [RoutingComponent]
})
export class AppModule { }
