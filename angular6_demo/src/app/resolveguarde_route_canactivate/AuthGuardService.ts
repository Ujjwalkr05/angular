import { Injectable }       from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate  {
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    
		return true;
  } 
  
}