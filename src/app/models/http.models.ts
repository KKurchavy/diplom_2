import { HttpParams, HttpHeaders } from '@angular/common/http';

export interface HttpOptions {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  observe: 'response';
  params?: HttpParams | {
      [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
