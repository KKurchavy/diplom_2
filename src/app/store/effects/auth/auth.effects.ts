import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import {
  AuthActionTypes, Login, LoginSuccess, Logout, LogoutSuccess,
  LoginFailed, CreateUser, CreateUserSuccess, CreateUserFailed,
  LoadUser, LoadUserSuccess, LoadUserFailed, LoadUsers, LoadUsersSuccess,
  LoadUsersFailed, AddTestResult, AddTestResultSuccess, AddTestResultFailed,
  LoadTestResult, LoadTestResultSuccess, LoadTestResultFailed, UpdateUser,
  UpdateUserSuccess, UpdateUserFailed, DeleteUser, DeleteUserSuccess, DeleteUserFailed,
  AddDictionary, AddDictionarySuccess, AddDictionaryFailed, RefreshUserData,
  RefreshUserDataSuccess, RefreshUserDataFailed, DeleteDictionary, DeleteDictionarySuccess,
  DeleteDictionaryFailed
} from '../../actions/auth/auth.actions';
import { Router } from '@angular/router';



@Injectable()
export class AuthEffects {

  @Effect()
  public login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    exhaustMap(({ payload }) => {
      return this.authService.login(payload).pipe(
        map(({ user, token }) => {
          this.authService.setSessionData(token);
          return new LoginSuccess(user);
        }),
        catchError(error => of(new LoginFailed(error)))
      );
    })
  );

  @Effect()
  public createUser$ = this.actions$.pipe(
    ofType<CreateUser>(AuthActionTypes.CreateUser),
    exhaustMap(({ payload }) => {
      return this.authService.createUser(payload).pipe(
        switchMap(() => [new CreateUserSuccess(), new LoadUsers()]),
        catchError(() => of(new CreateUserFailed()))
      );
    })
  );

  @Effect()
  public updateUser$ = this.actions$.pipe(
    ofType<UpdateUser>(AuthActionTypes.UpdateUser),
    exhaustMap(({ payload }) => {
      return this.authService.updateUser(payload.userId, payload.data).pipe(
        switchMap(() => [new UpdateUserSuccess(), new LoadUsers(), new LoadUser(payload.userId)]),
        catchError(() => of(new UpdateUserFailed()))
      );
    })
  );

  @Effect()
  public deleteUser$ = this.actions$.pipe(
    ofType<DeleteUser>(AuthActionTypes.DeleteUser),
    exhaustMap(({ payload }) => {
      return this.authService.deleteUser(payload).pipe(
        switchMap(() => [new DeleteUserSuccess(), new LoadUsers()]),
        catchError(() => of(new DeleteUserFailed()))
      );
    })
  );

  @Effect()
  public loadUser$ = this.actions$.pipe(
    ofType<LoadUser>(AuthActionTypes.LoadUser),
    exhaustMap(({ payload }) => {
      return this.authService.loadUser(payload).pipe(
        map(({ body }) => new LoadUserSuccess(body)),
        catchError(() => of(new LoadUserFailed()))
      );
    })
  );

  @Effect()
  public loadUsers$ = this.actions$.pipe(
    ofType<LoadUsers>(AuthActionTypes.LoadUsers),
    exhaustMap(() => {
      return this.authService.loadUsers().pipe(
        map(({ body }) => new LoadUsersSuccess(body)),
        catchError(() => of(new LoadUsersFailed()))
      );
    })
  );

  @Effect()
  public addTestResult$ = this.actions$.pipe(
    ofType<AddTestResult>(AuthActionTypes.AddTestResult),
    exhaustMap(({ payload }) => {
      return this.authService.addTestResult(payload).pipe(
        switchMap(() => [new AddTestResultSuccess(), new RefreshUserData()]),
        catchError(() => of(new AddTestResultFailed()))
      );
    })
  );

  @Effect()
  public loadTestResult$ = this.actions$.pipe(
    ofType<LoadTestResult>(AuthActionTypes.LoadTestResult),
    exhaustMap(({ payload }) => {
      return this.authService.loadTestResult(payload).pipe(
        map(({ body }) => new LoadTestResultSuccess(body)),
        catchError(() => of(new LoadTestResultFailed()))
      );
    })
  );

  @Effect()
  public addDictionary$ = this.actions$.pipe(
    ofType<AddDictionary>(AuthActionTypes.AddDictionary),
    exhaustMap(({ payload }) => {
      return this.authService.addDictionary(payload).pipe(
        switchMap(() => [new AddDictionarySuccess(), new RefreshUserData()]),
        catchError(() => of(new AddDictionaryFailed()))
      );
    })
  );

  @Effect()
  public deleteDictionary$ = this.actions$.pipe(
    ofType<DeleteDictionary>(AuthActionTypes.DeleteDictionary),
    exhaustMap(({ payload }) => {
      return this.authService.deleteDictionary(payload).pipe(
        switchMap(() => [new DeleteDictionarySuccess(), new RefreshUserData()]),
        catchError(() => of(new DeleteDictionaryFailed()))
      );
    })
  );

  @Effect()
  public refreshUserData$ = this.actions$.pipe(
    ofType<RefreshUserData>(AuthActionTypes.RefreshUserData),
    exhaustMap(() => {
      return this.authService.updateCurrentUserData().pipe(
        map(({ body }) => new RefreshUserDataSuccess(body)),
        catchError((error) => of(new RefreshUserDataFailed(error)))
      );
    })
  );

  @Effect()
  public logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    exhaustMap(() => {
      this.authService.logout();
      this.router.navigate(['auth']);
      return of(new LogoutSuccess());
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
