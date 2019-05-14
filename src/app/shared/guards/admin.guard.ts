import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { selectUserProfile } from '../../store/selectors/auth/auth.selectors';
import { filter, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  constructor(private store: Store<any>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store
      .select(selectUserProfile)
      .pipe(filter(Boolean))
      .pipe(map(({ role }) => (role === 'admin') || (role === 'moderator')));
  }
}
