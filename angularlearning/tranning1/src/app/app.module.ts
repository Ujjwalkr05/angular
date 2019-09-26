import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';

import { Ujjwal } from './BioData/ujjwal';
import {expressionComponent} from './expression/expressionComponent';

import {directivesComponent} from './Directives/directivesComponent';

import {FormsModule} from '@angular/forms';

import {RoutingComponent} from './Routing/RoutingComponent';

import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = ([
  {path: 'Expression', component: expressionComponent },
  {path: 'Directives', component: directivesComponent },
])


@NgModule({
  declarations: [
    AppComponent,Ujjwal,expressionComponent,directivesComponent,RoutingComponent
  ],
  imports: [
    BrowserModule, FormsModule,RouterModule, RouterModule.forRoot(appRoutes)
  ],
 // providers: [],
  bootstrap: [RoutingComponent]
})
export class AppModule { }
