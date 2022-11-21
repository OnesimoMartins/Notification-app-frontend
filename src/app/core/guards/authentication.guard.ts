import { Injectable } from '@angular/core';
import {Observable }from 'rxjs'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate{

  constructor( private authService:AuthService
    ,private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


    if (this.authService.isAccessTokenInvalid()) {

      let canActivate =false;

      this.authService.refreshToken().subscribe({

        error:()=> this.authService.logout().subscribe(it=>this.redirectToLoginPage())
        ,
        next:(authenticated)=>  authenticated? canActivate=true: this.redirectToLoginPage()

      });

      return canActivate;
    }

    return true;
  }


  private redirectToLoginPage(){
    this.router.navigateByUrl('/auth/login')
  }

}

