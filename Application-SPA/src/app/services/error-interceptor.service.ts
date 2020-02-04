import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private sharedService: SharedService, private router: Router) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        event => { },
        err => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            // 401 error intercepted invalid token or token expired logout the user and clear loggedInActive variable
            this.sharedService.logOut();
          }
          if (err instanceof HttpErrorResponse && err.status === 400) {
            console.log('400 error intercepted');

          }
        }
      )
    );
  }
}
