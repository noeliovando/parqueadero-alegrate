import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/index';
import { Celda } from '../models/celda';
import { Global } from './global';

@Injectable()
export class CeldaService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }
  getCeldas(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'celdas', { headers: headers });
  }
  getCeldaEtiqueta(etiqueta): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'celda-etiqueta/' + etiqueta, { headers: headers });
  }
  updateCelda(celda): Observable<any> {
    const params = JSON.stringify(celda);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(celda._id);
    return this._http.put(this.url + 'update-celda/' + celda._id, params, { headers: headers });
  }
}
