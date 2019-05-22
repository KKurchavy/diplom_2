import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from '../../environments/urls';
import { HttpOptions } from '../models/http.models';

@Injectable({
  providedIn: 'root'
})
export class ControlTestService {
  private options: HttpOptions = {
    withCredentials: true,
    observe: 'response',
  };

  constructor(private http: HttpClient) { }

  public createControlTest(test: any): Observable<HttpResponse<any>> {
    return this.http.post(urls.controlTestApi, test, this.options);
  }

  public getControlTestsByUserId(userId: string): Observable<HttpResponse<any>> {
    return this.http.get(`${urls.controlTestApi}/${userId}`, this.options);
  }

  public GetControlTestById(testId: string): Observable<HttpResponse<any>> {
    return this.http.get(`${urls.controlTestApi}/test/${testId}`, this.options);
  }

  public getControlTests(): Observable<HttpResponse<any>> {
    return this.http.get(`${urls.controlTestApi}/tests`, this.options);
  }

  public getUserControlTests(): Observable<HttpResponse<any>> {
    return this.http.get(`${urls.controlTestApi}`, this.options);
  }

  public updateControlTestById(testId: string, updateData: any): Observable<HttpResponse<any>> {
    return this.http.put(`${urls.controlTestApi}/${testId}`, updateData, this.options);
  }
}
