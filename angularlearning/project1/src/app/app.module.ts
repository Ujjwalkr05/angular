import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {loginComponent} from './proj1/loginComponent';

import {pipesComponent} from './pipes/pipesComponent';

import {FormsModule} from '@angular/forms';
import { multiplier } from './pipes/multiplier';
import { PowerBoostCalculatorComponent } from './PowerBoost/PowerBoost';
import {exponentialStrength} from './PowerBoost/exponentialStrength';



@NgModule({
  declarations: [
    AppComponent,loginComponent,
    pipesComponent,multiplier,
    PowerBoostCalculatorComponent,exponentialStrength
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [PowerBoostCalculatorComponent]
})
export class AppModule { }
