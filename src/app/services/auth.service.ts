import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto, UserDto } from '../models/auth.models';
import { HttpOptions } from '../models/http.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private options: HttpOptions = {
    withCredentials: true,
    observe: 'response'
  };
  private endpoint = {
    origin: 'http://localhost:3100',
    login: '/auth',
    users: '/user'
  };

  constructor(private http: HttpClient) {}

  public login(loginData: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.endpoint.origin}${this.endpoint.login}`, loginData);
  }

  public createUser(user: UserDto): Observable<HttpResponse<any>> {
    return this.http.post(`${this.endpoint.origin}${this.endpoint.users}`, user, this.options);
  }

  public updateUser(id: string, data: any): Observable<HttpResponse<any>> {
    return this.http.put(`${this.endpoint.origin}${this.endpoint.users}/${id}`, data, this.options);
  }

  public updateCurrentUserData(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.endpoint.origin}${this.endpoint.users}/refresh`, this.options);
  }

  public deleteUser(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.endpoint.origin}${this.endpoint.users}/${id}`, this.options);
  }

  public loadUsers(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.endpoint.origin}${this.endpoint.users}`, this.options);
  }

  public loadUser(id: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${this.endpoint.origin}${this.endpoint.users}/${id}`, this.options);
  }

  public loadTestResult(id: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${this.endpoint.origin}${this.endpoint.users}/results/${id}`, this.options);
  }

  public addTestResult(result: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.endpoint.origin}${this.endpoint.users}/results`, result, this.options);
  }

  public addDictionary(id: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.endpoint.origin}${this.endpoint.users}/dictionary`, { id }, this.options);
  }

  public deleteDictionary(dictionaryId: any): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.endpoint.origin}${this.endpoint.users}/dictionary/${dictionaryId}`, this.options);
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
