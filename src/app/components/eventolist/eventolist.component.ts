import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { Factura } from '../../models/factura';
import { Item } from '../../models/item';
import { Stamp } from '../../models/stamp';
import { EventoService } from '../../services/evento.service';
import { CeldaService} from '../../services/celda.service';
import { ApiconnectService} from '../../services/apiconnect.service';

@Component({
  selector: 'app-eventolist',
  templateUrl: './eventolist.component.html',
  styleUrls: ['./eventolist.component.css'],
  providers: [EventoService, ApiconnectService]
})
export class EventolistComponent implements OnInit {
  public  eventos: Evento[];
  public  evento: Evento;
  public factura: Factura;
  public item: Item;
  public stamp: Stamp;
  public temp: string;
  constructor(
    private _eventoService: EventoService,
    private _celdaService: CeldaService,
    private _apiconnectService: ApiconnectService
  ) {
    this.stamp = new Stamp('', true);
  }

  ngOnInit() {
    this.getEventos();
  }
  getEventos() {
    this._eventoService.getEventos().subscribe(
      response => {
        if (response.eventos) {
          this.eventos = response.eventos;
          this.eventos.forEach(evento => {
            const currentTime = +new Date();
            const tempTime = +new Date(evento.fecha);
            const temp = Math.abs((currentTime - tempTime) / 1000);
            this.temp = temp.toString();
          });
        }
      },
      error => {
        console.log(<any>error);
      }
  );
  }
  createFactura(id) {
    const currentTime = +new Date();
    this._eventoService.getEvento(id).subscribe(
      response => {
        if (response.evento) {
          this.evento = response.evento;
          const tempTime = +new Date(this.evento.fecha);
          const temp = Math.abs((currentTime - tempTime) / 1000);
          this.temp = temp.toString();
          const description = 'Modelo vehiculo: ' + this.evento.modelo;
          this.item = new Item(1, '30', this.temp, description);
          const year = (new Date(this.evento.fecha)).getFullYear();
          const month = (new Date(this.evento.fecha)).getMonth();
          const day = (new Date(this.evento.fecha)).getDay();
          const fechaFactura = year + '-' + month + '-' + day;
          console.log(fechaFactura);
          this.factura =  new Factura('', fechaFactura, fechaFactura, 2, [this.item], this.stamp);
          this._apiconnectService.createFactura(this.factura).subscribe(
            result2 => {
              this._celdaService.getCeldaEtiqueta(response.evento.celdaFin)
              this._eventoService.deleteEvento(response.evento._id).subscribe(
                result => {
                  this.getEventos();
                },
                error => {
                  console.log(<any>error);
                }
              );
            },
            error => {
              console.log(<any>error);
            }
          );
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
