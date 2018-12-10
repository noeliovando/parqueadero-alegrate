import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Log } from '../models/log';
import { Global } from './global';

@Injectable()
export class LogService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  saveLog(log: Log): Observable<any> {
      const params = JSON.stringify(log);
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._http.post(this.url + 'save-log', params, {headers: headers});
  }

  getLogs(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'logs', { headers: headers });
  }
  getLog(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'log/' + id, { headers: headers });
  }
  deleteLog(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + 'log/' + id, { headers: headers });
  }
  getLogPlaca(placa): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log()
    return this._http.get(this.url + 'log-placa/' + placa, { headers: headers });
  }
}
