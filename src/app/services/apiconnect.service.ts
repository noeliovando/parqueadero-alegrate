import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Factura } from '../models/factura';
import { Item} from '../models/item';
import { Stamp } from '../models/stamp';

@Injectable({
  providedIn: 'root',
})
export class ApiconnectService {

  public url: string;
  public factura: Factura;
  public item: Item[];
  public stamp: Stamp;
  constructor(
    private _http: HttpClient
  ) {
    this.url = 'https://app.alegra.com/api/v1/';
  }
  createFactura(factura: Factura): Observable<any> {
    this.factura = factura;
    const params = JSON.stringify(this.factura);
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic b3ZhbmRvbnNjQGdtYWlsLmNvbTphNjI0N2RkM2IwZjYwZTJlZDVkMQ=='
    });

    return this._http.post(this.url + 'invoices', params, {headers: headers});
  }

}
