import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    var token = localStorage.getItem('token');
    let authRequest;
    if (token) {
      authRequest = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token}`)
      });
    } else {
      authRequest = req;
    }

    return next.handle(authRequest);
  }
}
