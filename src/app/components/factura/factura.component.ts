import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento.service';
import { Global} from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [EventoService]
})
export class FacturaComponent implements OnInit {
  public url: string;
  public evento: Evento;
  constructor(
    private _eventoService: EventoService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params.id;
      this.getEvento(id);
    });
  }

  getEvento(id) {
    this._eventoService.getEvento(id).subscribe(
      response => {
        this.evento = response.evento;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
