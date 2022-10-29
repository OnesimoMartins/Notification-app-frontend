import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService,private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderService.show()

    if(!req.url.includes('/oauth/token')){

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getAccessToken()}`,
        }
    });
    }

    return next.handle(req).pipe(
      finalize(()=>this.loaderService.hide())
    )

  }
}
