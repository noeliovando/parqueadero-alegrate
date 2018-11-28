import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-eventolist',
  templateUrl: './eventolist.component.html',
  styleUrls: ['./eventolist.component.css'],
  providers: [EventoService]
})
export class EventolistComponent implements OnInit {
  public  eventos: Evento[];
  constructor(
    private _eventoService: EventoService
  ) {}

  ngOnInit() {
    this.getEventos();
  }
  getEventos() {
    const currentTime = +new Date();
    this._eventoService.getEventos().subscribe(
      response => {
        if (response.eventos) {
          this.eventos = response.eventos;
          this.eventos.forEach(evento => {
            const tempTime = +new Date(evento.fecha);
            const temp = Math.abs((currentTime - tempTime) / 1000);
            evento.fecha = temp.toString();
          });
        }
      },
      error => {
        console.log(<any>error);
      }
  );
  }

}
