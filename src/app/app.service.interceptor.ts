import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RefreshUserData } from './store/actions/auth/auth.actions';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private store: Store<any>,
    private router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.withCredentials) {
      const token = this.authService.getSessionData();

      return next.handle(request.clone({
          setHeaders: {
            Accept: `application/json`,
            'Content-Type': `application/json`,
            Authorization: `Bearer ${token.accessToken}`
          }
        }))
        .pipe(tap(null, (event: HttpEvent<any>) => {
            if (event instanceof HttpErrorResponse && event.status === 401) {
              if (new Date(token.expiresIn) < new Date()) {
                this.router.navigate(['auth']);
              } else {
                this.store.dispatch(new RefreshUserData());
              }
            }
          })
        );
    }

    return next.handle(request);
  }
}
