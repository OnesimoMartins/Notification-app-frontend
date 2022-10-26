import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot,UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate{

  isAuthenticated!:boolean

  constructor(
    // private authService: AuthorizationService,
    // private authService: AuthenticationService,
    // private router:Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree| Observable<boolean | UrlTree>  | Promise<boolean | UrlTree> {


      // if( this.authService.isAccessTokenExpired())
      // return true;


      // this.router.navigateByUrl("/")

    return false;
  }


}
