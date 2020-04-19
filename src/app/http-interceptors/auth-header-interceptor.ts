import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
} from '@angular/common/http';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = sessionStorage.getItem('token');
    if (authToken) {
      const authReq = req.clone({
        setHeaders: { Authorization: authToken },
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
