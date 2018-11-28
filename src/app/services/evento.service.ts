import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/index';
import { Evento } from '../models/evento';
import { Global } from './global';

@Injectable()
export class EventoService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  saveEvento(evento: Evento): Observable<any> {
      const params = JSON.stringify(evento);
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._http.post(this.url + 'entrada-vehiculo', params, {headers: headers});
  }

  getEventos(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'eventos', { headers: headers });
  }
}
