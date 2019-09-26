import { Injectable }       from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate  {
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		console.log('Url >>>>>>>>>>>>>>>>>>>> ' + url);

		return true;
  } 
  
}