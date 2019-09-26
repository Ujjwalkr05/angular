import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class HnResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
    return Observable.of('thanks for using resolver!').delay(500);
  }
}