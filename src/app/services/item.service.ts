import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/index';
import { Global } from './global';
import { Item } from '../models/item';

@Injectable()
export class ItemService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  saveItem(item: Item): Observable<any> {
      const params = JSON.stringify(item);
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._http.post(this.url + 'save-item', params, {headers: headers});
  }

  getItems(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'items', { headers: headers });
  }
  getItem(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'item/' + id, { headers: headers });
  }
}
