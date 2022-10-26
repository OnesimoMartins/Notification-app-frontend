import { Injectable } from '@angular/core';
import {Observable }from 'rxjs'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate{

  // constructor( private authenticationService:AuthenticationService
  //   ,private router:Router) {
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return true;
  }

  // return this.authorizationService.isAuthenticated()

}

