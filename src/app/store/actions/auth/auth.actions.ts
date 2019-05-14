import { Action } from '@ngrx/store';
import { LoginDto, User } from '../../../models/auth.models';

export enum AuthActionTypes {
  ConfigureOAuth = '[Auth] Configure OAuth',
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailed = '[Auth] Login Failed',
  RefreshUserData = '[Auth] Refresh User Data',
  RefreshUserDataSuccess = '[Auth] Refresh User Data Success',
  RefreshUserDataFailed = '[Auth] Refresh User Data Failed',
  GetUserProfile = '[Auth] Get User Profile',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutFailed = '[Auth] Logout Failed',
  CreateUser = '[Auth] Create User',
  CreateUserSuccess = '[Auth] Create User Success',
  CreateUserFailed = '[Auth] Create User Failed',
  UpdateUser = '[Auth] Update User',
  UpdateUserSuccess = '[Auth] Update User Success',
  UpdateUserFailed = '[Auth] Update User Failed',
  DeleteUser = '[Auth] Delete User',
  DeleteUserSuccess = '[Auth] Delete User Success',
  DeleteUserFailed = '[Auth] Delete User Failed',
  LoadUser = '[Auth] Load User',
  LoadUserSuccess = '[Auth] Load User Success',
  LoadUserFailed = '[Auth] Load User Failed',
  LoadUsers = '[Auth] Load Users',
  LoadUsersSuccess = '[Auth] Load Users Success',
  LoadUsersFailed = '[Auth] Load Users Failed',
  AddTestResult = '[Auth] Add Test Result',
  AddTestResultSuccess = '[Auth] Add Test Result Success',
  AddTestResultFailed = '[Auth] Add Test Result Failed',
  LoadTestResult = '[Auth] Load Test Result',
  LoadTestResultSuccess = '[Auth] Load Test Result Success',
  LoadTestResultFailed = '[Auth] Load Test Result Failed',
  AddDictionary = '[Auth] Add Dictionary',
  AddDictionarySuccess = '[Auth] Add Dictionary Success',
  AddDictionaryFailed = '[Auth] Add Dictionary Failed',
  DeleteDictionary = '[Auth] Delete Dictionary',
  DeleteDictionarySuccess = '[Auth] Delete Dictionary Success',
  DeleteDictionaryFailed = '[Auth] Delete Dictionary Failed',
}

export class Login implements Action {
  public readonly type = AuthActionTypes.Login;
  constructor(public payload: LoginDto) {}
}

export class LoginSuccess implements Action {
  public readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: User) {}
}

export class LoginFailed implements Action {
  public readonly type = AuthActionTypes.LoginFailed;
  constructor(public payload: any) {}
}

export class RefreshUserData implements Action {
  public readonly type = AuthActionTypes.RefreshUserData;
}

export class RefreshUserDataSuccess implements Action {
  public readonly type = AuthActionTypes.RefreshUserDataSuccess;
  constructor(public payload: User) {}
}

export class RefreshUserDataFailed implements Action {
  public readonly type = AuthActionTypes.RefreshUserDataFailed;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  public readonly type = AuthActionTypes.Logout;
}

export class LogoutSuccess implements Action {
  public readonly type = AuthActionTypes.LogoutSuccess;
}

export class LogoutFailed implements Action {
  public readonly type = AuthActionTypes.LogoutFailed;
}

export class CreateUser implements Action {
  public readonly type = AuthActionTypes.CreateUser;
  constructor(public payload: any) {}
}

export class CreateUserSuccess implements Action {
  public readonly type = AuthActionTypes.CreateUserSuccess;
}

export class CreateUserFailed implements Action {
  public readonly type = AuthActionTypes.CreateUserFailed;
}

export class UpdateUser implements Action {
  public readonly type = AuthActionTypes.UpdateUser;
  constructor(public payload: any) {}
}

export class UpdateUserSuccess implements Action {
  public readonly type = AuthActionTypes.UpdateUserSuccess;
}

export class UpdateUserFailed implements Action {
  public readonly type = AuthActionTypes.UpdateUserFailed;
}

export class DeleteUser implements Action {
  public readonly type = AuthActionTypes.UpdateUser;
  constructor(public payload: string) {}
}

export class DeleteUserSuccess implements Action {
  public readonly type = AuthActionTypes.UpdateUserSuccess;
}

export class DeleteUserFailed implements Action {
  public readonly type = AuthActionTypes.UpdateUserFailed;
}

export class LoadUsers implements Action {
  public readonly type = AuthActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  public readonly type = AuthActionTypes.LoadUsersSuccess;
  constructor(public payload: any[]) {}
}

export class LoadUsersFailed implements Action {
  public readonly type = AuthActionTypes.LoadUsersFailed;
}

export class LoadUser implements Action {
  public readonly type = AuthActionTypes.LoadUser;
  constructor(public payload: string) {}
}

export class LoadUserSuccess implements Action {
  public readonly type = AuthActionTypes.LoadUserSuccess;
  constructor(public payload: any) {}
}

export class LoadUserFailed implements Action {
  public readonly type = AuthActionTypes.LoadUserFailed;
}

export class AddTestResult implements Action {
  public readonly type = AuthActionTypes.AddTestResult;
  constructor(public payload: any) {}
}

export class AddTestResultSuccess implements Action {
  public readonly type = AuthActionTypes.AddTestResultSuccess;
}

export class AddTestResultFailed implements Action {
  public readonly type = AuthActionTypes.AddTestResultFailed;
}

export class LoadTestResult implements Action {
  public readonly type = AuthActionTypes.LoadTestResult;
  constructor(public payload: any) {}
}

export class LoadTestResultSuccess implements Action {
  public readonly type = AuthActionTypes.LoadTestResultSuccess;
  constructor(public payload: any) {}
}

export class LoadTestResultFailed implements Action {
  public readonly type = AuthActionTypes.LoadTestResultFailed;
}

export class AddDictionary implements Action {
  public readonly type = AuthActionTypes.AddDictionary;
  constructor(public payload: string) {}
}

export class AddDictionarySuccess implements Action {
  public readonly type = AuthActionTypes.AddDictionarySuccess;
}

export class AddDictionaryFailed implements Action {
  public readonly type = AuthActionTypes.AddDictionaryFailed;
}

export class DeleteDictionary implements Action {
  public readonly type = AuthActionTypes.DeleteDictionary;
  constructor(public payload: string) {}
}

export class DeleteDictionarySuccess implements Action {
  public readonly type = AuthActionTypes.DeleteDictionarySuccess;
}

export class DeleteDictionaryFailed implements Action {
  public readonly type = AuthActionTypes.DeleteDictionaryFailed;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailed
  | RefreshUserData
  | RefreshUserDataSuccess
  | RefreshUserDataFailed
  | Logout
  | LogoutSuccess
  | LogoutFailed
  | CreateUser
  | CreateUserSuccess
  | CreateUserFailed
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFailed
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFailed
  | LoadUser
  | LoadUserSuccess
  | LoadUserFailed
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFailed
  | AddTestResult
  | AddTestResultSuccess
  | AddTestResultFailed
  | LoadTestResult
  | LoadTestResultSuccess
  | LoadTestResultFailed
  | AddDictionary
  | AddDictionarySuccess
  | AddDictionaryFailed
  | DeleteDictionary
  | DeleteDictionarySuccess
  | DeleteDictionaryFailed;
