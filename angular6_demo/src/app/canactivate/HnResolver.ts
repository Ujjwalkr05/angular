import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class HnResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    return Observable.of('11111111111111111!').delay(500);
  }
}