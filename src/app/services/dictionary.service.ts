import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from '../../environments/urls';
import { HttpOptions } from '../models/http.models';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private options: HttpOptions = {
    withCredentials: true,
    observe: 'response',
  };

  constructor(private http: HttpClient) { }

  public getDictionaries(): Observable<HttpResponse<any>> {
    return this.http.get(urls.dictionaryApi, this.options);
  }

  public getDictionaryById(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`${urls.dictionaryApi}/${id}`, this.options);
  }

  public createDictionary(dictionary: any): Observable<HttpResponse<any>> {
    return this.http.post(urls.dictionaryApi, dictionary, this.options);
  }

  public addWordInDictionary(id: string, word: any): Observable<HttpResponse<any>> {
    return this.http.post(`${urls.dictionaryApi}/${id}/words`, { word }, this.options);
  }

  public deleteWordFromDictionary(id: string, word: any): Observable<HttpResponse<any>> {
    return this.http.post(`${urls.dictionaryApi}/${id}/words/delete`, { word }, this.options);
  }

  public updateDictionary(id: string, data: any): Observable<HttpResponse<any>> {
    return this.http.put(`${urls.dictionaryApi}/${id}`, data, this.options);
  }

  public deleteDictionary(id: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${urls.dictionaryApi}/${id}`, this.options);
  }
}
