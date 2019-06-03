import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto, UserDto } from '../models/auth.models';
import { HttpOptions } from '../models/http.models';
import { urls } from '../../environments/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private options: HttpOptions = {
    withCredentials: true,
    observe: 'response'
  };

  constructor(private http: HttpClient) {}

  public login(loginData: LoginDto): Observable<any> {
    return this.http.post<any>(`${urls.authApi}`, loginData);
  }

  public createUser(user: UserDto): Observable<HttpResponse<any>> {
    return this.http.post(`${urls.usersApi}`, user, this.options);
  }

  public updateUser(id: string, data: any): Observable<HttpResponse<any>> {
    return this.http.put(`${urls.usersApi}/${id}`, data, this.options);
  }

  public updateCurrentUserData(): Observable<HttpResponse<any>> {
    return this.http.get(`${urls.usersApi}/refresh`, this.options);
  }

  public deleteUser(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${urls.usersApi}/${id}`, this.options);
  }

  public loadUsers(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${urls.usersApi}`, this.options);
  }

  public loadUser(id: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${urls.usersApi}/${id}`, this.options);
  }

  public loadTestResult(id: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${urls.usersApi}/results/${id}`, this.options);
  }

  public addTestResult(result: any): Observable<HttpResponse<any>> {
    return this.http.post(`${urls.usersApi}/results`, result, this.options);
  }

  public addDictionary(id: any): Observable<HttpResponse<any>> {
    return this.http.post(`${urls.usersApi}/dictionary`, { id }, this.options);
  }

  public deleteDictionary(dictionaryId: any): Observable<HttpResponse<any>> {
    return this.http.delete(`${urls.usersApi}/dictionary/${dictionaryId}`, this.options);
  }

  public setSessionData(data: any): void {
    sessionStorage.setItem('token', JSON.stringify(data));
  }

  public getSessionData(): any {
    return JSON.parse(sessionStorage.getItem('token') || '');
  }

  public logout() {
    sessionStorage.clear();
  }
}
