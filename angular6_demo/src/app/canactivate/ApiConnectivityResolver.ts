import { Injectable }       from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ApiConnectivityResolver implements Resolve<Observable<boolean>> {
  constructor() {
		console.log("111111111111111111111111111111111" );
	}

  resolve() {
	console.log("33333333333333333333333333333333333" );
    return Observable.of(true);
  }
}