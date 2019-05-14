import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from '../../environments/urls';
import { HttpOptions } from '../models/http.models';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private options: HttpOptions = {
    withCredentials: true,
    observe: 'response',
  };

  constructor(private http: HttpClient) { }

  public getWords(): Observable<HttpResponse<any>> {
    return this.http.get(urls.wordsApi, this.options);
  }

  public createWord(word: any | any[]): Observable<HttpResponse<any>> {
    return this.http.post(urls.wordsApi, word, this.options);
  }

  public updateWord(id: string, word): Observable<HttpResponse<any>> {
    return this.http.put(`${urls.wordsApi}/${id}`, word, this.options);
  }

  public deleteWord(id: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${urls.wordsApi}/${id}`, this.options);
  }
}
