import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Login } from '../../store/actions/auth/auth.actions';
import { selectAuthErrors, selectAuthStatus } from '../../store/selectors/auth/auth.selectors';
import { AuthAdminComponent } from '../app-auth-admin/auth-admin/auth-admin.component';
import { AuthComponent } from '../app-auth/auth/auth.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public projectName = 'VsuLingvo';
  public isLogged$: Observable<boolean>;
  private isError$: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.isLogged$ = this.store.select(selectAuthStatus);
    this.isError$ = this.store.select(selectAuthErrors);
  }

  public openAuthDialog(): void {
    this.dialog.open(AuthComponent, {
      width: '350px'
    }).afterClosed().pipe(
      filter(Boolean)
    ).subscribe(result => {
      this.store.dispatch(new Login({
        password: result.password,
        name: `${result.firstName}-${result.lastName}-${result.groupNumber}`
      }));

      this.delayLoginResult();
    });
  }
  public openAuthAdminDialog(): void {
    this.dialog.open(AuthAdminComponent, {
      width: '350px'
    }).afterClosed().pipe(
      filter(Boolean)
    ).subscribe(result => {
      this.store.dispatch(new Login({
        password: result.password,
        name: `${result.firstName}-${result.lastName}`
      }));

      this.delayLoginResult(true);
    });
  }

  private delayLoginResult(isAdmin?: boolean): void {
    this.isLogged$.pipe(
      filter(Boolean)
    ).subscribe(() => {
      this.router.navigate([isAdmin ? '/admin' : '/user']);
    });

    this.isError$.pipe(
      filter(Boolean)
    ).subscribe(() => {
      this.snackBar.open('Неправильное имя или пароль', 'Ок', {
        duration: 3000
      });
    });
  }

  public continue(): void {
    this.router.navigate(['/dashboard']);
  }
}
