import { Injectable }       from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class ApiConnectivityResolver implements Resolve<Observable<boolean>> {
  constructor() {
		console.log("constructor calling" );
	}

  resolve() {
	  console.log("inside resolve" );
    return Observable.of(true);
  }
}